import { LitElement, html } from 'lit-element';

class WealthStatCard extends LitElement {
  static get properties() {
    return {
      label: { type: String },
      value: { type: String },
      percentage: { type: String },
      columns: { type: String },
    };
  }

  // Disable shadow DOM to allow Chota CSS grid to work properly
  createRenderRoot() {
    return this;
  }

  constructor() {
    super();
    this.label = '';
    this.value = '';
    this.percentage = '';
    this.columns = '6';
  }

  render() {
    return html`
      <small class="text-grey">${this.label}</small>
      <div>
        <strong>${this.value}</strong>
        ${this.percentage ? html` (${this.percentage}%)` : ''}
      </div>
    `;
  }
}

customElements.define('wealth-stat-card', WealthStatCard);
