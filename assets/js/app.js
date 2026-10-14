// ====== KONFIGURASI AKUN ======
        const BANK_MODES = ['pay', 'transfer', 'withdraw', 'deposit', 'income'];
        const EW_MODES = ['pay', 'transfer', 'topup', 'income'];
        const ACCOUNTS = {
            cash:      { name: 'Uang Cash',    group: 'cash',     icon: 'fa-money-bill-wave',  tile: 'bg-amber-100 text-amber-600',     modes: ['pay', 'transfer', 'income'] },
            // Bank
            mandiri:   { name: 'Bank Mandiri', group: 'bank',     icon: 'fa-building-columns', tile: 'bg-yellow-100 text-yellow-600',   modes: BANK_MODES, domain: 'bankmandiri.co.id' },
            bri:       { name: 'Bank BRI',     group: 'bank',     icon: 'fa-building-columns', tile: 'bg-blue-100 text-blue-700',       modes: BANK_MODES, domain: 'bri.co.id' },
            bca:       { name: 'Bank BCA',     group: 'bank',     icon: 'fa-building-columns', tile: 'bg-sky-100 text-sky-600',         modes: BANK_MODES, domain: 'bca.co.id' },
            bni:       { name: 'Bank BNI',     group: 'bank',     icon: 'fa-building-columns', tile: 'bg-orange-100 text-orange-600',   modes: BANK_MODES, domain: 'bni.co.id' },
            bsi:       { name: 'BSI',          group: 'bank',     icon: 'fa-building-columns', tile: 'bg-teal-100 text-teal-600',       modes: BANK_MODES, domain: 'bankbsi.co.id' },
            btn:       { name: 'Bank BTN',     group: 'bank',     icon: 'fa-building-columns', tile: 'bg-amber-100 text-amber-600',     modes: BANK_MODES, domain: 'btn.co.id' },
            cimb:      { name: 'CIMB Niaga',   group: 'bank',     icon: 'fa-building-columns', tile: 'bg-red-100 text-red-600',         modes: BANK_MODES, domain: 'cimbniaga.co.id' },
            permata:   { name: 'PermataBank',  group: 'bank',     icon: 'fa-building-columns', tile: 'bg-green-100 text-green-600',     modes: BANK_MODES, domain: 'permatabank.com' },
            danamon:   { name: 'Bank Danamon', group: 'bank',     icon: 'fa-building-columns', tile: 'bg-orange-100 text-orange-600',   modes: BANK_MODES, domain: 'danamon.co.id' },
            jago:      { name: 'Bank Jago',    group: 'bank',     icon: 'fa-building-columns', tile: 'bg-amber-100 text-amber-600',     modes: BANK_MODES, domain: 'jago.com' },
            seabank:   { name: 'SeaBank',      group: 'bank',     icon: 'fa-water',            tile: 'bg-orange-100 text-orange-600',   modes: BANK_MODES },
            jenius:    { name: 'Jenius',       group: 'bank',     icon: 'fa-building-columns', tile: 'bg-sky-100 text-sky-600',         modes: BANK_MODES, domain: 'jenius.com' },
            blu:       { name: 'blu by BCA',   group: 'bank',     icon: 'fa-droplet',          tile: 'bg-blue-100 text-blue-600',       modes: BANK_MODES },
            // E-Wallet
            dana:      { name: 'DANA',         group: 'ewallet',  icon: 'fa-wallet',           tile: 'bg-blue-100 text-blue-600',       modes: EW_MODES, domain: 'dana.id' },
            shopeepay: { name: 'ShopeePay',    group: 'ewallet',  icon: 'fa-bag-shopping',     tile: 'bg-orange-100 text-orange-600',   modes: EW_MODES, domain: 'shopee.co.id' },
            gopay:     { name: 'GoPay',        group: 'ewallet',  icon: 'fa-mobile-screen',    tile: 'bg-emerald-100 text-emerald-600', modes: EW_MODES, domain: 'gopay.co.id' },
            ovo:       { name: 'OVO',          group: 'ewallet',  icon: 'fa-circle-dollar-to-slot', tile: 'bg-purple-100 text-purple-600', modes: EW_MODES },
            linkaja:   { name: 'LinkAja',      group: 'ewallet',  icon: 'fa-link',             tile: 'bg-red-100 text-red-600',         modes: EW_MODES },
            sakuku:    { name: 'Sakuku',       group: 'ewallet',  icon: 'fa-wallet',           tile: 'bg-sky-100 text-sky-600',         modes: EW_MODES },
            isaku:     { name: 'iSaku',        group: 'ewallet',  icon: 'fa-wallet',           tile: 'bg-rose-100 text-rose-600',       modes: EW_MODES },
            // Tabungan
            tabungan:  { name: 'Tabungan',     group: 'tabungan', icon: 'fa-piggy-bank',       tile: 'bg-teal-100 text-teal-600',       modes: ['transfer', 'topup'] }
        };
        const GROUPS = [
            { id: 'cash', label: 'Uang Cash', bar: 'bg-amber-400' },
            { id: 'bank', label: 'Rekening Bank', bar: 'bg-blue-500' },
            { id: 'ewallet', label: 'E-Wallet', bar: 'bg-emerald-400' },
            { id: 'tabungan', label: 'Tabungan', bar: 'bg-teal-500' }
        ];
        const MODE_ICONS = { pay: 'fa-cart-shopping', transfer: 'fa-right-left', topup: 'fa-circle-plus', withdraw: 'fa-money-bill-1-wave', deposit: 'fa-download', income: 'fa-arrow-down' };
        const MODE_LABELS = { pay: 'Bayar', transfer: 'Transfer', topup: 'Top Up', withdraw: 'Tarik', deposit: 'Setor', income: 'Terima' };
        const MODE_TITLES = { pay: 'Bayar', transfer: 'Transfer', topup: 'Top Up Saldo', withdraw: 'Tarik Tunai', deposit: 'Setor Tunai', income: 'Terima Dana' };
        const NOMINAL_LABELS = { pay: 'Nominal pengeluaran', transfer: 'Nominal transfer', topup: 'Nominal top up', withdraw: 'Nominal tarik tunai', deposit: 'Nominal setor tunai', income: 'Nominal diterima' };
        const PAY_CATS = ['Belanja Online', 'Tagihan', 'Pulsa & Data', 'Makan & Minum', 'Transport', 'Lainnya'];
        const IN_CATS = ['Gaji', 'Bonus', 'Transfer Masuk', 'Lainnya'];
        const MOVE_KINDS = ['transfer', 'withdraw', 'topup', 'deposit'];
        const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des'];
        const keysOf = g => Object.keys(ACCOUNTS).filter(k => ACCOUNTS[k].group === g);
        const $ = id => document.getElementById(id);

        function modeLabel(k, m) {
            if (k === 'tabungan') { if (m === 'transfer') return 'Tarik'; if (m === 'topup') return 'Menabung'; }
            return MODE_LABELS[m];
        }
        function modeTitle(k, m) {
            if (k === 'tabungan') { if (m === 'transfer') return 'Tarik Dana'; if (m === 'topup') return 'Menabung'; }
            return MODE_TITLES[m];
        }

        // ====== STATE UTAMA (transaksi) ======
        function freshState() {
            const balances = {};
            Object.keys(ACCOUNTS).forEach(k => balances[k] = 0);
            return { balances, transactions: [], hide: false };
        }
        let appState = freshState();
        try {
            const saved = window.DompetKuStorage.getFinance(freshState());
            if (saved && saved.balances && Array.isArray(saved.transactions)) {
                appState = saved;
                Object.keys(ACCOUNTS).forEach(k => { if (typeof appState.balances[k] !== 'number' || !Number.isFinite(appState.balances[k])) appState.balances[k] = 0; });
            }
        } catch (e) { console.error('State utama gagal dibaca:', e); }
        try { window.DompetKuStorage.setFinance(appState); } catch (e) { console.error('Inisialisasi penyimpanan gagal:', e); }
        function saveData() { try { window.DompetKuStorage.setFinance(appState); } catch (e) { console.error('Penyimpanan gagal:', e); showToast('Data gagal disimpan. Periksa ruang penyimpanan.'); } }

        // ====== UTIL ======
        function formatRupiah(n) { return 'Rp ' + Math.round(n).toLocaleString('id-ID'); }
        function fmt(n) { return appState.hide ? 'Rp ••••••' : formatRupiah(n); }
        function esc(s) { return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
        function accName(k) { return ACCOUNTS[k] ? ACCOUNTS[k].name : k; }
        function bal(k) { return appState.balances[k] || 0; }
        function totalBalance() { return Object.values(appState.balances).reduce((a, b) => a + b, 0); }
        function tile(k, size) {
            const a = ACCOUNTS[k], s = size || 'w-10 h-10';
            if (a.domain) {
                return `<div class="${s} shrink-0 rounded-xl bg-white border border-slate-100 flex items-center justify-center overflow-hidden"><img src="https://www.google.com/s2/favicons?domain=${a.domain}&sz=128" alt="${esc(a.name)}" loading="lazy" class="w-full h-full object-contain p-1.5" onload="if(this.naturalWidth<24)logoFallback(this,'${k}')" onerror="logoFallback(this,'${k}')"></div>`;
            }
            return `<div class="${s} shrink-0 rounded-xl ${a.tile} flex items-center justify-center text-sm"><i class="fa-solid ${a.icon}"></i></div>`;
        }
        function logoFallback(img, k) {
            const a = ACCOUNTS[k], p = img.parentElement;
            p.className = p.className.replace('bg-white border border-slate-100', a.tile) + ' text-sm';
            p.innerHTML = `<i class="fa-solid ${a.icon}"></i>`;
        }
        function dayLabel(ts) {
            const d = new Date(ts), n = new Date();
            const a = new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
            const b = new Date(n.getFullYear(), n.getMonth(), n.getDate()).getTime();
            const diff = Math.round((b - a) / 86400000);
            if (diff === 0) return 'Hari ini';
            if (diff === 1) return 'Kemarin';
            return `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
        }
        function timeLabel(ts) { const d = new Date(ts); return String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0'); }
        function inThisMonth(ts) { const d = new Date(ts), n = new Date(); return d.getMonth() === n.getMonth() && d.getFullYear() === n.getFullYear(); }
        function monthStats() {
            let inc = 0, out = 0;
            appState.transactions.forEach(t => {
                if (!inThisMonth(t.ts)) return;
                if (t.kind === 'in') inc += t.amount;
                if (t.kind === 'pay') out += t.amount;
            });
            return { inc, out };
        }
        function filterList(containerId, q) {
            q = q.trim().toLowerCase();
            const box = $(containerId);
            box.querySelectorAll('[data-name]').forEach(r => r.classList.toggle('hidden', q && !r.dataset.name.includes(q)));
            box.querySelectorAll('[data-gw]').forEach(w => {
                const any = Array.from(w.querySelectorAll('[data-name]')).some(r => !r.classList.contains('hidden'));
                w.classList.toggle('hidden', !any);
            });
        }

        let lastTxId = null;
        let txFilter = 'all';

        // ====== RENDER BERANDA ======
        function rowHtml(k) {
            const a = ACCOUNTS[k];
            const sub = a.modes.map(m => modeLabel(k, m)).slice(0, 3).join(' • ');
            return `
            <button onclick="openAccount('${k}')" class="w-full flex items-center py-3 active:opacity-60 transition">
                ${tile(k)}
                <div class="flex-1 text-left ml-3 min-w-0">
                    <p class="text-sm font-bold text-slate-900 truncate">${a.name}</p>
                    <p class="text-[11px] text-slate-400">${sub}</p>
                </div>
                <p class="text-sm font-bold text-slate-900 mr-2">${fmt(bal(k))}</p>
                <i class="fa-solid fa-chevron-right text-slate-300 text-[10px]"></i>
            </button>`;
        }
        function cellHtml(k) {
            return `
            <button onclick="openAccount('${k}')" class="flex flex-col items-center text-center p-2 rounded-2xl active:bg-slate-100 transition min-w-0">
                ${tile(k, 'w-11 h-11')}
                <p class="text-[11px] font-bold text-slate-900 mt-1.5 w-full truncate">${ACCOUNTS[k].name}</p>
                <p class="text-[11px] font-semibold text-slate-500 w-full truncate">${fmt(bal(k))}</p>
            </button>`;
        }
        const expanded = { bank: false, ewallet: false };
        function toggleExpand(g) { expanded[g] = !expanded[g]; renderHome(); }
        function moreCellHtml(group, n) {
            return `
            <button onclick="toggleExpand('${group}')" class="flex flex-col items-center text-center p-2 rounded-2xl active:bg-slate-100 transition min-w-0">
                <div class="w-11 h-11 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center text-sm font-extrabold">+${n}</div>
                <p class="text-[11px] font-bold text-slate-900 mt-1.5">Lainnya</p>
                <p class="text-[11px] text-slate-400">Lihat semua</p>
            </button>`;
        }
        // Tampil otomatis hanya akun bersaldo. 3 kolom, maksimal 2 baris; lebih dari 6 bisa di-expand.
        function renderGrid(groupId, elId, title) {
            const keys = keysOf(groupId).filter(k => bal(k) > 0).sort((a, b) => bal(b) - bal(a));
            if (!keys.length) {
                $(elId).innerHTML = `<p class="text-[11px] text-slate-400 px-1 pb-1">Belum ada ${title.toLowerCase()} dengan saldo. Isi lewat ikon berangkas.</p>`;
                return;
            }
            let cells, foot = '';
            if (keys.length <= 6) cells = keys.map(cellHtml);
            else if (expanded[groupId]) {
                cells = keys.map(cellHtml);
                foot = `<button onclick="toggleExpand('${groupId}')" class="w-full mt-1 py-2 text-xs font-bold text-blue-600 rounded-xl active:bg-slate-100 transition">Tampilkan lebih sedikit <i class="fa-solid fa-chevron-up ml-1 text-[10px]"></i></button>`;
            } else cells = keys.slice(0, 5).map(cellHtml).concat(moreCellHtml(groupId, keys.length - 5));
            $(elId).innerHTML = `<div class="grid grid-cols-3 gap-1">${cells.join('')}</div>` + foot;
        }
        function renderHome() {
            const total = totalBalance();
            $('txt-total').textContent = fmt(total);
            const st = monthStats();
            $('txt-in').textContent = fmt(st.inc);
            $('txt-out').textContent = fmt(st.out);
            $('eye-icon').className = appState.hide ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye';

            const empty = total === 0 && appState.transactions.length === 0;
            const hint = $('empty-hint');
            hint.classList.toggle('hidden', !empty); hint.classList.toggle('flex', empty);
            $('vault-btn').classList.toggle('pulse-ring', empty);

            $('card-cash').innerHTML = rowHtml('cash');
            $('card-tabungan').innerHTML = rowHtml('tabungan');
            renderGrid('bank', 'grid-bank', 'Rekening Bank');
            renderGrid('ewallet', 'grid-ewallet', 'E-Wallet');
            $('sum-bank').textContent = fmt(keysOf('bank').reduce((s, k) => s + bal(k), 0));
            $('sum-ewallet').textContent = fmt(keysOf('ewallet').reduce((s, k) => s + bal(k), 0));
        }
        function toggleHide() { appState.hide = !appState.hide; saveData(); renderHome(); }

        // ====== RENDER RIWAYAT ======
        const FILTERS = [
            { id: 'all', label: 'Semua' },
            { id: 'pay', label: 'Keluar' },
            { id: 'transfer', label: 'Transfer' },
            { id: 'in', label: 'Masuk' }
        ];
        function setFilter(f) { txFilter = f; renderTx(); }
        function matchFilter(t) {
            if (txFilter === 'all') return true;
            if (txFilter === 'pay') return t.kind === 'pay';
            if (txFilter === 'transfer') return MOVE_KINDS.includes(t.kind);
            if (txFilter === 'in') return t.kind === 'in' || t.kind === 'adjust';
            return true;
        }
        function renderTx() {
            $('filter-chips').innerHTML = FILTERS.map(f =>
                `<button onclick="setFilter('${f.id}')" class="shrink-0 px-4 py-2 rounded-full text-xs font-bold transition active:scale-95 ${txFilter === f.id ? 'bg-blue-600 text-white shadow' : 'bg-white text-slate-500 shadow-sm'}">${f.label}</button>`).join('');

            const list = appState.transactions.slice().reverse().filter(matchFilter);
            const box = $('transaction-list');
            if (!list.length) {
                box.innerHTML = `
                <div class="bg-white rounded-3xl p-8 text-center shadow-sm shadow-slate-200/70">
                    <div class="w-14 h-14 mx-auto rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center text-xl mb-3"><i class="fa-solid fa-receipt"></i></div>
                    <p class="text-sm font-bold text-slate-800">Belum ada transaksi</p>
                    <p class="text-xs text-slate-400 mt-1">Isi saldo awal lewat ikon berangkas, lalu mulai bertransaksi.</p>
                </div>`;
                return;
            }
            const groups = [];
            list.forEach(t => {
                const label = dayLabel(t.ts);
                let g = groups.find(x => x.label === label);
                if (!g) { g = { label, items: [] }; groups.push(g); }
                g.items.push(t);
            });
            box.innerHTML = groups.map(g => `
                <div>
                    <p class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-1">${g.label}</p>
                    <div class="bg-white rounded-3xl px-4 shadow-sm shadow-slate-200/70 divide-y divide-slate-100 overflow-hidden">
                        ${g.items.map(txRow).join('')}
                    </div>
                </div>`).join('');
        }
        const TX_ICONS = { pay: 'fa-cart-shopping', in: 'fa-arrow-down', adjust: 'fa-sliders', transfer: 'fa-right-left', withdraw: 'fa-money-bill-1-wave', topup: 'fa-circle-plus', deposit: 'fa-download' };
        function txRow(t) {
            const icon = TX_ICONS[t.kind] || 'fa-right-left';
            let tone, sign, sub;
            if (MOVE_KINDS.includes(t.kind)) { tone = 'blue'; sign = ''; sub = `${accName(t.from)} <i class="fa-solid fa-arrow-right text-[8px] mx-0.5"></i> ${accName(t.to)}`; }
            else {
                tone = t.kind === 'pay' ? 'rose' : t.kind === 'in' ? 'emerald' : 'slate';
                sign = t.kind === 'in' ? '+' : '-';
                sub = accName(t.account) + (t.cat ? ` • ${esc(t.cat)}` : '');
            }
            const isNew = t.id && t.id === lastTxId;
            return `
            <div class="${isNew ? 'flash-new' : ''} flex items-center py-3 -mx-4 px-4">
                <div class="w-10 h-10 shrink-0 rounded-full bg-${tone}-100 text-${tone}-600 flex items-center justify-center text-xs"><i class="fa-solid ${icon}"></i></div>
                <div class="flex-1 min-w-0 ml-3">
                    <p class="text-sm font-bold text-slate-900 truncate">${esc(t.title)}</p>
                    <p class="text-[11px] text-slate-400 truncate">${timeLabel(t.ts)} • ${sub}</p>
                </div>
                <span class="text-sm font-bold text-${tone}-600 ml-2 shrink-0">${sign}${formatRupiah(t.amount)}</span>
            </div>`;
        }

        // ====== RENDER RINGKASAN ======
        function barList(rows, total, color) {
            return rows.map(([k, v]) => `
                <div>
                    <div class="flex justify-between text-xs mb-1"><span class="font-semibold text-slate-700">${esc(k)}</span><span class="font-bold text-slate-900">${formatRupiah(v)}</span></div>
                    <div class="h-2 rounded-full bg-slate-100 overflow-hidden"><div class="h-full ${color} rounded-full" style="width:${(v / total * 100).toFixed(1)}%"></div></div>
                </div>`).join('');
        }
        function renderSummary() {
            const st = monthStats();
            $('sum-month').textContent = new Date().toLocaleDateString('id-ID', { month: 'long', year: 'numeric' });
            $('s-in').textContent = formatRupiah(st.inc);
            $('s-out').textContent = formatRupiah(st.out);
            const net = st.inc - st.out;
            $('s-net').textContent = (net < 0 ? '-' : '') + formatRupiah(Math.abs(net));

            const total = totalBalance();
            if (total <= 0) {
                $('s-comp').innerHTML = `<p class="text-xs text-slate-400">Belum ada saldo. Isi saldo awal lewat ikon berangkas.</p>`;
            } else {
                const parts = GROUPS.map(g => ({ ...g, sum: keysOf(g.id).reduce((s, k) => s + bal(k), 0) }));
                $('s-comp').innerHTML = `
                    <div class="flex h-3 rounded-full overflow-hidden bg-slate-100">
                        ${parts.filter(p => p.sum > 0).map(p => `<div class="${p.bar}" style="width:${(p.sum / total * 100).toFixed(2)}%"></div>`).join('')}
                    </div>
                    <div class="mt-3 space-y-2">
                        ${parts.map(p => `
                        <div class="flex items-center justify-between text-xs">
                            <div class="flex items-center"><span class="w-2.5 h-2.5 rounded-full ${p.bar} mr-2"></span><span class="text-slate-600">${p.label}</span></div>
                            <div><span class="font-bold text-slate-900">${formatRupiah(p.sum)}</span><span class="text-slate-400 ml-2">${(p.sum / total * 100).toFixed(0)}%</span></div>
                        </div>`).join('')}
                    </div>`;
            }

            const byAcc = {}, byCat = {};
            appState.transactions.forEach(t => {
                if (t.kind !== 'pay' || !inThisMonth(t.ts)) return;
                byAcc[accName(t.account)] = (byAcc[accName(t.account)] || 0) + t.amount;
                const c = t.cat || 'Lainnya';
                byCat[c] = (byCat[c] || 0) + t.amount;
            });
            const accRows = Object.entries(byAcc).sort((a, b) => b[1] - a[1]);
            const catRows = Object.entries(byCat).sort((a, b) => b[1] - a[1]);
            const none = `<p class="text-xs text-slate-400">Belum ada pengeluaran bulan ini.</p>`;
            $('s-spend').innerHTML = accRows.length ? barList(accRows, st.out, 'bg-blue-500') : none;
            $('s-cat').innerHTML = catRows.length ? barList(catRows, st.out, 'bg-emerald-500') : none;
        }

        function updateUI() { renderHome(); renderTx(); renderSummary(); }

        // ====== NAVIGASI ======
        const TITLES = { 1: 'DompetKu', 2: 'Riwayat', 3: 'Anggaran', 4: 'Lainnya' };
        let currentTab = 1;
        function switchTab(i) {
            currentTab = i;
            for (let n = 1; n <= 4; n++) {
                const sec = $('tab-' + n);
                if (sec) { sec.classList.add('hidden'); sec.classList.remove('fade-in'); }
                const b = $('nav-btn-' + n);
                if (b) { b.classList.toggle('text-blue-600', n === i); b.classList.toggle('text-slate-400', n !== i); b.classList.toggle('active', n === i); }
            }
            const s = $('tab-' + i);
            if (s) { s.classList.remove('hidden'); void s.offsetWidth; s.classList.add('fade-in'); }
            $('header-title').textContent = TITLES[i] || 'DompetKu';
            updateCenterIcon(i);
            if (i === 4) { if ($('more-menu')) $('more-menu').classList.remove('hidden'); if ($('summary-view')) { $('summary-view').classList.add('hidden'); $('summary-view').classList.remove('flex'); } }
            window.scrollTo({ top: 0, behavior: 'auto' });
        }
        function updateCenterIcon(tab) {
            const btn = $('center-main-btn'), icon = $('center-btn-icon');
            if (!btn || !icon) return;
            const next = tab === 3 ? 'fa-chart-pie' : 'fa-wallet';
            if (!icon.classList.contains(next)) {
                btn.classList.remove('center-btn-anim'); void btn.offsetWidth; btn.classList.add('center-btn-anim');
                icon.className = 'fa-solid ' + next + ' text-xl';
            }
        }
        function handleCenterAction() {
            if (currentTab === 3) { if (window.BudgetPage) window.BudgetPage.addPeriod(); return; }
            openPicker('source');
        }
        function openSummaryView() {
            $('more-menu').classList.add('hidden'); $('summary-view').classList.remove('hidden'); $('summary-view').classList.add('flex');
            $('header-title').textContent = 'Ringkasan'; window.scrollTo({ top: 0, behavior: 'auto' });
        }
        function closeSummaryView() {
            $('summary-view').classList.add('hidden'); $('summary-view').classList.remove('flex'); $('more-menu').classList.remove('hidden');
            $('header-title').textContent = 'Lainnya'; window.scrollTo({ top: 0, behavior: 'auto' });
        }
        function showToast(msg) {
            const t = $('toast');
            $('toast-text').textContent = msg;
            t.classList.remove('hidden', 'toast-in'); void t.offsetWidth; t.classList.add('toast-in');
            clearTimeout(showToast._t);
            showToast._t = setTimeout(() => t.classList.add('hidden'), 2800);
        }
        function lockScroll(l) { document.body.style.overflow = l ? 'hidden' : ''; }
        function showPanel(id, anim) {
            const p = $(id);
            p.classList.remove('hidden', 'slide-up', 'slide-right'); p.classList.add('flex'); void p.offsetWidth; p.classList.add(anim);
        }
        function hidePanel(id) { const p = $(id); p.classList.add('hidden'); p.classList.remove('flex', 'slide-up', 'slide-right'); }

        // ====== AKSI CEPAT ======
        function quickAction(mode) {
            // Top Up & Terima bisa ke saldo yang masih 0; Transfer & Bayar butuh saldo.
            openPicker('source', { mode, all: mode === 'topup' || mode === 'income' });
        }

        // ====== PANEL TRANSAKSI ======
        let panel = { key: null, mode: null, to: null, from: null, cat: null, action: 'confirm' };

        function openAccount(key, mode) {
            const acc = ACCOUNTS[key];
            panel = { key, mode: acc.modes.includes(mode) ? mode : acc.modes[0], to: null, from: null, cat: null, action: 'confirm' };
            $('acc-nominal').value = ''; $('acc-desc').value = '';
            $('mode-switch').innerHTML = acc.modes.map(m =>
                `<button type="button" id="mode-btn-${m}" onclick="setMode('${m}')" class="shrink-0 px-4 py-2.5 text-xs font-bold rounded-full transition flex items-center space-x-1.5"><i class="fa-solid ${MODE_ICONS[m]}"></i><span>${modeLabel(key, m)}</span></button>`).join('');
            showPanel('account-panel', 'slide-up');
            lockScroll(true);
            renderPanel();
            // Jangan fokus otomatis: keyboard hanya muncul setelah pengguna mengetuk input.
        }
        function setMode(m) { panel.mode = m; panel.cat = null; renderPanel(); }

        function renderPanel() {
            const k = panel.key, acc = ACCOUNTS[k], mode = panel.mode;
            acc.modes.forEach(m => {
                const b = $('mode-btn-' + m);
                if (b) b.className = `shrink-0 px-4 py-2.5 text-xs font-bold rounded-full transition flex items-center space-x-1.5 ${m === mode ? 'bg-blue-600 text-white shadow' : 'bg-white text-slate-500 shadow-sm'}`;
            });
            $('ap-title').textContent = modeTitle(k, mode);
            $('ap-sub').textContent = acc.name;
            $('lbl-nominal').textContent = (k === 'tabungan' && mode === 'transfer') ? 'Nominal penarikan' : (k === 'tabungan' && mode === 'topup') ? 'Nominal menabung' : NOMINAL_LABELS[mode];
            $('lbl-desc').textContent = mode === 'pay' ? 'Keterangan (opsional)' : 'Catatan (opsional)';
            $('acc-desc').placeholder = mode === 'pay' ? 'Contoh: Bensin, Parkir, Makan Siang' : mode === 'income' ? 'Contoh: Gaji Oktober' : 'Contoh: Isi saldo, Bayar utang';
            $('acc-note').textContent = mode === 'pay' ? 'Mengurangi saldo dan dihitung sebagai pengeluaran.'
                : mode === 'income' ? 'Menambah saldo dan dihitung sebagai pemasukan.' : 'Total seluruh saldo tidak berubah.';
            $('desc-wrap').classList.toggle('hidden', mode === 'withdraw' || mode === 'deposit');
            renderCats();
            renderRoute();
            onNominalInput();
        }

        function catList() { return panel.mode === 'pay' ? PAY_CATS : panel.mode === 'income' ? IN_CATS : null; }
        function renderCats() {
            const list = catList();
            $('cat-wrap').classList.toggle('hidden', !list);
            if (!list) return;
            $('cat-chips').innerHTML = list.map((c, i) =>
                `<button type="button" onclick="setCat(${i})" class="px-3 py-1.5 rounded-full text-[11px] font-bold shadow-sm transition active:scale-95 ${panel.cat === c ? 'bg-blue-600 text-white' : 'bg-white text-slate-600'}">${esc(c)}</button>`).join('');
        }
        function setCat(i) {
            const c = catList()[i];
            panel.cat = panel.cat === c ? null : c;
            renderCats();
        }

        function routeRow(label, k, editable, pickType, placeholder) {
            if (!k) {
                return `
                <button onclick="openPicker('${pickType}')" class="w-full flex items-center py-3.5 text-left active:opacity-60 transition">
                    <div class="w-10 h-10 shrink-0 rounded-xl border-2 border-dashed border-slate-300 text-slate-400 flex items-center justify-center text-sm"><i class="fa-solid fa-plus"></i></div>
                    <div class="flex-1 ml-3"><p class="text-[11px] text-slate-400">${label}</p><p class="text-sm font-bold text-blue-600">${placeholder}</p></div>
                    <i class="fa-solid fa-chevron-right text-slate-300 text-xs"></i>
                </button>`;
            }
            const tag = editable ? `button onclick="openPicker('${pickType}')"` : 'div';
            const end = editable ? 'button' : 'div';
            return `
            <${tag} class="w-full flex items-center py-3.5 text-left ${editable ? 'active:opacity-60' : ''} transition">
                ${tile(k)}
                <div class="flex-1 ml-3 min-w-0"><p class="text-[11px] text-slate-400">${label}</p><p class="text-sm font-bold text-slate-900 truncate">${accName(k)}</p></div>
                <div class="text-right"><p class="text-[11px] text-slate-400">Saldo</p><p class="text-sm font-bold text-slate-900">${formatRupiah(bal(k))}</p></div>
                ${editable ? '<i class="fa-solid fa-chevron-right text-slate-300 text-xs ml-2"></i>' : ''}
            </${end}>`;
        }
        function arrowDivider() {
            return `<div class="relative border-t border-slate-100"><div class="absolute left-1/2 -top-3 -translate-x-1/2 w-6 h-6 rounded-full bg-white border border-slate-200 text-slate-400 flex items-center justify-center text-[9px]"><i class="fa-solid fa-arrow-down"></i></div></div>`;
        }
        function renderRoute() {
            const k = panel.key, m = panel.mode;
            let html;
            if (m === 'pay') html = routeRow('Sumber dana', k, false);
            else if (m === 'income') html = routeRow('Masuk ke', k, false);
            else if (m === 'transfer') html = routeRow('Dari', k, false) + arrowDivider() + routeRow('Ke', panel.to, true, 'target', 'Pilih saldo tujuan');
            else if (m === 'withdraw') html = routeRow('Dari', k, false) + arrowDivider() + routeRow('Ke', 'cash', false);
            else if (m === 'deposit') html = routeRow('Dari', 'cash', false) + arrowDivider() + routeRow('Ke', k, false);
            else html = routeRow('Dari', panel.from, true, 'from', 'Pilih sumber dana') + arrowDivider() + routeRow('Ke', k, false);
            $('route-card').innerHTML = html;
        }

        // akun yang saldonya dipotong pada mode berjalan
        function payerKey() {
            const m = panel.mode;
            if (m === 'income') return null;
            if (m === 'topup') return panel.from;
            if (m === 'deposit') return 'cash';
            return panel.key;
        }
        function getAmount() { const v = parseFloat($('acc-nominal').value); return isNaN(v) ? 0 : v; }

        function onNominalInput() {
            const amt = getAmount(), p = payerKey();
            const hint = $('nominal-hint');
            if (p && amt > bal(p)) { hint.textContent = 'Melebihi saldo ' + accName(p); hint.className = 'text-xs mt-1 min-h-[16px] text-rose-600 font-semibold'; }
            else { hint.textContent = amt > 0 ? formatRupiah(amt) : ''; hint.className = 'text-xs mt-1 min-h-[16px] text-slate-400 font-semibold'; }
            $('btn-all').classList.toggle('hidden', !p);
            updateCta();
        }
        function addQuick(n) { $('acc-nominal').value = getAmount() + n; onNominalInput(); }
        function setAll() { const p = payerKey(); if (!p) return; $('acc-nominal').value = bal(p); onNominalInput(); }

        function updateCta() {
            const btn = $('cta'), amt = getAmount(), p = payerKey(), m = panel.mode, k = panel.key;
            const tab = k === 'tabungan';
            let label, enabled = true, icon = 'fa-check', color = 'bg-blue-600 shadow-blue-600/30';
            panel.action = 'confirm';
            if (amt <= 0) { label = 'Masukkan nominal'; enabled = false; }
            else if (p && amt > bal(p)) { label = 'Saldo tidak cukup'; enabled = false; }
            else if (m === 'topup' && !panel.from) { label = 'Pilih Sumber Dana'; panel.action = 'pickFrom'; icon = 'fa-arrow-right'; }
            else if (m === 'transfer' && !panel.to) { label = 'Pilih Saldo Tujuan'; panel.action = 'pickTo'; icon = 'fa-arrow-right'; }
            else if (m === 'pay') { label = 'Bayar ' + formatRupiah(amt); color = 'bg-rose-600 shadow-rose-600/30'; }
            else if (m === 'income') { label = 'Terima ' + formatRupiah(amt); color = 'bg-emerald-600 shadow-emerald-600/30'; icon = 'fa-arrow-down'; }
            else if (m === 'withdraw') { label = 'Konfirmasi Tarik ' + formatRupiah(amt); color = 'bg-amber-600 shadow-amber-600/30'; icon = 'fa-money-bill-1-wave'; }
            else if (m === 'deposit') { label = 'Konfirmasi Setor ' + formatRupiah(amt); color = 'bg-teal-600 shadow-teal-600/30'; icon = 'fa-download'; }
            else if (m === 'topup') { label = (tab ? 'Konfirmasi Menabung ' : 'Konfirmasi Top Up ') + formatRupiah(amt); icon = 'fa-circle-plus'; }
            else { label = (tab ? 'Konfirmasi Penarikan ' : 'Konfirmasi Transfer ') + formatRupiah(amt); icon = 'fa-right-left'; }
            btn.disabled = !enabled;
            btn.className = `w-full py-4 rounded-2xl text-white font-bold text-sm shadow-lg active:scale-[.98] transition flex items-center justify-center space-x-2 ${enabled ? color : 'bg-slate-300 shadow-none'}`;
            btn.innerHTML = panel.action !== 'confirm' ? `<span>${label}</span><i class="fa-solid ${icon}"></i>` : `<i class="fa-solid ${icon}"></i><span>${label}</span>`;
        }

        function ctaClick() {
            const amt = getAmount(), p = payerKey();
            if (amt <= 0 || (p && amt > bal(p))) return;
            if (panel.action === 'pickFrom') return openPicker('from');
            if (panel.action === 'pickTo') return openPicker('target');
            const note = $('acc-desc').value.trim(), cat = panel.cat, k = panel.key;
            switch (panel.mode) {
                case 'pay': return doPay(k, amt, note || cat || 'Pengeluaran', cat);
                case 'income': return doIncome(k, amt, note || cat || 'Pemasukan', cat);
                case 'transfer': return doMove(k, panel.to, amt, note, 'transfer');
                case 'withdraw': return doMove(k, 'cash', amt, '', 'withdraw');
                case 'deposit': return doMove('cash', k, amt, '', 'deposit');
                case 'topup': return doMove(panel.from, k, amt, note, 'topup');
            }
        }
        function closeAccount() { hidePanel('account-panel'); lockScroll(false); }

        // ====== PICKER (sumber / tujuan / sumber top up) ======
        let pickerType = 'source';
        let pickerOpts = {};
        const PICK_SUBS = { pay: 'Bayar menggunakan saldo mana?', transfer: 'Transfer dari saldo mana?', topup: 'Saldo mana yang diisi?', income: 'Dana diterima di mana?' };
        const PICK_TITLES = { pay: 'Bayar dengan', transfer: 'Transfer dari', topup: 'Top Up ke', income: 'Terima di' };

        function accRow(k, selected) {
            return `
            <button data-name="${esc(ACCOUNTS[k].name.toLowerCase())}" onclick="pickAccount('${k}')" class="w-full flex items-center py-3.5 text-left active:opacity-60 transition">
                ${tile(k)}
                <div class="flex-1 ml-3"><p class="text-sm font-bold text-slate-900">${ACCOUNTS[k].name}</p><p class="text-[11px] text-slate-400">Saldo ${formatRupiah(bal(k))}</p></div>
                ${selected ? '<i class="fa-solid fa-circle-check text-blue-600"></i>' : '<i class="fa-solid fa-chevron-right text-slate-300 text-[10px]"></i>'}
            </button>`;
        }
        function openPicker(type, opts) {
            pickerType = type; pickerOpts = opts || {};
            const o = pickerOpts;
            let keys = Object.keys(ACCOUNTS), title, sub;
            if (type === 'source') {
                if (o.group) keys = keys.filter(k => ACCOUNTS[k].group === o.group);
                if (o.mode) keys = keys.filter(k => ACCOUNTS[k].modes.includes(o.mode));
                if (!o.all) keys = keys.filter(k => bal(k) > 0);
                title = o.title || (o.mode ? PICK_TITLES[o.mode] : 'Pilih Sumber Dana');
                sub = o.mode ? PICK_SUBS[o.mode] : 'Saldo mana yang akan digunakan?';
            } else if (type === 'target') {
                keys = keys.filter(k => k !== panel.key);
                title = 'Pilih Saldo Tujuan';
                const amt = getAmount();
                sub = amt > 0 ? `${formatRupiah(amt)} dari ${accName(panel.key)}` : `Dari ${accName(panel.key)}`;
            } else {
                keys = keys.filter(k => k !== panel.key && bal(k) > 0);
                title = 'Pilih Sumber Dana';
                const amt = getAmount();
                sub = amt > 0 ? `${formatRupiah(amt)} ke ${accName(panel.key)}` : `Ke ${accName(panel.key)}`;
            }
            $('picker-title').textContent = title;
            $('picker-sub').textContent = sub;
            let html = '';
            GROUPS.forEach(g => {
                const ks = keys.filter(k => ACCOUNTS[k].group === g.id);
                if (!ks.length) return;
                html += `<div data-gw><p class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-1">${g.label}</p><div class="bg-white rounded-3xl px-4 shadow-sm shadow-slate-200/70 divide-y divide-slate-100">${ks.map(k => accRow(k, type === 'target' && panel.to === k || type === 'from' && panel.from === k)).join('')}</div></div>`;
            });
            if (!html) {
                html = `
                <div class="bg-white rounded-3xl p-8 text-center shadow-sm shadow-slate-200/70">
                    <div class="w-14 h-14 mx-auto rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center text-xl mb-3"><i class="fa-solid fa-vault"></i></div>
                    <p class="text-sm font-bold text-slate-800">Belum ada saldo</p>
                    <p class="text-xs text-slate-400 mt-1 mb-4">Isi saldo awal dulu lewat ikon berangkas.</p>
                    <button onclick="closePicker(); openVault()" class="px-5 py-2.5 rounded-full bg-blue-600 text-white text-xs font-bold active:scale-95 transition">Atur Saldo Awal</button>
                </div>`;
            }
            $('picker-list').innerHTML = html;
            $('picker-search').value = '';
            $('picker-search-wrap').classList.toggle('hidden', keys.length <= 6);
            showPanel('picker-panel', 'slide-right');
        }
        function closePicker() { hidePanel('picker-panel'); }
        function pickAccount(k) {
            if (pickerType === 'source') {
                const mode = pickerOpts.mode;
                closePicker();
                openAccount(k, mode);
            } else if (pickerType === 'target') {
                panel.to = k; closePicker(); renderRoute(); updateCta();
            } else {
                panel.from = k; closePicker(); renderRoute(); onNominalInput();
            }
        }

        // ====== EKSEKUSI ======
        function newId() { return 'tx' + Date.now() + Math.floor(Math.random() * 1000); }
        function finish(msg, id) {
            lastTxId = id;
            saveData();
            hidePanel('picker-panel'); closeAccount();
            updateUI();
            switchTab(2);
            showToast(msg);
            setTimeout(() => { lastTxId = null; }, 2600);
        }
        function doPay(key, amt, title, cat) {
            if (bal(key) < amt) return;
            appState.balances[key] -= amt;
            const id = newId();
            appState.transactions.push({ id, kind: 'pay', title, cat: cat || null, ts: Date.now(), account: key, amount: amt });
            finish('Pembayaran ' + formatRupiah(amt) + ' tersimpan', id);
        }
        function doIncome(key, amt, title, cat) {
            appState.balances[key] = bal(key) + amt;
            const id = newId();
            appState.transactions.push({ id, kind: 'in', title, cat: cat || null, ts: Date.now(), account: key, amount: amt });
            finish('Dana ' + formatRupiah(amt) + ' diterima di ' + accName(key), id);
        }
        function doMove(from, to, amt, note, kind) {
            if (!from || !to || bal(from) < amt) return;
            appState.balances[from] -= amt;
            appState.balances[to] = bal(to) + amt;
            const id = newId();
            let title, msg;
            if (kind === 'withdraw') { title = 'Tarik Tunai ' + accName(from); msg = 'Tarik tunai ' + formatRupiah(amt) + ' berhasil'; }
            else if (kind === 'deposit') { title = 'Setor Tunai ke ' + accName(to); msg = 'Setor tunai ' + formatRupiah(amt) + ' berhasil'; }
            else if (kind === 'topup') {
                title = to === 'tabungan' ? 'Menabung dari ' + accName(from) : 'Top Up ' + accName(to);
                msg = (to === 'tabungan' ? 'Menabung ' : 'Top up ') + formatRupiah(amt) + ' berhasil';
            } else {
                title = from === 'tabungan' ? 'Tarik Tabungan ke ' + accName(to) : 'Transfer ke ' + accName(to);
                msg = 'Transfer ' + formatRupiah(amt) + ' ke ' + accName(to) + ' berhasil';
            }
            if (note) title += ' • ' + note;
            appState.transactions.push({ id, kind, title, ts: Date.now(), from, to, amount: amt });
            finish(msg, id);
        }

        // ====== BERANGKAS: SALDO AWAL ======
        function openVault() {
            let html = '';
            GROUPS.forEach(g => {
                html += `<div data-gw><p class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-1">${g.label}</p><div class="bg-white rounded-3xl px-4 shadow-sm shadow-slate-200/70 divide-y divide-slate-100">`;
                keysOf(g.id).forEach(k => {
                    html += `
                    <label data-name="${esc(ACCOUNTS[k].name.toLowerCase())}" class="flex items-center py-3">
                        ${tile(k)}
                        <span class="flex-1 ml-3 text-sm font-bold text-slate-900 min-w-0 truncate">${ACCOUNTS[k].name}</span>
                        <span class="flex items-center bg-slate-50 rounded-xl px-3 py-2 w-36 shrink-0">
                            <span class="text-xs font-bold text-slate-400 mr-1.5">Rp</span>
                            <input type="number" inputmode="numeric" min="0" id="vault-in-${k}" placeholder="0" value="${bal(k) > 0 ? bal(k) : ''}" oninput="updateVaultTotal()"
                                class="w-full bg-transparent text-right text-sm font-bold text-slate-900 placeholder-slate-300 focus:outline-none">
                        </span>
                    </label>`;
                });
                html += '</div></div>';
            });
            $('vault-list').innerHTML = html;
            $('vault-search').value = '';
            updateVaultTotal();
            showPanel('vault-panel', 'slide-up');
            lockScroll(true);
        }
        function vaultValue(k) { const v = Math.round(parseFloat($('vault-in-' + k).value)); return isNaN(v) ? 0 : Math.max(0, v); }
        function updateVaultTotal() {
            $('vault-total').textContent = formatRupiah(Object.keys(ACCOUNTS).reduce((s, k) => s + vaultValue(k), 0));
        }
        function closeVault() { hidePanel('vault-panel'); lockScroll(false); }
        function saveVault() {
            let changed = 0;
            const now = Date.now();
            Object.keys(ACCOUNTS).forEach((k, i) => {
                const nv = vaultValue(k), old = bal(k), diff = nv - old;
                if (diff === 0) return;
                changed++;
                appState.balances[k] = nv;
                appState.transactions.push({
                    id: newId(), ts: now + i,
                    kind: diff > 0 ? 'in' : 'adjust',
                    title: diff > 0 ? (old === 0 ? 'Saldo awal' : 'Saldo masuk') : 'Koreksi saldo',
                    account: k, amount: Math.abs(diff)
                });
            });
            closeVault();
            if (!changed) { showToast('Tidak ada perubahan saldo'); return; }
            saveData();
            updateUI();
            showToast('Saldo kas diperbarui');
        }

        // ====== CADANGAN TERPADU: SALDO, TRANSAKSI, DAN RENCANA ANGGARAN ======
        function exportData() {
            try {
                const payload = window.DompetKuStorage.snapshot(appState);
                const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url; a.download = 'dompetku-backup-' + new Date().toISOString().slice(0, 10) + '.json';
                document.body.appendChild(a); a.click(); a.remove();
                setTimeout(() => URL.revokeObjectURL(url), 1000);
                showToast('Cadangan lengkap berhasil diekspor');
            } catch (err) { alert('Ekspor gagal: ' + (err.message || 'penyimpanan tidak tersedia')); }
        }
        function validateImportedFinance(input) {
            if (!input || !input.balances || typeof input.balances !== 'object' || !Array.isArray(input.transactions)) throw new Error('Struktur saldo atau riwayat tidak valid.');
            const balances = {};
            Object.keys(ACCOUNTS).forEach(k => {
                const amount = Number(input.balances[k] || 0);
                if (!Number.isFinite(amount) || amount < 0) throw new Error('Ada saldo tidak valid.');
                balances[k] = amount;
            });
            const transactions = input.transactions.map(t => {
                if (!t || typeof t !== 'object' || !Number.isFinite(Number(t.amount)) || Number(t.amount) < 0 || !Number.isFinite(Number(t.ts))) throw new Error('Ada transaksi yang tidak valid.');
                return { ...t, amount: Number(t.amount), ts: Number(t.ts) || Date.now() };
            });
            return { balances, transactions, hide: Boolean(input.hide) };
        }
        function validateImportedBudgets(input) {
            if (!Array.isArray(input)) throw new Error('Daftar rencana anggaran tidak valid.');
            return input.filter(b => b && !['m1','m2','m3'].includes(String(b.id))).map(b => {
                if (!String(b.month || '').trim() || !String(b.title || '').trim()) throw new Error('Setiap anggaran harus memiliki nama periode dan judul.');
                const totalMoney = Number(b.totalMoney);
                if (!Number.isFinite(totalMoney) || totalMoney < 0 || !Array.isArray(b.items)) throw new Error('Data periode anggaran tidak valid.');
                return { id: String(b.id || ('m_' + Date.now())), month: String(b.month), title: String(b.title), totalMoney, status: ['Aktif','Perencanaan','Selesai'].includes(b.status) ? b.status : 'Aktif', items: b.items.map(item => {
                    const amount = Number(item.amount);
                    if (!String(item.title || '').trim() || !Number.isFinite(amount) || amount < 0) throw new Error('Item anggaran tidak valid.');
                    return { id: String(item.id || ('i_' + Date.now())), title: String(item.title), amount, category: String(item.category || 'Lainnya'), date: String(item.date || '') };
                }) };
            });
        }
        function importData(event) {
            const file = event.target.files && event.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = function () {
                try {
                    const parsed = JSON.parse(reader.result);
                    let financeData, budgetData, includesBudgets = false;
                    if (parsed && parsed.finance && Object.prototype.hasOwnProperty.call(parsed, 'budgets')) {
                        financeData = parsed.finance; budgetData = parsed.budgets; includesBudgets = true;
                    } else if (parsed && parsed.data && parsed.data.balances && Array.isArray(parsed.data.transactions)) {
                        // Compatibility with old DompetKu JSON backup: finance-only; keep current plans.
                        financeData = parsed.data;
                    } else if (parsed && parsed.balances && Array.isArray(parsed.transactions)) {
                        financeData = parsed; // raw legacy state
                    } else { throw new Error('File bukan cadangan DompetKu yang dikenali.'); }
                    const finance = validateImportedFinance(financeData);
                    const budgets = includesBudgets ? validateImportedBudgets(budgetData) : window.DompetKuStorage.getBudgets();
                    const message = includesBudgets
                        ? 'Impor akan mengganti saldo, riwayat, dan semua rencana anggaran saat ini. Lanjutkan?'
                        : 'Cadangan lama hanya memuat saldo dan riwayat. Saldo serta riwayat akan diganti, sedangkan rencana anggaran dipertahankan. Lanjutkan?';
                    if (!confirm(message)) return;
                    window.DompetKuStorage.replaceAll(finance, budgets);
                    appState = finance;
                    saveData(); updateUI();
                    if (window.BudgetPage) window.BudgetPage.refresh();
                    switchTab(1); showToast('Data berhasil diimpor');
                } catch (err) { alert('Gagal mengimpor data. ' + (err.message || 'Periksa file JSON.')); }
                finally { event.target.value = ''; }
            };
            reader.onerror = function () { alert('File tidak dapat dibaca.'); event.target.value = ''; };
            reader.readAsText(file);
        }

        function resetAll() {
            if (!confirm('Reset semua data? Saldo, riwayat transaksi, dan seluruh rencana anggaran akan dihapus. Tindakan ini tidak bisa dibatalkan.')) return;
            appState = freshState();
            window.DompetKuStorage.reset(appState);
            updateUI();
            if (window.BudgetPage) window.BudgetPage.refresh();
            switchTab(1);
            showToast('Semua data berhasil direset');
        }

        document.addEventListener('keydown', e => {
            if (e.key !== 'Escape') return;
            if (!$('picker-panel').classList.contains('hidden')) closePicker();
            else if (!$('vault-panel').classList.contains('hidden')) closeVault();
            else if (!$('account-panel').classList.contains('hidden')) closeAccount();
        });

        async function bootDompetKu() {
            try {
                await window.DompetKuPages.loadAll();
                switchTab(1);
                updateUI();
                if (window.BudgetPage) window.BudgetPage.init();
            } catch (err) {
                console.error(err);
                showToast('Halaman gagal dimuat. Periksa koneksi atau file hosting.');
            }
        }
        document.addEventListener('DOMContentLoaded', bootDompetKu, { once: true });
