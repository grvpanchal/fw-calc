import { LitElement, html } from 'lit-element';

class LiabilityCard extends LitElement {
  static get properties() {
    return {
      liability: { type: Object },
      disabled: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.liability = {};
    this.disabled = false;
  }

  handleUpdate(field, e) {
    this.dispatchEvent(new CustomEvent('liability-update', {
      detail: { liability: this.liability, field, value: e.target.value },
      bubbles: true,
      composed: true,
    }));
  }

  handleRemove() {
    this.dispatchEvent(new CustomEvent('liability-remove', {
      detail: { id: this.liability.id },
      bubbles: true,
      composed: true,
    }));
  }

  render() {
    const displayAmount = this.disabled && this.liability.remainingBalance !== undefined
      ? this.liability.remainingBalance
      : this.liability.amount;

    return html`
      <link rel="stylesheet" href="https://unpkg.com/chota@latest">
      <div style="border: 1px solid #ddd; padding: 1rem; margin-bottom: 1rem; border-radius: 4px;">
        <div style="display: flex; justify-content: space-between; align-items: center; gap: 0.5rem;">
          <div style="flex: 1; min-width: 0;">
            ${this.disabled ? html`<h5>${this.liability.name}</h5>` : html`
              <input
                type="text"
                .value="${this.liability.name || ''}"
                @input=${(e) => this.handleUpdate('name', e)}
                placeholder="Liability name"
                aria-label="Liability name"
                style="border: none; background: transparent; padding: 0; margin: 0; font-size: 1.5rem; font-weight: 600; width: 100%; outline: none;"
              >
            `}
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
          <div class="col-3">
            <label for="liability-${this.liability.id}-amount">${this.disabled ? 'Remaining' : 'Amount'}</label>
            <input 
              id="liability-${this.liability.id}-amount" 
              value="${displayAmount}" 
              type="text" 
              ?disabled=${this.disabled}
              @input=${(e) => this.handleUpdate('amount', e)}
            >
          </div>
          <div class="col-2">
            <label for="liability-${this.liability.id}-rate">Rate</label>
            <input 
              id="liability-${this.liability.id}-rate" 
              value="${this.liability.rate}" 
              type="text" 
              ?disabled=${this.disabled}
              @input=${(e) => this.handleUpdate('rate', e)}
            >
          </div>
          <div class="col-2">
            <label for="liability-${this.liability.id}-tenure">Tenure</label>
            <input 
              id="liability-${this.liability.id}-tenure" 
              value="${this.liability.tenure}" 
              type="text" 
              ?disabled=${this.disabled}
              @input=${(e) => this.handleUpdate('tenure', e)}
            >
          </div>
          <div class="col-5">
            <label for="liability-${this.liability.id}-start">Starts from</label>
            <input 
              id="liability-${this.liability.id}-start" 
              value="${this.liability.startDate}" 
              type="date" 
              ?disabled=${this.disabled}
              @input=${(e) => this.handleUpdate('startDate', e)}
            >
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('liability-card', LiabilityCard);
