import { LitElement, html, css } from 'lit-element';
import './fw-logo.js';

class WealthDashboard extends LitElement {
  static get properties() {
    return {
      income: { type: Number },
      expense: { type: Number },
      liabilities: { type: Number },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  constructor() {
    super();
    this.income = 0;
    this.expense = 0;
    this.liabilities = 0;
  }

  render() {
    return html`
      <link rel="stylesheet" href="https://unpkg.com/chota@latest">
      <div>
        <fw-logo
          income="${this.income}"
          expense="${this.expense}"
          liabilities="${this.liabilities}"
          employee="1"
          investor="1"
          .highlights="${[]}"
        ></fw-logo>
      </div>
    `;
  }
}

customElements.define('wealth-dashboard', WealthDashboard);
