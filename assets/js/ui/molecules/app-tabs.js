import { LitElement, html } from 'lit-element';

class Tabs extends LitElement {
  static get properties() {
    return {
      tabs: { type: Array },
    };
  }

  render() {
    return html`
      <link rel="stylesheet" href="https://unpkg.com/chota@latest">
      <nav class="tabs is-full">
        ${(this.tabs || []).map((tab) => html`
        <a
          href="#${tab.id}"
          @click=${(e) => this.handleClick(e, tab.id)}
          class="${tab.isActive ? 'active' : ''}"
        >${tab.label}</a>
        `)}
      </nav>
    `;
  }

  handleClick(e, id) {
    e.preventDefault();
    this.dispatchEvent(new CustomEvent('tabSelect', {
      detail: { id },
    }));
  }
}

customElements.define('app-tabs', Tabs);
