import { LitElement } from 'lit-element';
export * from 'lit-element';
import StyleShelter from 'style-shelter';

export function ChotaMixin(constructor) {
  class SlotTextObservingElement extends constructor {
    constructor() {
      super(...arguments);
      this.componentName = arguments && arguments[0];
    }

    connectedCallback() {
      super.connectedCallback();
      const styles = ['/assets/css/chota.css'];
      StyleShelter.adopt(styles, this.shadowRoot);
    }

    disconnectedCallback() {
      super.disconnectedCallback();
    }
  }
  return SlotTextObservingElement;
}
export class ChotaElement extends ChotaMixin(LitElement) { }