import { LitElement, html } from 'lit-element';
import { connect } from 'pwa-helpers';
import { getTypeExpenses } from './app-state/account-statement/expenses/expenses-selector.js';
import { getIncomes } from './app-state/account-statement/incomes/incomes-selector.js';
import { addIncome, updateIncome, removeIncome } from './app-state/account-statement/incomes/incomes-actions.js';
import { addExpense, updateExpense, removeExpense } from './app-state/account-statement/expenses/expenses-actions.js';
import { getAssets } from './app-state/balance-sheet/assets/assets-selector.js';
import { getLiabilities } from './app-state/balance-sheet/liabilities/liabilities-selector.js';
import { addAsset, updateAsset, removeAsset } from './app-state/balance-sheet/assets/assets-actions.js';
import { addLiability, updateLiability, removeLiability } from './app-state/balance-sheet/liabilities/liabilities-actions.js';
import { store, isFirstTimeUser } from './app-state/store.js';
import { updateWealth } from './app-state/wealth/wealth-actions.js';
import './ui/organisms/wealth-dashboard.js';
import './ui/organisms/account-statement-panel.js';
import './ui/organisms/balance-sheet-panel.js';
import './components/setup-wizard.js';

class AppShell extends connect(store)(LitElement) {
  static get properties() {
    return {
      pageTitle: { type: String },
      appState: { type: String },
      incomes: { type: String },
      generalExpenses: { type: String },
      liabilityExpenses: { type: String },
      assets: { type: String },
      liabilites: { type: String },
      activeBalanceSheet: { type: String },
      dateIndex: { type: Number },
      showWizard: { type: Boolean },
    };
  }

  stateChanged(state) {
    this.appState = state;
    this.incomes = getIncomes(state);
    this.generalExpenses = getTypeExpenses(state, 'general');
    this.liabilityExpenses = getTypeExpenses(state, 'liability-expense');
    this.housingExpenses = getTypeExpenses(state, 'housing');
    this.SIPExpenses = getTypeExpenses(state, 'sip-expense');
    this.assets = getAssets(state);
    this.liabilities = getLiabilities(state);
    console.log(this.appState.wealth);
    // localStorage.setItem('appState', JSON.stringify(this.appState));
  }

  firstUpdated() {
    // Check if first time user
    if (isFirstTimeUser()) {
      this.showWizard = true;
      setTimeout(() => this.openWizard(), 100);
    } else {
      const action = updateWealth(
        this.appState.accountStatement, 
        this.appState.balanceSheet,
        this.appState.investmentPreferences.allocations
      );
      store.dispatch(action);
    }
  }

  openWizard() {
    const wizard = this.shadowRoot.querySelector('setup-wizard');
    if (wizard) {
      wizard.open();
    }
  }

  handleWizardComplete() {
    this.showWizard = false;
    const action = updateWealth(
      this.appState.accountStatement, 
      this.appState.balanceSheet,
      this.appState.investmentPreferences.allocations
    );
    store.dispatch(action);
  }

  recalculateWealth() {
    const action = updateWealth(
      this.appState.accountStatement, 
      this.appState.balanceSheet,
      this.appState.investmentPreferences.allocations
    );
    store.dispatch(action);
    this.dateIndex = 0;
  }

  handleIncomeUpdate(income, event) {
    const newAmount = Math.max(0, parseFloat(event.target.value) || 0);
    store.dispatch(updateIncome({
      ...income,
      amount: newAmount,
    }));
    this.recalculateWealth();
  }

  handleExpenseUpdate(expense, event) {
    const newAmount = Math.max(0, parseFloat(event.target.value) || 0);
    store.dispatch(updateExpense({
      ...expense,
      amount: newAmount,
    }));
    this.recalculateWealth();
  }

  handleAssetUpdate(asset, field, event) {
    const newValue = Math.max(0, parseFloat(event.target.value) || 0);
    store.dispatch(updateAsset({
      ...asset,
      [field]: newValue,
    }));
    this.recalculateWealth();
  }

  handleLiabilityUpdate(liability, field, event) {
    let newValue;
    if (field === 'startDate') {
      newValue = event.target.value;
    } else {
      newValue = Math.max(0, parseFloat(event.target.value) || 0);
    }
    store.dispatch(updateLiability({
      ...liability,
      [field]: newValue,
    }));
    this.recalculateWealth();
  }

  getNextId(array) {
    if (!array || array.length === 0) return 1;
    return Math.max(...array.map((item) => item.id || 0)) + 1;
  }

  addNewIncome() {
    const income = {
      id: this.getNextId(this.appState.accountStatement.incomes),
      name: 'New Income',
      type: 'active-income',
      amount: 0,
      helperText: 'Enter details',
    };
    store.dispatch(addIncome(income));
    this.recalculateWealth();
  }

  removeIncomeHandler(id) {
    store.dispatch(removeIncome(id));
    this.recalculateWealth();
  }

  addNewExpense() {
    const expense = {
      id: this.getNextId(this.appState.accountStatement.expenses),
      name: 'New Expense',
      type: 'general',
      amount: 0,
      helperText: 'Enter details',
    };
    store.dispatch(addExpense(expense));
    this.recalculateWealth();
  }

