import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from '../app-state/store.js';
import { addIncome, removeIncome } from '../app-state/account-statement/incomes/incomes-actions.js';
import { addExpense, removeExpense } from '../app-state/account-statement/expenses/expenses-actions.js';
import { addAsset, removeAsset } from '../app-state/balance-sheet/assets/assets-actions.js';
import { addLiability, removeLiability } from '../app-state/balance-sheet/liabilities/liabilities-actions.js';
import { updateWealth } from '../app-state/wealth/wealth-actions.js';
import { setInvestmentAllocation } from '../app-state/investment-preferences/investment-preferences-actions.js';
import '../ui/organisms/fw-logo.js';

class SetupWizard extends connect(store)(LitElement) {
  static get properties() {
    return {
      isOpen: { type: Boolean },
      currentStep: { type: Number },
      appState: { type: Object },
      newEntry: { type: Object },
      calculating: { type: Boolean },
      calculationProgress: { type: Number },
      financialFreedomMonths: { type: Number },
      investmentAllocation: { type: Array },
    };
  }

  static get styles() {
    return css`
      .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
      }

      .modal-content {
        background: white;
        border-radius: 8px;
        padding: 2rem;
        max-width: 800px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
      }

      .wizard-header {
        margin-bottom: 2rem;
      }

      .wizard-steps {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2rem;
        gap: 0.25rem;
      }

      .step {
        flex: 1;
        min-width: 0;
        text-align: center;
        padding: 0.5rem;
        border-bottom: 3px solid #ddd;
        color: #999;
        font-size: 0.9em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .step.active {
        border-bottom-color: #4CAF50;
        color: #4CAF50;
        font-weight: bold;
        flex: 2;
      }

      .step.completed {
        border-bottom-color: #4CAF50;
        color: #333;
      }

      @media (max-width: 600px) {
        .modal-content {
          padding: 1rem;
          width: 95%;
          max-height: 90vh;
        }

        .wizard-steps {
          margin-bottom: 1.25rem;
        }

        .step {
          padding: 0.4rem 0.2rem;
          font-size: 0.8em;
        }

        .step:not(.active) .step-label {
          display: none;
        }
      }

      .entry-list {
        margin: 1rem 0;
      }

      .entry-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.75rem;
        margin: 0.5rem 0;
        background: #f5f5f5;
        border-radius: 4px;
      }

      .entry-details {
        flex: 1;
      }

      .entry-name {
        font-weight: bold;
      }

      .entry-amount {
        color: #666;
        font-size: 0.9em;
      }

      .remove-btn {
        background: #f44336;
        color: white;
        border: none;
        padding: 0.4rem 0.8rem;
        border-radius: 4px;
        cursor: pointer;
      }

      .remove-btn:hover {
        background: #d32f2f;
      }

      .add-entry-form {
        display: grid;
        gap: 1rem;
        margin: 1rem 0;
        padding: 1rem;
        background: #f9f9f9;
        border-radius: 4px;
      }

      .form-row {
        display: grid;
        gap: 0.5rem;
      }

      .wizard-actions {
        display: flex;
        justify-content: space-between;
        margin-top: 2rem;
      }

      .progress-container {
        text-align: center;
        padding: 2rem;
      }

      .progress-bar {
        width: 100%;
        height: 20px;
        background: #e0e0e0;
        border-radius: 10px;
        overflow: hidden;
        margin: 1rem 0;
      }

      .progress-fill {
        height: 100%;
        background: linear-gradient(90deg, #4CAF50, #8BC34A);
        transition: width 0.3s ease;
      }

      .result-summary {
        margin: 2rem 0;
        padding: 1.5rem;
        background: #e8f5e9;
        border-radius: 8px;
      }

      .result-summary h3 {
        color: #4CAF50;
        margin-top: 0;
      }

      .privacy-notice {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem 1rem;
        background: #e3f2fd;
        border-radius: 6px;
        font-size: 0.85em;
        color: #1565c0;
        margin-top: 1rem;
      }

      .privacy-notice svg {
        flex-shrink: 0;
      }

      .allocation-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        margin: 0.5rem 0;
        background: #f5f5f5;
        border-radius: 8px;
      }

      .allocation-item.selected {
        background: #e3f2fd;
        border: 2px solid #2196F3;
      }

      .allocation-checkbox {
        width: 20px;
        height: 20px;
        cursor: pointer;
      }

      .allocation-details {
        flex: 1;
      }

      .allocation-name {
        font-weight: bold;
        margin-bottom: 0.25rem;
      }

      .allocation-desc {
        font-size: 0.85em;
        color: #666;
      }

      .allocation-percent {
        width: 80px;
      }

      .allocation-percent input {
        width: 100%;
        text-align: center;
      }

      .total-allocation {
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        margin-top: 1rem;
        background: #fff3e0;
        border-radius: 8px;
        font-weight: bold;
      }

      .total-allocation.valid {
        background: #e8f5e9;
        color: #2e7d32;
      }

      .total-allocation.invalid {
        background: #ffebee;
        color: #c62828;
      }
    `;
  }

