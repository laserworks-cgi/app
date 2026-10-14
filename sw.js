const CACHE_NAME = 'dompetku-shell-v4';
const APP_SHELL = ["./", "./index.html", "./manifest.webmanifest", "./assets/css/app.css", "./assets/js/storage.js", "./assets/js/page-loader.js", "./assets/js/app.js", "./pages/home/index.html", "./pages/home/style.css", "./pages/history/index.html", "./pages/history/style.css", "./pages/budget/index.html", "./pages/budget/style.css", "./pages/budget/app.js", "./pages/more/index.html", "./pages/more/style.css", "./assets/icons/icon.svg", "./assets/icons/icon-192.png", "./assets/icons/icon-512.png", "./assets/icons/icon-maskable-512.png"];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('dompetku-shell-') && key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith(caches.match(req).then(cached => cached || fetch(req).then(response => {
    if (response && response.ok) { const copy = response.clone(); caches.open(CACHE_NAME).then(cache => cache.put(req, copy)); }
    return response;
  }).catch(() => caches.match('./index.html'))));
});
