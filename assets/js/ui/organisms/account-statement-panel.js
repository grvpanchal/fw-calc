import { LitElement, html } from 'lit-element';
import '../molecules/app-tabs.js';
import '../molecules/income-list-item.js';
import '../molecules/expense-list-item.js';
import '../molecules/passive-income-item.js';
import '../molecules/liability-emi-item.js';
import '../molecules/wealth-stats-panel.js';

class AccountStatementPanel extends LitElement {
  static get properties() {
    return {
      activeTab: { type: String },
      incomes: { type: Array },
      expenses: { type: Array },
      assets: { type: Array },
      liabilities: { type: Array },
      totalPassiveIncome: { type: Number },
      totalLiabilityEMI: { type: Number },
      currentDate: { type: String },
      dateIndex: { type: Number },
      maxDateIndex: { type: Number },
      wealthSnapshot: { type: Object },
    };
  }

  constructor() {
    super();
    this.activeTab = 'expenses';
    this.incomes = [];
    this.expenses = [];
    this.assets = [];
    this.liabilities = [];
    this.totalPassiveIncome = 0;
    this.totalLiabilityEMI = 0;
    this.currentDate = 'Calculating...';
    this.dateIndex = 0;
    this.maxDateIndex = 0;
    this.wealthSnapshot = {};
  }

  calculateAssetPassiveIncome(asset) {
    return Math.round(((asset.amount * (asset.rate || 0)) / 100) / 12);
  }

  calculateLiabilityEMI(liability) {
    const { amount, rate, tenure } = liability;
    if (!tenure || tenure === 0) return 0;
    if (!rate || rate === 0) return Math.round(amount / tenure);
    const monthlyRate = rate / 100 / 12;
    const emi = (amount * monthlyRate * ((1 + monthlyRate) ** tenure))
      / (((1 + monthlyRate) ** tenure) - 1);
    return Math.round(emi);
  }

  handleTabSelect(e) {
    this.activeTab = e.detail.id;
    this.dispatchEvent(new CustomEvent('tab-change', {
      detail: { activeTab: this.activeTab },
      bubbles: true,
      composed: true,
    }));
  }

  handleRangeInput(e) {
    this.dispatchEvent(new CustomEvent('date-change', {
      detail: { dateIndex: Number(e.target.value) },
      bubbles: true,
      composed: true,
    }));
  }

  handleIncomeUpdate(e) {
    this.dispatchEvent(new CustomEvent('income-update', {
      detail: e.detail,
      bubbles: true,
      composed: true,
    }));
  }

  handleIncomeRemove(e) {
    this.dispatchEvent(new CustomEvent('income-remove', {
      detail: e.detail,
      bubbles: true,
      composed: true,
    }));
  }

  handleExpenseUpdate(e) {
    this.dispatchEvent(new CustomEvent('expense-update', {
      detail: e.detail,
      bubbles: true,
      composed: true,
    }));
  }

  handleExpenseRemove(e) {
    this.dispatchEvent(new CustomEvent('expense-remove', {
      detail: e.detail,
      bubbles: true,
      composed: true,
    }));
  }

  handleAddIncome() {
    this.dispatchEvent(new CustomEvent('add-income', {
      bubbles: true,
      composed: true,
    }));
  }

  handleAddExpense() {
    this.dispatchEvent(new CustomEvent('add-expense', {
      bubbles: true,
      composed: true,
    }));
  }