  constructor() {
    super();
    this.isOpen = false;
    this.currentStep = 1;
    this.newEntry = {};
    this.calculating = false;
    this.calculationProgress = 0;
    this.financialFreedomMonths = null;
    this.investmentAllocation = [
      {
        id: 'stocks',
        name: 'Stocks / Equity',
        description: 'High risk, high return (8-12% avg)',
        rate: 10,
        selected: true,
        percent: 40,
      },
      {
        id: 'bonds',
        name: 'Bonds / Fixed Income',
        description: 'Low risk, stable returns (4-6% avg)',
        rate: 5,
        selected: true,
        percent: 20,
      },
      {
        id: 'real-estate',
        name: 'Real Estate',
        description: 'Medium risk, rental + appreciation (6-8% avg)',
        rate: 7,
        selected: false,
        percent: 0,
      },
      {
        id: 'gold',
        name: 'Gold / Commodities',
        description: 'Hedge against inflation (4-6% avg)',
        rate: 5,
        selected: false,
        percent: 0,
      },
      {
        id: 'crypto',
        name: 'Cryptocurrency',
        description: 'Very high risk, volatile (varies widely)',
        rate: 15,
        selected: false,
        percent: 0,
      },
      {
        id: 'savings',
        name: 'Savings Account',
        description: 'Very low risk, liquid (2-4% avg)',
        rate: 3,
        selected: true,
        percent: 40,
      },
    ];
  }

  stateChanged(state) {
    this.appState = state;
  }

  open() {
    this.isOpen = true;
    this.currentStep = 1;
  }

  close() {
    this.isOpen = false;
    localStorage.setItem('appState', JSON.stringify(this.appState));
    // Dispatch event to notify app-shell
    this.dispatchEvent(new CustomEvent('wizard-complete', {
      bubbles: true,
      composed: true,
    }));
  }

  nextStep() {
    if (this.currentStep < 6) {
      // Save investment allocation to Redux when leaving step 5
      if (this.currentStep === 5) {
        store.dispatch(setInvestmentAllocation(this.investmentAllocation));
      }
      this.currentStep += 1;
      if (this.currentStep === 6) {
        this.calculateFinalProjection();
      }
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep -= 1;
    }
  }

  getNextId(array) {
    if (!array || array.length === 0) return 1;
    return Math.max(...array.map((item) => item.id || 0)) + 1;
  }

  addIncome() {
    const income = {
      id: this.getNextId(this.appState.accountStatement.incomes),
      name: this.newEntry.name || 'Unnamed Income',
      type: this.newEntry.type || 'active-income',
      amount: parseFloat(this.newEntry.amount) || 0,
      helperText: this.newEntry.helperText || '',
    };
    store.dispatch(addIncome(income));
    this.newEntry = {};
    this.requestUpdate();
  }

  removeIncome(id) {
    store.dispatch(removeIncome(id));
  }

  addExpense() {
    const expense = {
      id: this.getNextId(this.appState.accountStatement.expenses),
      name: this.newEntry.name || 'Unnamed Expense',
      type: this.newEntry.type || 'general',
      amount: parseFloat(this.newEntry.amount) || 0,
      helperText: this.newEntry.helperText || '',
    };
    store.dispatch(addExpense(expense));
    this.newEntry = {};
    this.requestUpdate();
  }

  removeExpense(id) {
    store.dispatch(removeExpense(id));
  }

  addAsset() {
    const asset = {
      id: this.getNextId(this.appState.balanceSheet.assets),
      name: this.newEntry.name || 'Unnamed Asset',
      amount: parseFloat(this.newEntry.amount) || 0,
      rate: parseFloat(this.newEntry.rate) || 0,
    };
    store.dispatch(addAsset(asset));
    this.newEntry = {};
    this.requestUpdate();
  }

  removeAsset(id) {
    store.dispatch(removeAsset(id));
  }

