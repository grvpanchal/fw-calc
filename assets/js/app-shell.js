import { LitElement, html } from 'lit-element';
import { connect } from 'pwa-helpers';
import { getTypeExpenses } from './app-state/account-statement/expenses/expenses-selector.js';
import { getIncomes } from './app-state/account-statement/incomes/incomes-selector.js';
import { getAssets } from './app-state/balance-sheet/assets/assets-selector.js';
import { getLiabilities } from './app-state/balance-sheet/liabilities/liabilities-selector.js';
import { store } from './app-state/store.js';
import { updateWealth } from './app-state/wealth/wealth-actions.js';
import './ui/atoms/ch-button.js';
import './ui/molecules/app-input-entry.js';
import './ui/molecules/app-tabs.js';
import './ui/organisms/fw-logo.js';

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
    const action = updateWealth(this.appState.accountStatement);
    store.dispatch(action);
  }

  constructor() {
    super();
    this.pageTitle = 'Wealth Calculator';
    this.activeBalanceSheet = 'expenses';
    this.dateIndex = 0;
    this._input = {};
  }

  render() {
    const tabs = [
      {
        id: 'income',
        label: 'Income',
        isActive: this.activeBalanceSheet === 'income' ? 'active' : '',
      }, {
        id: 'expenses',
        label: 'Expenses',
        isActive: this.activeBalanceSheet === 'expenses' ? 'active' : '',
      },
    ];

    return html`
    <link rel="stylesheet" href="https://unpkg.com/chota@latest">
    <div class="container">
      <!-- text binding -->
      <h1>${this.pageTitle}</h1>
      <!-- <div>
        <ch-button @click="${this.clickHandler}">click</ch-button>
      </div> -->
      <hr />
      <div class="row">
        <div class="col-7">
          <fw-logo
            income="${this.appState.wealth[this.dateIndex].activeIncome}"
            expense="${this.appState.wealth[this.dateIndex].expenses}"
            liabilities="${this.appState.wealth[this.dateIndex].liabilitiesExpenses}"
            employee="1"
            investor="1"
            .highlights="${[]}"
          >
          </fw-logo>
          <pre>${JSON.stringify(this.appState.wealth, null, 2)}</pre>
        </div>
        <div class="col-5">
          <div style="min-height: 600px;">
            <div>Date: ${this.appState.wealth[this.dateIndex].date}</div>
            <div class="slidecontainer">
              <input 
                type="range" 
                min="0" 
                max="${String((this.appState.wealth.length - 1) || 0)}" 
                value=${this.dateIndex}
                class="slider"
                @input=${this.rangeHandler}
                id="myRange">
            </div>
            <app-tabs .tabs=${tabs} @tabSelect=${(e) => { this.activeBalanceSheet = e.detail.id; }} ></app-tabs>
            <br />
            ${this.activeBalanceSheet === 'income' ? html`
            <fieldset>
              <legend>Income Sources</legend>
              ${this.incomes && this.incomes.length && this.incomes.map((income) => (html`
              <p>
                <label for="${income.name}">${income.name}</label>
                <input id="jobIncome" type="text" value="${income.amount}">
                <small class="text-grey">${income.helperText}</small>
              </p>
              `))}
            </fieldset>
            ` : html``}
            ${this.activeBalanceSheet === 'expenses' ? html`
            <fieldset>
              <legend>general Expenses</legend>
              ${this.generalExpenses && this.generalExpenses.length && this.generalExpenses.map((generalExpense) => (html`
              <p>
                <label for="${generalExpense.name}">${generalExpense.name}</label>
                <input id="${generalExpense.name}" value="${generalExpense.amount}" type="text">
                <small class="text-grey">${generalExpense.helperText}</small>
              </p>
              `))}
            </fieldset>
            <br />
            <fieldset>
              <legend>Housing Liability</legend>
              ${this.housingExpenses && this.housingExpenses.length && this.housingExpenses.map((housingExpense) => (html`
              <p>
                <label for="${housingExpense.name}">${housingExpense.name}</label>
                <input id="${housingExpense.name}" value="${housingExpense.amount}" type="text">
                <small class="text-grey">${housingExpense.helperText}</small>
              </p>
              `))}
            </fieldset>
            <br />
            <fieldset>
              <legend>liability Expenses</legend>
              ${this.liabilityExpenses && this.liabilityExpenses.length && this.liabilityExpenses.map((liabilityExpense) => (html`
              <p>
                <label for="${liabilityExpense.name}">${liabilityExpense.name}</label>
                <input id="${liabilityExpense.name}" value="${liabilityExpense.amount}" type="text">
                <small class="text-grey">${liabilityExpense.helperText}</small>
              </p>
              `))}
            </fieldset>
            ` : html``}
            
          </div>
          
        </div>
        <div class="row">
          <div class="col-6">
            <fieldset>
              <legend>Assets</legend>
              ${this.assets && this.assets.length && this.assets.map((asset) => (html`
              <p>
                <h5>${asset.name}</h5>
                <hr />
                <div class="row">
                  <div class="col-9">
                    <label for="${asset.name}Amount">Amount</label>
                    <input id="${asset.name}Amount" value="${asset.amount}" type="text">
                  </div>
                  <div class="col-3">
                    <label for="${asset.name}Interest">Interest Rate</label>
                    <input id="${asset.name}Interest" value="${asset.rate}" type="text">
                  </div>
                </div>
              </p>
              `))}
            </fieldset>
          </div>
          <div class="col-6">
            <fieldset>
              <legend>Liabilities</legend>
              <p>
                ${this.liabilities && this.liabilities.length && this.liabilities.map((liability) => (html`
                <p>
                  <h5>${liability.name}</h5>
                  <hr />
                  <div class="row">
                    <div class="col-4">
                      <label for="${liability.name}Amount">Amount</label>
                      <input id="${liability.name}Amount" value="${liability.amount}" type="text">
                    </div>
                    <div class="col-2">
                      <label for="${liability.name}Interest">Rate</label>
                      <input id="${liability.name}Interest" value="${liability.rate}" type="text">
                    </div>
                    <div class="col-2">
                      <app-input-entry label="Tenure" .value="${liability.tenure}"></app-input-entry>
                    </div>
                    <div class="col-4">
                      <label for="${liability.name}Start">Starts from</label>
                      <input id="${liability.name}Start" value="${liability.startDate}" type="date">
                    </div>
                  </div>
                </p>
                `))}
            </fieldset>
          </div>
        </div>
      </div>
    `;
  }

  rangeHandler(e) {
    this.dateIndex = Number(e.target.value);
  }
}

customElements.define('app-shell', AppShell);
