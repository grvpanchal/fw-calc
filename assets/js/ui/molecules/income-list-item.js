import { LitElement, html } from 'lit-element';

class IncomeListItem extends LitElement {
  static get properties() {
    return {
      income: { type: Object },
    };
  }

  constructor() {
    super();
    this.income = {};
  }

  handleInput(e) {
    this.dispatchEvent(new CustomEvent('income-update', {
      detail: { income: this.income, value: e.target.value },
      bubbles: true,
      composed: true,
    }));
  }

  handleRemove() {
    this.dispatchEvent(new CustomEvent('income-remove', {
      detail: { id: this.income.id },
      bubbles: true,
      composed: true,
    }));
  }

  render() {
    return html`
      <link rel="stylesheet" href="https://unpkg.com/chota@latest">
      <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;">
        <div style="flex: 1;">
          <label for="income-${this.income.id}">${this.income.name}</label>
          <input 
            id="income-${this.income.id}" 
            type="text" 
            value="${this.income.amount}" 
            @input=${this.handleInput}
          >
          <small class="text-grey">${this.income.helperText}</small>
        </div>
        <button 
          class="button error" 
          @click=${this.handleRemove} 
          style="padding: 0.4rem 0.5rem;" 
          title="Remove"
        >
          <img src="https://icongr.am/feather/trash-2.svg?size=18&color=ffffff" alt="Remove" style="display: block;" />
        </button>
      </div>
    `;
  }
}

customElements.define('income-list-item', IncomeListItem);