  addLiability() {
    const liability = {
      id: this.getNextId(this.appState.balanceSheet.liabilities),
      name: this.newEntry.name || 'Unnamed Liability',
      amount: parseFloat(this.newEntry.amount) || 0,
      rate: parseFloat(this.newEntry.rate) || 0,
      tenure: parseInt(this.newEntry.tenure, 10) || 120,
      startDate: this.newEntry.startDate || new Date().toISOString().split('T')[0],
    };
    store.dispatch(addLiability(liability));
    this.newEntry = {};
    this.requestUpdate();
  }

  removeLiability(id) {
    store.dispatch(removeLiability(id));
  }

  calculateFinalProjection() {
    this.calculating = true;
    this.calculationProgress = 0;

    const interval = setInterval(() => {
      this.calculationProgress += 10;
      if (this.calculationProgress >= 100) {
        clearInterval(interval);
        this.calculating = false;
        
        store.dispatch(updateWealth(
          this.appState.accountStatement,
          this.appState.balanceSheet,
          this.appState.investmentPreferences.allocations,
        ));
        
        setTimeout(() => {
          const { wealth } = this.appState;
          if (wealth && wealth.timeline && wealth.timeline.length > 0) {
            this.financialFreedomMonths = wealth.ffAchievedAtMonth || wealth.timeline.length;
          }
        }, 100);
      }
    }, 100);
  }

  updateNewEntry(field, value) {
    this.newEntry = { ...this.newEntry, [field]: value };
  }

  renderStepIndicator() {
    const steps = ['Income', 'Expenses', 'Assets', 'Liabilities', 'Invest', 'Results'];
    return html`
      <div class="wizard-steps">
        ${steps.map((step, index) => html`
          <div class="step ${this.currentStep === index + 1 ? 'active' : ''} ${this.currentStep > index + 1 ? 'completed' : ''}">
            <span class="step-number">${index + 1}</span><span class="step-label">. ${step}</span>
          </div>
        `)}
      </div>
    `;
  }

  renderIncomeStep() {
    const incomes = this.appState.accountStatement.incomes || [];
    return html`
      <div class="wizard-step">
        <h2>Income Sources</h2>
        <p>Add your active income (salary) and passive income sources.</p>
        
        <div class="add-entry-form">
          <div class="form-row">
            <label>Income Name</label>
            <input type="text" placeholder="e.g., Salary" @input=${(e) => this.updateNewEntry('name', e.target.value)} .value="${this.newEntry.name || ''}">
          </div>
          <div class="form-row">
            <label>Type</label>
            <select @change=${(e) => this.updateNewEntry('type', e.target.value)} .value=${this.newEntry.type || 'active-income'}>
              <option value="active-income">Active Income (Salary/Business)</option>
              <option value="passive-income">Passive Income (Investments)</option>
            </select>
          </div>
          <div class="form-row">
            <label>Amount (monthly)</label>
            <input type="number" placeholder="0" @input=${(e) => this.updateNewEntry('amount', e.target.value)} .value="${this.newEntry.amount || ''}">
          </div>
          <div class="form-row">
            <label>Description (optional)</label>
            <input type="text" placeholder="Additional details" @input=${(e) => this.updateNewEntry('helperText', e.target.value)} .value="${this.newEntry.helperText || ''}">
          </div>
          <button class="button primary" @click=${this.addIncome}>Add Income</button>
        </div>

        <div class="entry-list">
          <h3>Your Income Sources</h3>
          ${incomes.length === 0 ? html`<p>No income sources added yet.</p>` : ''}
          ${incomes.map((income) => html`
            <div class="entry-item">
              <div class="entry-details">
                <div class="entry-name">${income.name} <span style="color: #2196F3; font-size: 0.8em;">(${income.type === 'active-income' ? 'Active' : 'Passive'})</span></div>
                <div class="entry-amount">$${income.amount}/month</div>
              </div>
              <button class="remove-btn" @click=${() => this.removeIncome(income.id)}>Remove</button>
            </div>
          `)}
        </div>
      </div>
    `;
  }

