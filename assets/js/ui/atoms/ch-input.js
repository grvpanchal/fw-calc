import { ChotaElement, html } from 'chota-element';

class Input extends ChotaElement {
  constructor() {
    super('input');
    this.color = 'primary';
  }

  static get properties() {
    return {
      type: String,
      variant: String,
      link: String,
      color: String,
      disabled: Boolean,
    };
  }
  render() {
    return html`
      <input type=${this.type} class="button ${this.variant} ${this.color}" ?disabled=${this.disabled} .value=${this.value}/>
    `;
  }
}

customElements.define("ch-input", Input);