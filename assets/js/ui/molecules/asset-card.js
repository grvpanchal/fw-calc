import { LitElement, html } from 'lit-element';

class AssetCard extends LitElement {
  static get properties() {
    return {
      asset: { type: Object },
      disabled: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.asset = {};
    this.disabled = false;
  }

  handleAmountUpdate(e) {
    this.dispatchEvent(new CustomEvent('asset-update', {
      detail: { asset: this.asset, field: 'amount', value: e.target.value },
      bubbles: true,
      composed: true,
    }));
  }

  handleRateUpdate(e) {
    this.dispatchEvent(new CustomEvent('asset-update', {
      detail: { asset: this.asset, field: 'rate', value: e.target.value },
      bubbles: true,
      composed: true,
    }));
  }

  handleRemove() {
    this.dispatchEvent(new CustomEvent('asset-remove', {
      detail: { id: this.asset.id },
      bubbles: true,
      composed: true,
    }));
  }

  render() {
    const isInvestment = this.asset.type === 'investment';
    return html`
      <link rel="stylesheet" href="https://unpkg.com/chota@latest">
      <div style="border: 1px solid ${isInvestment ? '#4CAF50' : '#ddd'}; padding: 1rem; margin-bottom: 1rem; border-radius: 4px; ${isInvestment ? 'background: #f1f8e9;' : ''}">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div>
            <h5>${this.asset.name}</h5>
            ${isInvestment ? html`<small style="color: #558b2f;">📊 Investment Portfolio</small>` : ''}
          </div>
          ${!this.disabled ? html`
            <button 
              class="button error" 
              @click=${this.handleRemove} 
              style="padding: 0.4rem 0.5rem;" 
              title="Remove"
            >
              <img src="https://icongr.am/feather/trash-2.svg?size=18&color=ffffff" alt="Remove" style="display: block;" />
            </button>
          ` : ''}
        </div>
        <hr />
        <div class="row">
          <div class="col-9">
            <label for="asset-${this.asset.id}-amount">Amount ${this.disabled ? '(Projected)' : ''}</label>
            <input 
              id="asset-${this.asset.id}-amount" 
              value="${this.asset.amount}" 
              type="text" 
              ?disabled=${this.disabled}
              @input=${this.handleAmountUpdate}
            >
          </div>
          <div class="col-3">
            <label for="asset-${this.asset.id}-rate">Interest Rate</label>
            <input 
              id="asset-${this.asset.id}-rate" 
              value="${this.asset.rate}" 
              type="text" 
              ?disabled=${this.disabled}
              @input=${this.handleRateUpdate}
            >
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('asset-card', AssetCard);
