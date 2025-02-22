import { ChotaElement, html } from 'chota-element';

class Button extends ChotaElement {
  constructor() {
    super('button');
    this.color = 'primary';
  }

  static get properties() {
    return {
      variant: String,
      link: String,
      color: String,
      disabled: Boolean,
    };
  }

  render() {
    return html`
      <button type="button" class="button ${this.variant} ${this.color}" ?disabled=${this.disabled}><slot></slot></button>
    `;
  }
}

customElements.define('ch-button', Button);