  renderExpenseStep() {
    const expenses = this.appState.accountStatement.expenses || [];
    return html`
      <div class="wizard-step">
        <h2>Monthly Expenses</h2>
        <p>Add your regular monthly expenses.</p>
        
        <div class="add-entry-form">
          <div class="form-row">
            <label>Expense Name</label>
            <input type="text" placeholder="e.g., Groceries" @input=${(e) => this.updateNewEntry('name', e.target.value)} .value="${this.newEntry.name || ''}">
          </div>
          <div class="form-row">
            <label>Category</label>
            <select @change=${(e) => this.updateNewEntry('type', e.target.value)} .value=${this.newEntry.type || 'general'}>
              <option value="general">General Expense</option>
              <option value="housing">Housing</option>
              <option value="liability-expense">Liability Payment (EMI)</option>
            </select>
          </div>
          <div class="form-row">
            <label>Amount (monthly)</label>
            <input type="number" placeholder="0" @input=${(e) => this.updateNewEntry('amount', e.target.value)} .value="${this.newEntry.amount || ''}">
          </div>
          <div class="form-row">
            <label>Description (optional)</label>
            <input type="text" placeholder="Additional details" @input=${(e) => this.updateNewEntry('helperText', e.target.value)} .value="${this.newEntry.helperText || ''}">
          </div>
          <button class="button primary" @click=${this.addExpense}>Add Expense</button>
        </div>

        <div class="entry-list">
          <h3>Your Expenses</h3>
          ${expenses.length === 0 ? html`<p>No expenses added yet.</p>` : ''}
          ${expenses.map((expense) => html`
            <div class="entry-item">
              <div class="entry-details">
                <div class="entry-name">${expense.name}</div>
                <div class="entry-amount">$${expense.amount}/month</div>
              </div>
              <button class="remove-btn" @click=${() => this.removeExpense(expense.id)}>Remove</button>
            </div>
          `)}
        </div>
      </div>
    `;
  }

  renderAssetStep() {
    const assets = this.appState.balanceSheet.assets || [];
    return html`
      <div class="wizard-step">
        <h2>Assets</h2>
        <p>Add your assets like savings, investments, and property.</p>
        
        <div class="add-entry-form">
          <div class="form-row">
            <label>Asset Name</label>
            <input type="text" placeholder="e.g., Investment Portfolio" @input=${(e) => this.updateNewEntry('name', e.target.value)} .value="${this.newEntry.name || ''}">
          </div>
          <div class="form-row">
            <label>Current Value</label>
            <input type="number" placeholder="0" @input=${(e) => this.updateNewEntry('amount', e.target.value)} .value="${this.newEntry.amount || ''}">
          </div>
          <div class="form-row">
            <label>Annual Return Rate (%)</label>
            <input type="number" step="0.1" placeholder="7" @input=${(e) => this.updateNewEntry('rate', e.target.value)} .value="${this.newEntry.rate || ''}">
          </div>
          <button class="button primary" @click=${this.addAsset}>Add Asset</button>
        </div>

        <div class="entry-list">
          <h3>Your Assets</h3>
          ${assets.length === 0 ? html`<p>No assets added yet.</p>` : ''}
          ${assets.map((asset) => html`
            <div class="entry-item">
              <div class="entry-details">
                <div class="entry-name">${asset.name}</div>
                <div class="entry-amount">$${asset.amount} @ ${asset.rate}% annual</div>
              </div>
              <button class="remove-btn" @click=${() => this.removeAsset(asset.id)}>Remove</button>
            </div>
          `)}
        </div>
      </div>
    `;
  }

  renderLiabilityStep() {
    const liabilities = this.appState.balanceSheet.liabilities || [];
    return html`
      <div class="wizard-step">
        <h2>Liabilities</h2>
        <p>Add your loans and other liabilities.</p>
        
        <div class="add-entry-form">
          <div class="form-row">
            <label>Liability Name</label>
            <input type="text" placeholder="e.g., Home Loan" @input=${(e) => this.updateNewEntry('name', e.target.value)} .value="${this.newEntry.name || ''}">
          </div>
          <div class="form-row">
            <label>Principal Amount</label>
            <input type="number" placeholder="0" @input=${(e) => this.updateNewEntry('amount', e.target.value)} .value="${this.newEntry.amount || ''}">
          </div>
          <div class="form-row">
            <label>Interest Rate (% per year)</label>
            <input type="number" step="0.1" placeholder="7" @input=${(e) => this.updateNewEntry('rate', e.target.value)} .value="${this.newEntry.rate || ''}">
          </div>
          <div class="form-row">
            <label>Tenure (months)</label>
            <input type="number" placeholder="120" @input=${(e) => this.updateNewEntry('tenure', e.target.value)} .value="${this.newEntry.tenure || ''}">
          </div>
          <button class="button primary" @click=${this.addLiability}>Add Liability</button>
        </div>

        <div class="entry-list">
          <h3>Your Liabilities</h3>
          ${liabilities.length === 0 ? html`<p>No liabilities added yet.</p>` : ''}
          ${liabilities.map((liability) => html`
            <div class="entry-item">
              <div class="entry-details">
                <div class="entry-name">${liability.name}</div>
                <div class="entry-amount">$${liability.amount} @ ${liability.rate}% for ${liability.tenure} months</div>
              </div>
              <button class="remove-btn" @click=${() => this.removeLiability(liability.id)}>Remove</button>
            </div>
          `)}
        </div>
      </div>
    `;
  }

