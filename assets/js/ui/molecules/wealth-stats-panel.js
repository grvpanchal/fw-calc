import { LitElement, html } from 'lit-element';
import '../atoms/wealth-stat-card.js';

class WealthStatsPanel extends LitElement {
  static get properties() {
    return {
      totalActiveIncome: { type: Number },
      activeIncomePercent: { type: Number },
      totalPassiveIncome: { type: Number },
      passiveIncomePercent: { type: Number },
      generalExpenses: { type: Number },
      expensesPercent: { type: Number },
      liabilityEMI: { type: Number },
      liabilitiesExpensesPercent: { type: Number },
      savingsPercent: { type: Number },
      netWorth: { type: Number },
      accumulatedSavings: { type: Number },
      passiveIncomeFromOriginalAssets: { type: Number },
      passiveIncomeFromInvestments: { type: Number },
    };
  }

  // Disable shadow DOM to allow Chota CSS grid to work properly
  createRenderRoot() {
    return this;
  }

  constructor() {
    super();
    this.totalActiveIncome = 0;
    this.activeIncomePercent = 0;
    this.totalPassiveIncome = 0;
    this.passiveIncomePercent = 0;
    this.generalExpenses = 0;
    this.expensesPercent = 0;
    this.liabilityEMI = 0;
    this.liabilitiesExpensesPercent = 0;
    this.savingsPercent = 0;
    this.netWorth = 0;
    this.accumulatedSavings = 0;
    this.passiveIncomeFromOriginalAssets = 0;
    this.passiveIncomeFromInvestments = 0;
  }

  render() {
    return html`
      <div style="background: #f5f5f5; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
        <div class="row" style="width: 100%;">
          <wealth-stat-card
            class="col-6"
            label="Active Income"
            value="$${this.totalActiveIncome || 0}"
            percentage="${this.activeIncomePercent || 0}"
          ></wealth-stat-card>
          <div class="col-6">
            <wealth-stat-card
              label="Passive Income (from Assets)"
              value="$${this.totalPassiveIncome || 0}"
              percentage="${this.passiveIncomePercent || 0}"
            ></wealth-stat-card>
            ${this.passiveIncomeFromInvestments > 0 ? html`
              <div style="font-size: 0.75rem; color: #666; margin-top: 0.25rem; padding-left: 0.5rem;">
                <div style="display: flex; justify-content: space-between;">
                  <span>Original Assets:</span>
                  <span style="font-weight: 500;">$${this.passiveIncomeFromOriginalAssets || 0}</span>
                </div>
                <div style="display: flex; justify-content: space-between; color: #558b2f;">
                  <span>📈 Investments:</span>
                  <span style="font-weight: 500;">$${this.passiveIncomeFromInvestments || 0}</span>
                </div>
              </div>
            ` : ''}
          </div>
        </div>
        <hr style="margin: 0.5rem 0;" />
        <div class="row" style="width: 100%;">
          <wealth-stat-card
            class="col-4"
            label="Expenses"
            value="$${this.generalExpenses || 0}"
            percentage="${this.expensesPercent || 0}"
          ></wealth-stat-card>
          <wealth-stat-card
            class="col-4"
            label="Liability EMI"
            value="$${this.liabilityEMI || 0}"
            percentage="${this.liabilitiesExpensesPercent || 0}"
          ></wealth-stat-card>
          <wealth-stat-card
            class="col-4"
            label="Savings"
            value=""
            percentage="${this.savingsPercent || 0}"
          ></wealth-stat-card>
        </div>
        <hr style="margin: 0.5rem 0;" />
        <div class="row" style="width: 100%;">
          <wealth-stat-card
            class="col-6"
            label="Net Worth"
            value="$${this.netWorth || 0}"
            percentage=""
          ></wealth-stat-card>
          <wealth-stat-card
            class="col-6"
            label="Accumulated Savings"
            value="$${this.accumulatedSavings || 0}"
            percentage=""
          ></wealth-stat-card>
        </div>
      </div>
    `;
  }
}

customElements.define('wealth-stats-panel', WealthStatsPanel);
