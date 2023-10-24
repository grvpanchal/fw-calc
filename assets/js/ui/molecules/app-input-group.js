import { ChotaElement, html } from 'chota-element';

class InputEntry extends ChotaElement {
  static get properties() {
    return {
      label: { type: String },
      value: { type: String },
      helperText: { type: String },
      id: { type: String },
      loadId: { type: String },
    };
  }

  constructor() {
    super();
    this.loadId = this.id ? this.id : this.label || '' + Math.random();
  }

  render() {
    
    return html`
      <label for="${this.loadId}">${this.label}</label>
      <input id="${this.loadId}" .value="${this.value}" type="text">
      ${this.helperText ? html`<small class="text-grey">${helperText}</small>` : html``}
    `;
  }
}

customElements.define('app-input-entry', InputEntry);