  toggleAllocation(id) {
    this.investmentAllocation = this.investmentAllocation.map((item) => {
      if (item.id === id) {
        return { ...item, selected: !item.selected, percent: item.selected ? 0 : item.percent };
      }
      return item;
    });
  }

  updateAllocationPercent(id, value) {
    const percent = Math.max(0, Math.min(100, parseInt(value, 10) || 0));
    this.investmentAllocation = this.investmentAllocation.map((item) => {
      if (item.id === id) {
        return { ...item, percent, selected: percent > 0 };
      }
      return item;
    });
  }

  getTotalAllocation() {
    return this.investmentAllocation
      .filter((item) => item.selected)
      .reduce((sum, item) => sum + item.percent, 0);
  }

  renderInvestmentStep() {
    const totalAllocation = this.getTotalAllocation();
    const isValid = totalAllocation === 100;

    return html`
      <div class="wizard-step">
        <h2>Investment Allocation</h2>
        <p>Choose how you want to invest your monthly savings across different asset classes.</p>

        <div class="entry-list">
          ${this.investmentAllocation.map((item) => html`
            <div class="allocation-item ${item.selected ? 'selected' : ''}">
              <input 
                type="checkbox" 
                class="allocation-checkbox"
                .checked=${item.selected}
                @change=${() => this.toggleAllocation(item.id)}
              />
              <div class="allocation-details">
                <div class="allocation-name">${item.name}</div>
                <div class="allocation-desc">${item.description}</div>
              </div>
              <div class="allocation-percent">
                <input 
                  type="number" 
                  min="0" 
                  max="100"
                  .value=${String(item.percent)}
                  ?disabled=${!item.selected}
                  @input=${(e) => this.updateAllocationPercent(item.id, e.target.value)}
                  placeholder="%"
                />
                <small>%</small>
              </div>
            </div>
          `)}
        </div>

        <div class="total-allocation ${isValid ? 'valid' : 'invalid'}">
          <span>Total Allocation:</span>
          <span>${totalAllocation}% ${isValid ? 'OK' : '(must equal 100%)'}</span>
        </div>
      </div>
    `;
  }