  removeExpenseHandler(id) {
    store.dispatch(removeExpense(id));
    this.recalculateWealth();
  }

  addNewAsset() {
    const asset = {
      id: this.getNextId(this.appState.balanceSheet.assets),
      name: 'New Asset',
      amount: 0,
      rate: 7,
    };
    store.dispatch(addAsset(asset));
    this.recalculateWealth();
  }

  removeAssetHandler(id) {
    store.dispatch(removeAsset(id));
    this.recalculateWealth();
  }

  addNewLiability() {
    const liability = {
      id: this.getNextId(this.appState.balanceSheet.liabilities),
      name: 'New Liability',
      amount: 0,
      rate: 7,
      tenure: 120,
      startDate: new Date().toISOString().split('T')[0],
    };
    store.dispatch(addLiability(liability));
    this.recalculateWealth();
  }

  removeLiabilityHandler(id) {
    store.dispatch(removeLiability(id));
    this.recalculateWealth();
  }

  constructor() {
    super();
    this.pageTitle = 'Wealth Calculator';
    this.activeBalanceSheet = 'expenses';
    this.dateIndex = 0;
    this._input = {};
    this.showWizard = false;
  }

  getCurrentWealthSnapshot() {
    if (!this.appState.wealth || !this.appState.wealth.timeline || this.appState.wealth.timeline.length === 0) {
      return {
        date: 'Calculating...',
        activeIncome: 0,
        passiveIncome: 0,
        expenses: 0,
        liabilitiesExpenses: 0,
        savings: 0,
        totalActiveIncome: 0,
        totalPassiveIncome: 0,
        generalExpenses: 0,
        liabilityEMI: 0,
        netWorth: 0,
        accumulatedSavings: 0,
      };
    }
    return this.appState.wealth.timeline[this.dateIndex] || this.appState.wealth.timeline[0];
  }

  handleDateChange(e) {
    this.dateIndex = e.detail.dateIndex;
  }

  handleTabChange(e) {
    this.activeBalanceSheet = e.detail.activeTab;
  }

  handleIncomeUpdateEvent(e) {
    const { income, value } = e.detail;
    this.handleIncomeUpdate(income, { target: { value } });
  }

  handleExpenseUpdateEvent(e) {
    const { expense, value } = e.detail;
    this.handleExpenseUpdate(expense, { target: { value } });
  }

  handleAssetUpdateEvent(e) {
    const { asset, field, value } = e.detail;
    this.handleAssetUpdate(asset, field, { target: { value } });
  }

  handleLiabilityUpdateEvent(e) {
    const { liability, field, value } = e.detail;
    this.handleLiabilityUpdate(liability, field, { target: { value } });
  }

  render() {
    const snapshot = this.getCurrentWealthSnapshot();

    return html`
    <link rel="stylesheet" href="https://unpkg.com/chota@latest">
    <div class="container">
      <h1>${this.pageTitle}</h1>
      <hr />
      <div class="row">
        <div class="col-7">
          <wealth-dashboard
            .income=${snapshot.activeIncome}
            .expense=${snapshot.expenses}
            .liabilities=${snapshot.liabilitiesExpenses}
          ></wealth-dashboard>
        </div>
        <div class="col-5">
          <account-statement-panel
            .activeTab=${this.activeBalanceSheet}
            .incomes=${this.incomes}
            .expenses=${this.generalExpenses}
            .assets=${this.assets}
            .liabilities=${this.liabilities}
            .totalPassiveIncome=${snapshot.totalPassiveIncome || 0}
            .totalLiabilityEMI=${snapshot.liabilityEMI || 0}
            .currentDate=${snapshot.date}
            .dateIndex=${this.dateIndex}
            .maxDateIndex=${(this.appState.wealth.timeline && this.appState.wealth.timeline.length - 1) || 0}
            .wealthSnapshot=${snapshot}
            @date-change=${this.handleDateChange}
            @tab-change=${this.handleTabChange}
            @income-update=${this.handleIncomeUpdateEvent}
            @income-remove=${(e) => this.removeIncomeHandler(e.detail.id)}
            @add-income=${this.addNewIncome}
            @expense-update=${this.handleExpenseUpdateEvent}
            @expense-remove=${(e) => this.removeExpenseHandler(e.detail.id)}
            @add-expense=${this.addNewExpense}
          ></account-statement-panel>
        </div>
        <balance-sheet-panel
          .assets=${this.assets}
          .liabilities=${this.liabilities}
          .dateIndex=${this.dateIndex}
          .wealthSnapshot=${snapshot}
          @asset-update=${this.handleAssetUpdateEvent}
          @asset-remove=${(e) => this.removeAssetHandler(e.detail.id)}
          @add-asset=${this.addNewAsset}
          @liability-update=${this.handleLiabilityUpdateEvent}
          @liability-remove=${(e) => this.removeLiabilityHandler(e.detail.id)}
          @add-liability=${this.addNewLiability}
        ></balance-sheet-panel>
      </div>
      <setup-wizard @wizard-complete=${this.handleWizardComplete}></setup-wizard>
    </div>
    `;
  }
}

customElements.define('app-shell', AppShell);