  render() {
    const tabs = [
      {
        id: 'income',
        label: 'Income',
        isActive: this.activeTab === 'income' ? 'active' : '',
      },
      {
        id: 'expenses',
        label: 'Expenses',
        isActive: this.activeTab === 'expenses' ? 'active' : '',
      },
    ];

    return html`
      <link rel="stylesheet" href="https://unpkg.com/chota@latest">
      <div style="min-height: 600px;">
        <div>Date: ${this.currentDate}</div>
        <div class="slidecontainer">
          <input 
            type="range" 
            min="0" 
            max="${String(this.maxDateIndex)}" 
            value=${this.dateIndex}
            class="slider"
            @input=${this.handleRangeInput}
            id="myRange"
          >
        </div>
        <wealth-stats-panel
          .totalActiveIncome=${this.wealthSnapshot.totalActiveIncome || 0}
          .activeIncomePercent=${this.wealthSnapshot.activeIncome || 0}
          .totalPassiveIncome=${this.wealthSnapshot.totalPassiveIncome || 0}
          .passiveIncomePercent=${this.wealthSnapshot.passiveIncome || 0}
          .generalExpenses=${this.wealthSnapshot.generalExpenses || 0}
          .expensesPercent=${this.wealthSnapshot.expenses || 0}
          .liabilityEMI=${this.wealthSnapshot.liabilityEMI || 0}
          .liabilitiesExpensesPercent=${this.wealthSnapshot.liabilitiesExpenses || 0}
          .savingsPercent=${this.wealthSnapshot.savings || 0}
          .netWorth=${this.wealthSnapshot.netWorth || 0}
          .accumulatedSavings=${this.wealthSnapshot.accumulatedSavings || 0}
          .passiveIncomeFromOriginalAssets=${this.wealthSnapshot.passiveIncomeFromOriginalAssets || 0}
          .passiveIncomeFromInvestments=${this.wealthSnapshot.passiveIncomeFromInvestments || 0}
        ></wealth-stats-panel>
        <app-tabs 
          .tabs=${tabs} 
          @tabSelect=${this.handleTabSelect}
        ></app-tabs>
        <br />
        
        ${this.activeTab === 'income' ? html`
          <fieldset>
            <legend>Active Income (Salary/Business)</legend>
            ${this.incomes && this.incomes.length ? this.incomes.map((income) => html`
              <income-list-item
                .income=${income}
                @income-update=${this.handleIncomeUpdate}
                @income-remove=${this.handleIncomeRemove}
              ></income-list-item>
            `) : html`<p class="text-grey">No income sources added yet</p>`}
            <button class="button primary" @click=${this.handleAddIncome}>+ Add Income</button>
          </fieldset>
          <br />
          <fieldset>
            <legend>
              <img src="https://icongr.am/feather/trending-up.svg?size=16&color=4CAF50" alt="" style="vertical-align: middle; margin-right: 4px;" />
              Passive Income from Assets (Auto-Calculated)
            </legend>
            
            ${this.wealthSnapshot.passiveIncomeFromOriginalAssets > 0 ? html`
              <div style="background: #e8f5e9; padding: 0.75rem; border-radius: 4px; margin-bottom: 0.75rem;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <div>
                    <strong style="color: #2e7d32;">Original Assets</strong>
                    <div style="font-size: 0.85rem; color: #666;">From existing holdings</div>
                  </div>
                  <strong style="color: #2e7d32; font-size: 1.1rem;">
                    $${this.wealthSnapshot.passiveIncomeFromOriginalAssets || 0}/mo
                  </strong>
                </div>
              </div>
            ` : ''}
            
            ${this.wealthSnapshot.passiveIncomeFromInvestments > 0 ? html`
              <div style="background: #f1f8e9; padding: 0.75rem; border-radius: 4px; margin-bottom: 0.75rem;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                  <div>
                    <strong style="color: #558b2f;">📈 Investment Portfolio</strong>
                    <div style="font-size: 0.85rem; color: #666;">From reinvested savings</div>
                  </div>
                  <strong style="color: #558b2f; font-size: 1.1rem;">
                    $${this.wealthSnapshot.passiveIncomeFromInvestments || 0}/mo
                  </strong>
                </div>
                
                ${this.wealthSnapshot.investmentBreakdown && Object.keys(this.wealthSnapshot.investmentBreakdown).length > 0 ? html`
                  <div style="padding-left: 1rem; border-left: 3px solid #aed581;">
                    ${Object.entries(this.wealthSnapshot.investmentBreakdown).map(([name, data]) => html`
                      <div style="display: flex; justify-content: space-between; padding: 0.25rem 0; font-size: 0.9rem;">
                        <span style="color: #666;">
                          ${name.replace('Invested Savings (', '').replace(')', '')}
                          <span style="font-size: 0.8rem; color: #999;">(${data.rate}% return)</span>
                        </span>
                        <span style="color: #558b2f; font-weight: 500;">
                          $${Math.round(data.monthlyIncome)}/mo
                        </span>
                      </div>
                    `)}
                  </div>
                ` : ''}
              </div>
            ` : ''}
            
            ${this.assets && this.assets.length ? this.assets.map((asset) => html`
              <passive-income-item
                .asset=${asset}
                .monthlyIncome=${this.calculateAssetPassiveIncome(asset)}
              ></passive-income-item>
            `) : html`<p class="text-grey">Add assets in Balance Sheet to see passive income</p>`}
            
            <div style="border-top: 2px solid #4CAF50; padding-top: 0.5rem; margin-top: 0.5rem; display: flex; justify-content: space-between;">
              <strong style="color: #2e7d32;">Total Passive Income:</strong>
              <strong style="color: #2e7d32;">$${this.totalPassiveIncome || 0}/mo</strong>
            </div>
          </fieldset>
        ` : html``}
        
        ${this.activeTab === 'expenses' ? html`
          <fieldset>
            <legend>General Expenses</legend>
            ${this.expenses && this.expenses.length ? this.expenses.map((expense) => html`
              <expense-list-item
                .expense=${expense}
                @expense-update=${this.handleExpenseUpdate}
                @expense-remove=${this.handleExpenseRemove}
              ></expense-list-item>
            `) : html`<p class="text-grey">No expenses added yet</p>`}
            <button class="button primary" @click=${this.handleAddExpense}>+ Add Expense</button>
          </fieldset>
          <br />
          <fieldset>
            <legend>
              <img src="https://icongr.am/feather/trending-down.svg?size=16&color=f44336" alt="" style="vertical-align: middle; margin-right: 4px;" />
              Liability EMI (Auto-Calculated)
            </legend>
            ${this.liabilities && this.liabilities.length ? this.liabilities.map((liability) => html`
              <liability-emi-item
                .liability=${liability}
                .monthlyEMI=${this.calculateLiabilityEMI(liability)}
              ></liability-emi-item>
            `) : html`<p class="text-grey">Add liabilities in Balance Sheet to see EMI</p>`}
            <div style="border-top: 2px solid #f44336; padding-top: 0.5rem; margin-top: 0.5rem; display: flex; justify-content: space-between;">
              <strong style="color: #c62828;">Total EMI:</strong>
              <strong style="color: #c62828;">$${this.totalLiabilityEMI || 0}/mo</strong>
            </div>
          </fieldset>
        ` : html``}
      </div>
    `;
  }
}

customElements.define('account-statement-panel', AccountStatementPanel);
