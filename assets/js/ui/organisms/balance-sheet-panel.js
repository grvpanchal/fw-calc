import { LitElement, html } from 'lit-element';
import '../molecules/asset-card.js';
import '../molecules/liability-card.js';

class BalanceSheetPanel extends LitElement {
  static get properties() {
    return {
      assets: { type: Array },
      liabilities: { type: Array },
      dateIndex: { type: Number },
      wealthSnapshot: { type: Object },
    };
  }

  constructor() {
    super();
    this.assets = [];
    this.liabilities = [];
    this.dateIndex = 0;
    this.wealthSnapshot = {};
  }

  handleAssetUpdate(e) {
    this.dispatchEvent(new CustomEvent('asset-update', {
      detail: e.detail,
      bubbles: true,
      composed: true,
    }));
  }

  handleAssetRemove(e) {
    this.dispatchEvent(new CustomEvent('asset-remove', {
      detail: e.detail,
      bubbles: true,
      composed: true,
    }));
  }

  handleLiabilityUpdate(e) {
    this.dispatchEvent(new CustomEvent('liability-update', {
      detail: e.detail,
      bubbles: true,
      composed: true,
    }));
  }

  handleLiabilityRemove(e) {
    this.dispatchEvent(new CustomEvent('liability-remove', {
      detail: e.detail,
      bubbles: true,
      composed: true,
    }));
  }

  handleAddAsset() {
    this.dispatchEvent(new CustomEvent('add-asset', {
      bubbles: true,
      composed: true,
    }));
  }

  handleAddLiability() {
    this.dispatchEvent(new CustomEvent('add-liability', {
      bubbles: true,
      composed: true,
    }));
  }

  render() {
    const isProjection = this.dateIndex > 0;
    const displayAssets = isProjection && this.wealthSnapshot.projectedAssets
      ? this.wealthSnapshot.projectedAssets
      : this.assets;
    const displayLiabilities = isProjection && this.wealthSnapshot.projectedLiabilities
      ? this.wealthSnapshot.projectedLiabilities
      : this.liabilities;

    return html`
      <link rel="stylesheet" href="https://unpkg.com/chota@latest">
      ${isProjection ? html`
        <div style="background: #fff3cd; border: 1px solid #ffc107; padding: 0.75rem; border-radius: 4px; margin-bottom: 1rem;">
          <strong>📊 Future Projection View</strong>
          <p style="margin: 0.25rem 0 0 0; font-size: 0.9rem;">Showing projected values. Move slider to current date to edit.</p>
        </div>
      ` : ''}
      <div class="row">
        <div class="col-6">
          <fieldset>
            <legend>Assets ${isProjection ? '(Projected Values)' : ''}</legend>
            ${displayAssets && displayAssets.length ? displayAssets.map((asset) => html`
              <asset-card
                .asset=${asset}
                .disabled=${isProjection}
                @asset-update=${this.handleAssetUpdate}
                @asset-remove=${this.handleAssetRemove}
              ></asset-card>
            `) : html`<p class="text-grey">No assets added yet</p>`}
            ${!isProjection ? html`
              <button class="button primary" @click=${this.handleAddAsset}>+ Add Asset</button>
            ` : ''}
          </fieldset>
        </div>
        <div class="col-6">
          <fieldset>
            <legend>Liabilities ${isProjection ? '(Projected Balances)' : ''}</legend>
            ${displayLiabilities && displayLiabilities.length ? displayLiabilities.map((liability) => html`
              <liability-card
                .liability=${liability}
                .disabled=${isProjection}
                @liability-update=${this.handleLiabilityUpdate}
                @liability-remove=${this.handleLiabilityRemove}
              ></liability-card>
            `) : html`<p class="text-grey">${isProjection ? 'All liabilities paid off!' : 'No liabilities added yet'}</p>`}
            ${!isProjection ? html`
              <button class="button primary" @click=${this.handleAddLiability}>+ Add Liability</button>
            ` : ''}
          </fieldset>
        </div>
      </div>
    `;
  }
}

customElements.define('balance-sheet-panel', BalanceSheetPanel);
