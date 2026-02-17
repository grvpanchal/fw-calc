import { LitElement, html } from 'lit-element';

class PassiveIncomeItem extends LitElement {
  static get properties() {
    return {
      asset: { type: Object },
      monthlyIncome: { type: Number },
    };
  }

  constructor() {
    super();
    this.asset = {};
    this.monthlyIncome = 0;
  }

  render() {
    return html`
      <link rel="stylesheet" href="https://unpkg.com/chota@latest">
      <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem; padding: 0.5rem; background: #e8f5e9; border-radius: 4px;">
        <div style="flex: 1;">
          <label style="color: #2e7d32; font-weight: 500;">${this.asset.name}</label>
          <small class="text-grey" style="display: block;">$${this.asset.amount} @ ${this.asset.rate}% annual</small>
        </div>
        <div style="text-align: right;">
          <input 
            type="text" 
            value="$${this.monthlyIncome}/mo" 
            disabled 
            style="background: transparent; border: none; color: #2e7d32; font-weight: bold; text-align: right; width: 100px;"
          >
        </div>
      </div>
    `;
  }
}

customElements.define('passive-income-item', PassiveIncomeItem);
