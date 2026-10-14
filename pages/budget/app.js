(function () {
  'use strict';
  const $ = id => document.getElementById(id);

    // Modul Anggaran: data rencana tersimpan pada properti budgets di penyimpanan terpadu.
    let budgetState = [];
    function loadState() { budgetState = window.DompetKuStorage.getBudgets(); }
    function saveState() { window.DompetKuStorage.setBudgets(budgetState); }

    let currentMonthId = null;
    let currentItemId = null;

    function formatRupiah(num) {
      return 'Rp ' + Math.round(num).toLocaleString('id-ID');
    }

    function showToast(text, isError = false) {
      if (typeof window.showToast === 'function') window.showToast((isError ? 'Periksa: ' : '') + text);
    }

    // ====== RENDER DAFTAR BULANAN ======
    function renderMonthlyList() {
      const container = document.getElementById('monthly-budgets-list');
      const badge = document.getElementById('budget-count-badge');
      badge.textContent = budgetState.length + ' Periode';

      if (!budgetState.length) {
        container.innerHTML = `
          <div class="bg-white rounded-3xl p-8 text-center shadow-sm">
            <div class="w-14 h-14 bg-slate-100 text-slate-400 rounded-2xl flex items-center justify-center mx-auto mb-3 text-xl"><i class="fa-solid fa-chart-pie"></i></div>
            <p class="text-sm font-bold text-slate-800">Belum Ada Anggaran</p>
            <p class="text-xs text-slate-400 mt-1 mb-4">Buat anggaran bulanan baru melalui tombol di bawah.</p>
            <button onclick="BudgetPage.openMonthModal(null)" class="px-5 py-2.5 rounded-full bg-blue-600 text-white text-xs font-bold active:scale-95 transition">Tambah Anggaran</button>
          </div>
        `;
        return;
      }

      container.innerHTML = budgetState.map(m => {
        const totalAllocated = m.items.reduce((acc, curr) => acc + (curr.amount || 0), 0);
        const remaining = m.totalMoney - totalAllocated;
        const statusBadge = m.status === 'Aktif' 
          ? '<span class="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">Aktif</span>'
          : '<span class="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold">' + m.status + '</span>';

        return `
          <div onclick="BudgetPage.openDetail('${m.id}')" class="bg-white rounded-3xl p-4 shadow-sm shadow-slate-200/70 active:scale-[0.98] transition cursor-pointer">
              <div class="flex items-center justify-between mb-2">
                  <div class="flex items-center space-x-2.5">
                      <div class="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-sm"><i class="fa-solid fa-calendar-days"></i></div>
                      <div>
                          <p class="text-[10px] font-semibold text-slate-400">Bulan</p>
                          <h3 class="text-sm font-extrabold text-slate-900">${m.month}</h3>
                      </div>
                  </div>
                  ${statusBadge}
              </div>
              <p class="text-xs font-bold text-slate-800 mb-3 px-0.5">${m.title}</p>
              <div class="grid grid-cols-2 gap-2.5 pt-3 border-t border-slate-100 text-xs">
                  <div>
                      <span class="text-slate-400 text-[10px]">Jumlah Uang</span>
                      <p class="font-bold text-slate-900 mt-0.5">${formatRupiah(m.totalMoney)}</p>
                  </div>
                  <div>
                      <span class="text-slate-400 text-[10px]">Total Anggaran</span>
                      <p class="font-bold text-blue-600 mt-0.5">${formatRupiah(totalAllocated)}</p>
                  </div>
                  <div>
                      <span class="text-slate-400 text-[10px]">Sisa Uang</span>
                      <p class="font-bold ${remaining >= 0 ? 'text-emerald-600' : 'text-rose-600'} mt-0.5">${formatRupiah(remaining)}</p>
                  </div>
                  <div>
                      <span class="text-slate-400 text-[10px]">Jumlah Item</span>
                      <p class="font-bold text-slate-700 mt-0.5">${m.items.length} Item</p>
                  </div>
              </div>
          </div>
        `;
      }).join('');
    }

    // ====== RENDER RINCIAN ANGGARAN ======
    function openDetail(monthId) {
      currentMonthId = monthId;
      const month = budgetState.find(b => b.id === monthId);
      if (!month) return;

      document.getElementById('detail-month-title').textContent = month.title;
      document.getElementById('detail-month-subtitle').textContent = 'Anggaran Bulan ' + month.month;
      
      // NOMINAL DI KARTU UTAMA DIATUR SEMUANYA WARNA PUTIH
      document.getElementById('detail-total-money').textContent = formatRupiah(month.totalMoney);
      document.getElementById('detail-badge-status').textContent = month.status;

      const totalAllocated = month.items.reduce((acc, curr) => acc + (curr.amount || 0), 0);
      const remaining = month.totalMoney - totalAllocated;

      document.getElementById('detail-total-allocated').textContent = formatRupiah(totalAllocated);
      
      const remEl = document.getElementById('detail-total-remaining');
      remEl.textContent = formatRupiah(remaining);
      remEl.className = 'font-extrabold mt-0.5 text-white';

      document.getElementById('detail-items-count').textContent = month.items.length + ' Item';

      const listContainer = document.getElementById('budget-items-list');

      if (!month.items.length) {
        listContainer.innerHTML = `
          <div class="p-8 text-center">
            <p class="text-sm font-bold text-slate-800">Belum Ada Item Anggaran</p>
            <p class="text-xs text-slate-400 mt-1">Gunakan tombol (+) melayang di bawah untuk menambah rincian baru.</p>
          </div>
        `;
      } else {
        listContainer.innerHTML = month.items.map(item => {
          const percentage = month.totalMoney > 0 ? ((item.amount / month.totalMoney) * 100).toFixed(1) : 0;
          return `
            <div onclick="BudgetPage.openItemModal('${item.id}')" class="p-4 active:bg-slate-50 transition cursor-pointer flex items-center justify-between">
                <div class="min-w-0 flex-1 pr-3">
                    <h4 class="text-sm font-bold text-slate-900 truncate">${item.title}</h4>
                    <div class="flex items-center space-x-2.5 mt-1">
                        <span class="px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold">${item.category}</span>
                        <span class="text-[10px] text-slate-400"><i class="fa-regular fa-calendar mr-1"></i>${item.date || '-'}</span>
                    </div>
                </div>
                <div class="text-right shrink-0">
                    <p class="text-sm font-extrabold text-blue-600">${formatRupiah(item.amount)}</p>
                    <p class="text-[11px] font-bold text-slate-500 mt-0.5">${percentage}% dari total</p>
                </div>
            </div>
          `;
        }).join('');
      }

      const panel = document.getElementById('detail-panel');
      panel.classList.remove('hidden');
      panel.classList.add('flex', 'slide-up');
      document.body.style.overflow = 'hidden';
    }

    function closeDetail() {
      const panel = document.getElementById('detail-panel');
      panel.classList.add('hidden');
      panel.classList.remove('flex', 'slide-up');
      document.body.style.overflow = '';
      renderMonthlyList();
    }

    // ====== MODAL MONTH CRUD ======
    function openMonthModal(monthId) {
      currentMonthId = monthId;
      const titleEl = document.getElementById('month-modal-title');
      const delBtn = document.getElementById('btn-delete-month');

      if (monthId) {
        titleEl.textContent = 'Edit Anggaran Bulanan';
        delBtn.classList.remove('hidden');
        delBtn.classList.add('flex');
        const m = budgetState.find(b => b.id === monthId);
        if (m) {
          document.getElementById('month-input-name').value = m.month;
          document.getElementById('month-input-title').value = m.title;
          document.getElementById('month-input-money').value = m.totalMoney;
          document.getElementById('month-input-status').value = m.status;
        }
      } else {
        titleEl.textContent = 'Tambah Anggaran Bulanan';
        delBtn.classList.add('hidden');
        delBtn.classList.remove('flex');
        document.getElementById('month-input-name').value = '';
        document.getElementById('month-input-title').value = '';
        document.getElementById('month-input-money').value = '';
        document.getElementById('month-input-status').value = 'Aktif';
      }

      const modal = document.getElementById('month-modal');
      modal.classList.remove('hidden');
      modal.classList.add('flex', 'slide-up');
    }

    function closeMonthModal() {
      const modal = document.getElementById('month-modal');
      modal.classList.add('hidden');
      modal.classList.remove('flex', 'slide-up');
    }

    function saveMonthData() {
      const monthName = document.getElementById('month-input-name').value.trim();
      const title = document.getElementById('month-input-title').value.trim();
      const money = parseFloat(document.getElementById('month-input-money').value) || 0;
      const status = document.getElementById('month-input-status').value;

      if (!monthName || !title) {
        showToast('Mohon isi nama bulan dan judul anggaran', true);
        return;
      }

      if (currentMonthId) {
        const index = budgetState.findIndex(b => b.id === currentMonthId);
        if (index !== -1) {
          budgetState[index].month = monthName;
          budgetState[index].title = title;
          budgetState[index].totalMoney = money;
          budgetState[index].status = status;
          showToast('Anggaran ' + monthName + ' berhasil diperbarui');
        }
      } else {
        const newMonth = {
          id: 'm_' + Date.now(),
          month: monthName,
          title: title,
          totalMoney: money,
          status: status,
          items: []
        };
        budgetState.push(newMonth);
        showToast('Anggaran baru ' + monthName + ' berhasil ditambahkan');
      }

      saveState();
      closeMonthModal();
      renderMonthlyList();
      if (currentMonthId && !document.getElementById('detail-panel').classList.contains('hidden')) {
        openDetail(currentMonthId);
      }
    }

    function deleteCurrentMonth() {
      if (!currentMonthId) return;
      if (confirm('Yakin ingin menghapus periode anggaran ini beserta seluruh isinya?')) {
        budgetState = budgetState.filter(b => b.id !== currentMonthId);
        saveState();
        closeMonthModal();
        closeDetail();
        renderMonthlyList();
        showToast('Periode anggaran berhasil dihapus');
      }
    }

    // ====== MODAL ITEM CRUD ======
    function openItemModal(itemId) {
      currentItemId = itemId;
      const titleEl = document.getElementById('item-modal-title');
      const delBtn = document.getElementById('btn-delete-item');

      if (itemId) {
        titleEl.textContent = 'Edit Item Anggaran';
        delBtn.classList.remove('hidden');
        delBtn.classList.add('flex');
        const m = budgetState.find(b => b.id === currentMonthId);
        if (m) {
          const item = m.items.find(i => i.id === itemId);
          if (item) {
            document.getElementById('item-input-title').value = item.title;
            document.getElementById('item-input-amount').value = item.amount;
            document.getElementById('item-input-category').value = item.category;
            document.getElementById('item-input-date').value = item.date || new Date().toISOString().split('T')[0];
          }
        }
      } else {
        titleEl.textContent = 'Tambah Item Anggaran Baru';
        delBtn.classList.add('hidden');
        delBtn.classList.remove('flex');
        document.getElementById('item-input-title').value = '';
        document.getElementById('item-input-amount').value = '';
        document.getElementById('item-input-category').value = 'Kebutuhan Rutin';
        document.getElementById('item-input-date').value = new Date().toISOString().split('T')[0];
      }

      const modal = document.getElementById('item-modal');
      modal.classList.remove('hidden');
      modal.classList.add('flex', 'slide-up');
    }

    function closeItemModal() {
      const modal = document.getElementById('item-modal');
      modal.classList.add('hidden');
      modal.classList.remove('flex', 'slide-up');
    }

    function saveItemData() {
      const title = document.getElementById('item-input-title').value.trim();
      const amount = parseFloat(document.getElementById('item-input-amount').value) || 0;
      const category = document.getElementById('item-input-category').value;
      const date = document.getElementById('item-input-date').value;

      if (!title || amount <= 0) {
        showToast('Mohon isi judul item dan nominal angka yang valid', true);
        return;
      }

      const mIndex = budgetState.findIndex(b => b.id === currentMonthId);
      if (mIndex === -1) return;

      if (currentItemId) {
        const iIndex = budgetState[mIndex].items.findIndex(i => i.id === currentItemId);
        if (iIndex !== -1) {
          budgetState[mIndex].items[iIndex] = {
            id: currentItemId,
            title,
            amount,
            category,
            date
          };
          showToast('Item ' + title + ' berhasil diperbarui');
        }
      } else {
        const newItem = {
          id: 'i_' + Date.now(),
          title,
          amount,
          category,
          date
        };
        budgetState[mIndex].items.push(newItem);
        showToast('Item ' + title + ' berhasil ditambahkan');
      }

      saveState();
      closeItemModal();
      openDetail(currentMonthId);
    }

    function deleteCurrentItem() {
      if (!currentMonthId || !currentItemId) return;
      if (confirm('Yakin ingin menghapus item rincian anggaran ini?')) {
        const mIndex = budgetState.findIndex(b => b.id === currentMonthId);
        if (mIndex !== -1) {
          budgetState[mIndex].items = budgetState[mIndex].items.filter(i => i.id !== currentItemId);
          saveState();
          closeItemModal();
          openDetail(currentMonthId);
          showToast('Item anggaran berhasil dihapus');
        }
      }
    }

    // ====== NAVIGASI BISA DIKLIK & DYNAMIC CENTER BUTTON ======
    function init() { loadState(); renderMonthlyList(); }
    function refresh() { loadState(); renderMonthlyList(); }
    function clear() { budgetState = []; saveState(); renderMonthlyList(); }
    function addPeriod() { openMonthModal(null); }
    function editCurrentPeriod() { if (currentMonthId) openMonthModal(currentMonthId); }
    window.BudgetPage = Object.freeze({ init, refresh, clear, addPeriod, editCurrentPeriod, renderMonthlyList, openDetail, closeDetail, openMonthModal, closeMonthModal, saveMonthData, deleteCurrentMonth, openItemModal, closeItemModal, saveItemData, deleteCurrentItem });
})();
