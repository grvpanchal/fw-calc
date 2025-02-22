import StyleShelter from 'style-shelter';

export function ChotaMixin(constructor) {
  class SlotTextObservingElement extends constructor {
    constructor(...args) {
      super(...args);
      this.componentName = args && args[0];
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
