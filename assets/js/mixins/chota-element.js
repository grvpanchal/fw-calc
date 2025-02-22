import { LitElement } from 'lit-element';
import { ChotaMixin } from './chota-mixin.js';

export { html, css } from 'lit-element';

export class ChotaElement extends ChotaMixin(LitElement) { }
