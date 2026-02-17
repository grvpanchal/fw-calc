import { LitElement, html } from 'lit-element';

class ExpenseListItem extends LitElement {
  static get properties() {
    return {
      expense: { type: Object },
    };
  }

  constructor() {
    super();
    this.expense = {};
  }

  handleInput(e) {
    this.dispatchEvent(new CustomEvent('expense-update', {
      detail: { expense: this.expense, value: e.target.value },
      bubbles: true,
      composed: true,
    }));
  }

  handleRemove() {
    this.dispatchEvent(new CustomEvent('expense-remove', {
      detail: { id: this.expense.id },
      bubbles: true,
      composed: true,
    }));
  }

  render() {
    return html`
      <link rel="stylesheet" href="https://unpkg.com/chota@latest">
      <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;">
        <div style="flex: 1;">
          <label for="expense-${this.expense.id}">${this.expense.name}</label>
          <input 
            id="expense-${this.expense.id}" 
            type="text" 
            value="${this.expense.amount}" 
            @input=${this.handleInput}
          >
          <small class="text-grey">${this.expense.helperText}</small>
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

customElements.define('expense-list-item', ExpenseListItem);
