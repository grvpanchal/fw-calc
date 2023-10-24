import { ChotaElement, html } from 'chota-element';

class Tabs extends ChotaElement {
  static get properties() {
    return {
      tabs: { type: Array },
    };
  }

  constructor() {
    super();
  }

  render() {

    return html`
      <nav class="tabs is-full">
        ${(this.tabs || []).map((tab) => html`
        <a href="#${tab.id}" @click=${() => this.handleClick(tab.id)} class="${tab.isActive ? 'active' : ''}">${tab.label}</a>
        `)}
      </nav>
    `;
  }

  handleClick(id) {
    const event = new CustomEvent("tabSelect", {
      detail: {
        id: id,
      }
    });
    this.dispatchEvent(event);
  }
}

customElements.define('app-tabs', Tabs);