  renderResultsStep() {
    // Get the snapshot from when FF is achieved to show active income at that time
    const { wealth } = this.appState;
    const ffMonth = wealth && wealth.ffAchievedAtMonth;
    const timeline = wealth && wealth.timeline ? wealth.timeline : [];
    // Show snapshot at FF achievement (still has active income)
    const retirementMonth = ffMonth !== null ? ffMonth + 6 : null;
    const targetSnapshot = ffMonth !== null && timeline[ffMonth]
      ? timeline[ffMonth]
      : timeline[0];
    
    // Calculate future date when FF is achieved and retirement date
    let ffDate = null;
    let retirementDate = null;
    if (ffMonth !== null && ffMonth > 0) {
      const ffFutureDate = new Date();
      ffFutureDate.setMonth(ffFutureDate.getMonth() + ffMonth);
      const ffMonthName = ffFutureDate.toLocaleString('default', { month: 'long' });
      const ffYear = ffFutureDate.getFullYear();
      ffDate = `${ffMonthName} ${ffYear}`;

      // Retirement is 6 months later
      const retireFutureDate = new Date();
      retireFutureDate.setMonth(retireFutureDate.getMonth() + retirementMonth);
      const retireMonthName = retireFutureDate.toLocaleString('default', { month: 'long' });
      const retireYear = retireFutureDate.getFullYear();
      retirementDate = `${retireMonthName} ${retireYear}`;
    }

    return html`
      <div class="wizard-step">
        <h2>Your Financial Freedom Journey</h2>
        
        ${this.calculating ? html`
          <div class="progress-container">
            <p>Calculating your financial projections...</p>
            <div class="progress-bar">
              <div class="progress-fill" style="width: ${this.calculationProgress}%"></div>
            </div>
            <p>${this.calculationProgress}%</p>
          </div>
        ` : html`
          <div class="result-summary">
            <h3>🎉 Analysis Complete!</h3>
            ${ffMonth !== null && ffMonth > 0 ? html`
              <p><strong>🎯 Financial Freedom Achieved in:</strong> ${ffMonth} months (${Math.round(ffMonth / 12)} years)</p>
              <p><strong>🗓️ Financial Freedom Date:</strong> ${ffDate}</p>
              <p><strong>🏖️ Full Retirement Date:</strong> ${retirementDate} <em>(6 months later)</em></p>
              <p style="font-size: 0.9rem; color: #666;">Your passive income will exceed expenses at ${ffDate}. After a 6-month transition period, you can fully retire!</p>
            ` : html`
              <p>Continue building your assets and passive income streams. Financial freedom may take longer than 30 years with your current projections.</p>
            `}
          </div>

          ${targetSnapshot ? html`
            <div style="margin: 2rem 0;">
              <h3 style="text-align: center;">
                ${ffMonth !== null && ffMonth > 0 ? `Financial Status at Financial Freedom (${ffDate})` : 'Current Financial Status'}
              </h3>
              <div style="display: flex; justify-content: center;">
                <fw-logo
                  income="${targetSnapshot.activeIncome}"
                  expense="${targetSnapshot.expenses}"
                  liabilities="${targetSnapshot.liabilitiesExpenses}"
                  employee="1"
                  investor="1"
                  .highlights="${[]}"
                ></fw-logo>
              </div>
            </div>

            <div style="background: #f5f5f5; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div>
                  <small style="color: #666;">Active Income (Salary)</small>
                  <div><strong>$${targetSnapshot.totalActiveIncome || 0}</strong> (${targetSnapshot.activeIncome || 0}%)</div>
                </div>
                <div>
                  <small style="color: #666;">Passive Income (from Assets)</small>
                  <div><strong>$${targetSnapshot.totalPassiveIncome || 0}</strong> (${targetSnapshot.passiveIncome || 0}%)</div>
                </div>
                <div>
                  <small style="color: #666;">General Expenses</small>
                  <div><strong>$${targetSnapshot.generalExpenses || 0}</strong> (${targetSnapshot.expenses || 0}%)</div>
                </div>
                <div>
                  <small style="color: #666;">Liability EMI (Auto-calculated)</small>
                  <div><strong>$${targetSnapshot.liabilityEMI || 0}</strong> (${targetSnapshot.liabilitiesExpenses || 0}%)</div>
                </div>
                <div>
                  <small style="color: #666;">Net Worth</small>
                  <div><strong>$${targetSnapshot.netWorth || 0}</strong></div>
                </div>
                <div>
                  <small style="color: #666;">Monthly Savings</small>
                  <div><strong>${targetSnapshot.savings || 0}%</strong> of income</div>
                </div>
              </div>
            </div>
          ` : ''}

          <div class="wizard-actions" style="justify-content: center;">
            <button class="button primary" @click=${this.close}>Start Using Widget</button>
          </div>
        `}
      </div>
    `;
  }

  render() {
    if (!this.isOpen) return html``;

    return html`
      <link rel="stylesheet" href="https://unpkg.com/chota@latest">
      <div class="modal-overlay">
        <div class="modal-content">
          <div class="wizard-header">
            <h1>Financial Setup Wizard</h1>
            <p>Let's set up your financial profile to calculate your path to financial freedom.</p>
            <div class="privacy-notice">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
              </svg>
              <span>Your data is stored locally in your browser only. Nothing is sent to any server or shared with anyone.</span>
            </div>
          </div>

          ${this.renderStepIndicator()}

          ${this.currentStep === 1 ? this.renderIncomeStep() : ''}
          ${this.currentStep === 2 ? this.renderExpenseStep() : ''}
          ${this.currentStep === 3 ? this.renderAssetStep() : ''}
          ${this.currentStep === 4 ? this.renderLiabilityStep() : ''}
          ${this.currentStep === 5 ? this.renderInvestmentStep() : ''}
          ${this.currentStep === 6 ? this.renderResultsStep() : ''}

          ${this.currentStep < 6 ? html`
            <div class="wizard-actions">
              <button class="button" 
                      @click=${this.previousStep} 
                      ?disabled=${this.currentStep === 1}>
                Previous
              </button>
              <button class="button primary" 
                      @click=${this.nextStep}
                      ?disabled=${this.currentStep === 5 && this.getTotalAllocation() !== 100}>
                ${this.currentStep === 5 ? 'Calculate Results' : 'Next'}
              </button>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }
}

customElements.define('setup-wizard', SetupWizard);
