/* Page/module loader. Add new routes here; keep page logic inside its own folder. */
(function () {
  'use strict';
  const routes = [
    { id: 'tab-1', html: './pages/home/index.html', css: './pages/home/style.css' },
    { id: 'tab-2', html: './pages/history/index.html', css: './pages/history/style.css' },
    { id: 'tab-3', html: './pages/budget/index.html', css: './pages/budget/style.css', js: './pages/budget/app.js' },
    { id: 'tab-4', html: './pages/more/index.html', css: './pages/more/style.css' }
  ];
  function addStyle(href) {
    const abs = new URL(href, document.baseURI).href;
    if (Array.from(document.querySelectorAll('link[rel="stylesheet"]')).some(n => n.href === abs)) return;
    const link = document.createElement('link'); link.rel = 'stylesheet'; link.href = href; document.head.appendChild(link);
  }
  function addScript(src) {
    return new Promise((resolve, reject) => {
      const abs = new URL(src, document.baseURI).href;
      const existing = Array.from(document.scripts).find(s => s.src === abs);
      if (existing && existing.dataset.loaded === 'true') return resolve();
      if (existing) { existing.addEventListener('load', resolve, { once: true }); existing.addEventListener('error', reject, { once: true }); return; }
      const script = document.createElement('script'); script.src = src; script.async = true;
      script.onload = () => { script.dataset.loaded = 'true'; resolve(); };
      script.onerror = () => reject(new Error('Gagal memuat modul: ' + src));
      document.body.appendChild(script);
    });
  }
  async function loadAll() {
    await Promise.all(routes.map(async route => {
      const response = await fetch(route.html, { cache: 'no-cache' });
      if (!response.ok) throw new Error('Halaman gagal dimuat: ' + route.html + ' (' + response.status + ')');
      document.getElementById(route.id).innerHTML = await response.text();
      addStyle(route.css);
    }));
    for (const route of routes) if (route.js) await addScript(route.js);
  }
  window.DompetKuPages = Object.freeze({ routes, loadAll });
})();
