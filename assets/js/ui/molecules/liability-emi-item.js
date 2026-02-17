import { LitElement, html } from 'lit-element';

class LiabilityEmiItem extends LitElement {
  static get properties() {
    return {
      liability: { type: Object },
      monthlyEMI: { type: Number },
    };
  }

  constructor() {
    super();
    this.liability = {};
    this.monthlyEMI = 0;
  }

  render() {
    return html`
      <link rel="stylesheet" href="https://unpkg.com/chota@latest">
      <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem; padding: 0.5rem; background: #ffebee; border-radius: 4px;">
        <div style="flex: 1;">
          <label style="color: #c62828; font-weight: 500;">${this.liability.name}</label>
          <small class="text-grey" style="display: block;">$${this.liability.amount} @ ${this.liability.rate}% for ${this.liability.tenure} months</small>
        </div>
        <div style="text-align: right;">
          <input 
            type="text" 
            value="$${this.monthlyEMI}/mo" 
            disabled 
            style="background: transparent; border: none; color: #c62828; font-weight: bold; text-align: right; width: 100px;"
          >
        </div>
      </div>
    `;
  }
}

customElements.define('liability-emi-item', LiabilityEmiItem);
