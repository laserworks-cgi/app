/* DompetKu unified storage. The ONLY persistent app key is dompetku_app_v1. */
(function () {
  'use strict';
  const KEY = 'dompetku_app_v1';
  const LEGACY_FINANCE_KEY = 'dompetku_v3';
  const LEGACY_BUDGET_KEY = 'dompetku_budget_data_v3';
  const EMPTY_FINANCE = { balances: {}, transactions: [], hide: false };
  const SAMPLE_BUDGET_IDS = new Set(['m1', 'm2', 'm3']);
  let state = { schemaVersion: 1, finance: null, budgets: [] };

  function parse(raw) { try { return raw ? JSON.parse(raw) : null; } catch (_) { return null; } }
  function isFinance(v) { return !!(v && v.balances && typeof v.balances === 'object' && Array.isArray(v.transactions)); }
  function cleanBudgets(value) {
    if (!Array.isArray(value)) return [];
    return value.filter(b => b && typeof b === 'object' && !SAMPLE_BUDGET_IDS.has(String(b.id)))
      .map(b => ({
        id: String(b.id || ('m_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7))),
        month: String(b.month || ''), title: String(b.title || ''),
        totalMoney: Math.max(0, Number(b.totalMoney) || 0),
        status: ['Aktif', 'Perencanaan', 'Selesai'].includes(b.status) ? b.status : 'Aktif',
        items: Array.isArray(b.items) ? b.items.filter(i => i && typeof i === 'object').map(i => ({
          id: String(i.id || ('i_' + Date.now())), title: String(i.title || ''),
          amount: Math.max(0, Number(i.amount) || 0), category: String(i.category || 'Lainnya'), date: String(i.date || '')
        })) : []
      }));
  }
  function normalize(v) {
    return {
      schemaVersion: 1,
      finance: isFinance(v && v.finance) ? v.finance : null,
      budgets: cleanBudgets(v && (v.budgets || (v.budget && v.budget.periods)))
    };
  }
  function persist() {
    localStorage.setItem(KEY, JSON.stringify(state));
  }
  function migrate() {
    const currentRaw = parse(localStorage.getItem(KEY));
    const oldFinance = parse(localStorage.getItem(LEGACY_FINANCE_KEY));
    const oldBudget = parse(localStorage.getItem(LEGACY_BUDGET_KEY));
    if (currentRaw && (currentRaw.schemaVersion || currentRaw.finance || currentRaw.budgets)) {
      state = normalize(currentRaw);
      // Recover legacy finance if an incomplete canonical envelope was left behind.
      if (!isFinance(state.finance) && isFinance(oldFinance)) state.finance = oldFinance;
      if (!state.budgets.length && Array.isArray(oldBudget)) state.budgets = cleanBudgets(oldBudget);
    } else {
      state = {
        schemaVersion: 1,
        finance: isFinance(oldFinance) ? oldFinance : null,
        budgets: cleanBudgets(oldBudget)
      };
    }
    // Commit the unified envelope before deleting legacy keys.
    try {
      persist();
      localStorage.removeItem(LEGACY_FINANCE_KEY);
      localStorage.removeItem(LEGACY_BUDGET_KEY);
    } catch (_) {}
    // Remove old keys left by an earlier partial migration after a valid canonical value exists.
    try {
      if (parse(localStorage.getItem(KEY))) {
        localStorage.removeItem(LEGACY_FINANCE_KEY);
        localStorage.removeItem(LEGACY_BUDGET_KEY);
      }
    } catch (_) {}
  }
  migrate();
  function ensureFinance(fallback) {
    if (!isFinance(state.finance)) state.finance = fallback || JSON.parse(JSON.stringify(EMPTY_FINANCE));
    return state.finance;
  }
  window.DompetKuStorage = Object.freeze({
    key: KEY,
    getFinance(fallback) { return ensureFinance(fallback); },
    setFinance(finance) { if (!isFinance(finance)) throw new Error('Format data saldo/transaksi tidak valid.'); state.finance = finance; persist(); },
    getBudgets() { return state.budgets.slice(); },
    setBudgets(budgets) { state.budgets = cleanBudgets(budgets); persist(); },
    snapshot(financeOverride) {
      if (financeOverride && isFinance(financeOverride)) state.finance = financeOverride;
      persist();
      return JSON.parse(JSON.stringify({ app: 'DompetKu', schemaVersion: 1, exportedAt: new Date().toISOString(), finance: state.finance, budgets: state.budgets }));
    },
    replaceAll(finance, budgets) {
      if (!isFinance(finance)) throw new Error('Data saldo dan transaksi tidak valid.');
      state = { schemaVersion: 1, finance, budgets: cleanBudgets(budgets) };
      persist();
    },
    reset(finance) {
      state = { schemaVersion: 1, finance, budgets: [] };
      persist();
    }
  });
})();
