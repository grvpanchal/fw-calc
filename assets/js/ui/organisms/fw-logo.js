import { html, css, LitElement } from 'lit-element';

export class FwLogo extends LitElement {
  static get styles() {
    return css`
      :host * {
        box-sizing: content-box;
        transition: 1s 2s;
      }

      :host * {
        border-radius: 12px;
      }
      :host *:not(.financial-stage):after {
        border-top-left-radius: 12px;
        border-bottom-right-radius: 12px;
      }

      :host {
        font-family: sans-serif;
        transition: 0.35s;
      }

      .fw-wrapper {
        width: 600px;
        height: 600px;
        position: relative;
        zoom: 1;
      }

      .fw-wrapper .absolute-center {
        margin: auto;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
      }

      .quadrant {
        width: calc(50% - 50px);
        height: calc(50% - 50px);
        position: absolute;
      }

      .cash-flow {
        height: 75px;
        width: 75px;
        border: 6px solid #fff;
        border-radius: 50%;
        background-color: #444;
      }

      [class*='employee'] {
        border: 20px solid #000;
        bottom: -20px;
        right: -20px;
      }

      [class*='lancer'] {
        border: 20px solid #000;
        bottom: -20px;
        left: -20px;
      }

      [class*='business'] {
        border: 20px solid #000;
        top: -20px;
        right: -20px;
      }

      [class*='investor'] {
        border: 20px solid #000;
        top: -20px;
        left: -20px;
      }

      .cf-quadrant,
      .financial-stage {
        height: 520px;
        width: 520px;
      }

      .financial-stage {
        border: 20px solid #000;
        background-color: #fff;
      }

      .resolution .financial-stage,
      .resolution .quadrant {
        border-color: #000;
      }

      .security .financial-stage,
      .security .quadrant {
        border-color: navy;
      }

      .vitality .financial-stage,
      .vitality .quadrant {
        border-color: deepskyblue;
      }

      .independence .financial-stage,
      .independence .quadrant {
        border-color: lightseagreen;
      }

      .freedom .financial-stage,
      .freedom .quadrant {
        border-color: mediumseagreen;
      }

      .absolute .financial-stage,
      .absolute .quadrant {
        border-color: seagreen;
      }

      .financial-stage:after {
        content: '';
        display: block;
        position: absolute;
        width: 75px;
        height: 520px;
        top: -30px;
        left: calc(50% - 43.5px);
        border-top: 30px solid white;
        border-bottom: 30px solid white;
        border-left: 6px solid white;
        border-right: 6px solid white;
      }

      .financial-stage:before {
        content: '';
        display: block;
        position: absolute;
        width: 520px;
        height: 75px;
        top: calc(50% - 43.5px);
        left: -30px;
        border-top: 6px solid white;
        border-bottom: 6px solid white;
        border-left: 30px solid white;
        border-right: 30px solid white;
      }

      .iga {
        width: 500px;
        height: 500px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .iga::before,
      .iga::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .iga::before {
        border-width: 250px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .iga::after {
        border-width: 247px;
        border-top-color: #777;
        border-left-color: #777;
      }

      .active-income {
        width: 250px;
        height: 250px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income::before,
      .active-income::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income::before {
        border-width: 125px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income::after {
        border-width: 122px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense {
        width: 125px;
        height: 125px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense::before,
      .expense::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense::before {
        border-width: 62.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense::after {
        border-width: 59.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .savings {
        width: 500px;
        height: 500px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .savings::before,
      .savings::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .savings::before {
        border-width: 250px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .savings::after {
        border-width: 247px;
        border-bottom-color: #555;
        border-right-color: #555;
      }

      .liabilities {
        width: 225px;
        height: 225px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities::before,
      .liabilities::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities::before {
        border-width: 112.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities::after {
        border-width: 109.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .text {
        text-transform: uppercase;
        font-size: 10px;
        color: white;
      }

      .cash-flow .text {
        text-align: center;
        padding-top: 32px;
      }

      .cash-item .text {
        text-align: left;
        position: relative;
        display: inline-block;
        z-index: 10;
      }

      .iga .text {
        transform: rotate(-90deg);
        left: -36px;
        top: 38px;
      }

      [class*='active-income'] .text {
        transform: rotate(-90deg);
        left: -32px;
        top: 33px;
      }

      [class*='expense'] .text {
        transform: rotate(90deg);
        left: calc(100% - 34px);
        top: calc(100% - 42px);
      }

      [class*='liabilities'] .text {
        transform: rotate(90deg);
        left: calc(100% - 54px);
        top: calc(100% - 60px);
      }

      .savings .text {
        transform: rotate(90deg);
        left: calc(100% - 28px);
        top: calc(100% - 38px);
      }

      .active-income-1px {
        width: 5px;
        height: 5px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-1px::before,
      .active-income-1px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-1px::before {
        border-width: 2.5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-1px::after {
        border-width: -0.5px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-1px {
        width: 5px;
        height: 5px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-1px::before,
      .expense-1px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-1px::before {
        border-width: 2.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-1px::after {
        border-width: 2.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-1px {
        width: 5px;
        height: 5px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-1px::before,
      .liabilities-1px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-1px::before {
        border-width: 2.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-1px::after {
        border-width: -0.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-2px {
        width: 10px;
        height: 10px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-2px::before,
      .active-income-2px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-2px::before {
        border-width: 5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-2px::after {
        border-width: 2px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-2px {
        width: 10px;
        height: 10px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-2px::before,
      .expense-2px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-2px::before {
        border-width: 5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-2px::after {
        border-width: 2px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-2px {
        width: 10px;
        height: 10px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-2px::before,
      .liabilities-2px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-2px::before {
        border-width: 5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-2px::after {
        border-width: 2px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-3px {
        width: 15px;
        height: 15px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-3px::before,
      .active-income-3px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-3px::before {
        border-width: 7.5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-3px::after {
        border-width: 4.5px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-3px {
        width: 15px;
        height: 15px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-3px::before,
      .expense-3px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-3px::before {
        border-width: 7.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-3px::after {
        border-width: 4.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-3px {
        width: 15px;
        height: 15px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-3px::before,
      .liabilities-3px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-3px::before {
        border-width: 7.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-3px::after {
        border-width: 4.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-4px {
        width: 20px;
        height: 20px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-4px::before,
      .active-income-4px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-4px::before {
        border-width: 10px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-4px::after {
        border-width: 7px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-4px {
        width: 20px;
        height: 20px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-4px::before,
      .expense-4px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-4px::before {
        border-width: 10px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-4px::after {
        border-width: 7px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-4px {
        width: 20px;
        height: 20px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-4px::before,
      .liabilities-4px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-4px::before {
        border-width: 10px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-4px::after {
        border-width: 7px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-5px {
        width: 25px;
        height: 25px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-5px::before,
      .active-income-5px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-5px::before {
        border-width: 12.5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-5px::after {
        border-width: 9.5px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-5px {
        width: 25px;
        height: 25px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-5px::before,
      .expense-5px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-5px::before {
        border-width: 12.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-5px::after {
        border-width: 9.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-5px {
        width: 25px;
        height: 25px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-5px::before,
      .liabilities-5px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-5px::before {
        border-width: 12.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-5px::after {
        border-width: 9.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-6px {
        width: 30px;
        height: 30px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-6px::before,
      .active-income-6px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-6px::before {
        border-width: 15px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-6px::after {
        border-width: 12px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-6px {
        width: 30px;
        height: 30px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-6px::before,
      .expense-6px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-6px::before {
        border-width: 15px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-6px::after {
        border-width: 12px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-6px {
        width: 30px;
        height: 30px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-6px::before,
      .liabilities-6px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-6px::before {
        border-width: 15px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-6px::after {
        border-width: 12px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-7px {
        width: 35px;
        height: 35px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-7px::before,
      .active-income-7px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-7px::before {
        border-width: 17.5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-7px::after {
        border-width: 14.5px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-7px {
        width: 35px;
        height: 35px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-7px::before,
      .expense-7px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-7px::before {
        border-width: 17.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-7px::after {
        border-width: 14.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-7px {
        width: 35px;
        height: 35px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-7px::before,
      .liabilities-7px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-7px::before {
        border-width: 17.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-7px::after {
        border-width: 14.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-8px {
        width: 40px;
        height: 40px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-8px::before,
      .active-income-8px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-8px::before {
        border-width: 20px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-8px::after {
        border-width: 17px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-8px {
        width: 40px;
        height: 40px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-8px::before,
      .expense-8px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-8px::before {
        border-width: 20px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-8px::after {
        border-width: 17px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-8px {
        width: 40px;
        height: 40px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-8px::before,
      .liabilities-8px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-8px::before {
        border-width: 20px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-8px::after {
        border-width: 17px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-9px {
        width: 45px;
        height: 45px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-9px::before,
      .active-income-9px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-9px::before {
        border-width: 22.5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-9px::after {
        border-width: 19.5px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-9px {
        width: 45px;
        height: 45px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-9px::before,
      .expense-9px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-9px::before {
        border-width: 22.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-9px::after {
        border-width: 19.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-9px {
        width: 45px;
        height: 45px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-9px::before,
      .liabilities-9px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-9px::before {
        border-width: 22.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-9px::after {
        border-width: 19.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-10px {
        width: 50px;
        height: 50px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-10px::before,
      .active-income-10px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-10px::before {
        border-width: 25px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-10px::after {
        border-width: 22px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-10px {
        width: 50px;
        height: 50px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-10px::before,
      .expense-10px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-10px::before {
        border-width: 25px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-10px::after {
        border-width: 22px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-10px {
        width: 50px;
        height: 50px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-10px::before,
      .liabilities-10px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-10px::before {
        border-width: 25px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-10px::after {
        border-width: 22px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-11px {
        width: 55px;
        height: 55px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-11px::before,
      .active-income-11px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-11px::before {
        border-width: 27.5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-11px::after {
        border-width: 24.5px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-11px {
        width: 55px;
        height: 55px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-11px::before,
      .expense-11px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-11px::before {
        border-width: 27.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-11px::after {
        border-width: 24.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-11px {
        width: 55px;
        height: 55px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-11px::before,
      .liabilities-11px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-11px::before {
        border-width: 27.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-11px::after {
        border-width: 24.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-12px {
        width: 60px;
        height: 60px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-12px::before,
      .active-income-12px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-12px::before {
        border-width: 30px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-12px::after {
        border-width: 27px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-12px {
        width: 60px;
        height: 60px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-12px::before,
      .expense-12px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-12px::before {
        border-width: 30px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-12px::after {
        border-width: 27px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-12px {
        width: 60px;
        height: 60px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-12px::before,
      .liabilities-12px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-12px::before {
        border-width: 30px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-12px::after {
        border-width: 27px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-13px {
        width: 65px;
        height: 65px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-13px::before,
      .active-income-13px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-13px::before {
        border-width: 32.5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-13px::after {
        border-width: 29.5px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-13px {
        width: 65px;
        height: 65px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-13px::before,
      .expense-13px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-13px::before {
        border-width: 32.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-13px::after {
        border-width: 29.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-13px {
        width: 65px;
        height: 65px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-13px::before,
      .liabilities-13px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-13px::before {
        border-width: 32.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-13px::after {
        border-width: 29.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-14px {
        width: 70px;
        height: 70px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-14px::before,
      .active-income-14px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-14px::before {
        border-width: 35px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-14px::after {
        border-width: 32px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-14px {
        width: 70px;
        height: 70px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-14px::before,
      .expense-14px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-14px::before {
        border-width: 35px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-14px::after {
        border-width: 32px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-14px {
        width: 70px;
        height: 70px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-14px::before,
      .liabilities-14px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-14px::before {
        border-width: 35px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-14px::after {
        border-width: 32px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-15px {
        width: 75px;
        height: 75px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-15px::before,
      .active-income-15px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-15px::before {
        border-width: 37.5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-15px::after {
        border-width: 34.5px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-15px {
        width: 75px;
        height: 75px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-15px::before,
      .expense-15px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-15px::before {
        border-width: 37.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-15px::after {
        border-width: 34.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-15px {
        width: 75px;
        height: 75px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-15px::before,
      .liabilities-15px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-15px::before {
        border-width: 37.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-15px::after {
        border-width: 34.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-16px {
        width: 80px;
        height: 80px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-16px::before,
      .active-income-16px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-16px::before {
        border-width: 40px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-16px::after {
        border-width: 37px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-16px {
        width: 80px;
        height: 80px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-16px::before,
      .expense-16px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-16px::before {
        border-width: 40px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-16px::after {
        border-width: 37px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-16px {
        width: 80px;
        height: 80px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-16px::before,
      .liabilities-16px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-16px::before {
        border-width: 40px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-16px::after {
        border-width: 37px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-17px {
        width: 85px;
        height: 85px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-17px::before,
      .active-income-17px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-17px::before {
        border-width: 42.5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-17px::after {
        border-width: 39.5px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-17px {
        width: 85px;
        height: 85px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-17px::before,
      .expense-17px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-17px::before {
        border-width: 42.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-17px::after {
        border-width: 39.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-17px {
        width: 85px;
        height: 85px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-17px::before,
      .liabilities-17px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-17px::before {
        border-width: 42.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-17px::after {
        border-width: 39.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-18px {
        width: 90px;
        height: 90px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-18px::before,
      .active-income-18px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-18px::before {
        border-width: 45px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-18px::after {
        border-width: 42px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-18px {
        width: 90px;
        height: 90px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-18px::before,
      .expense-18px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-18px::before {
        border-width: 45px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-18px::after {
        border-width: 42px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-18px {
        width: 90px;
        height: 90px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-18px::before,
      .liabilities-18px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-18px::before {
        border-width: 45px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-18px::after {
        border-width: 42px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-19px {
        width: 95px;
        height: 95px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-19px::before,
      .active-income-19px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-19px::before {
        border-width: 47.5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-19px::after {
        border-width: 44.5px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-19px {
        width: 95px;
        height: 95px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-19px::before,
      .expense-19px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-19px::before {
        border-width: 47.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-19px::after {
        border-width: 44.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-19px {
        width: 95px;
        height: 95px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-19px::before,
      .liabilities-19px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-19px::before {
        border-width: 47.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-19px::after {
        border-width: 44.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-20px {
        width: 100px;
        height: 100px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-20px::before,
      .active-income-20px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-20px::before {
        border-width: 50px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-20px::after {
        border-width: 47px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-20px {
        width: 100px;
        height: 100px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-20px::before,
      .expense-20px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-20px::before {
        border-width: 50px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-20px::after {
        border-width: 47px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-20px {
        width: 100px;
        height: 100px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-20px::before,
      .liabilities-20px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-20px::before {
        border-width: 50px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-20px::after {
        border-width: 47px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-21px {
        width: 105px;
        height: 105px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-21px::before,
      .active-income-21px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-21px::before {
        border-width: 52.5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-21px::after {
        border-width: 49.5px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-21px {
        width: 105px;
        height: 105px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-21px::before,
      .expense-21px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-21px::before {
        border-width: 52.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-21px::after {
        border-width: 49.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-21px {
        width: 105px;
        height: 105px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-21px::before,
      .liabilities-21px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-21px::before {
        border-width: 52.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-21px::after {
        border-width: 49.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-22px {
        width: 110px;
        height: 110px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-22px::before,
      .active-income-22px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-22px::before {
        border-width: 55px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-22px::after {
        border-width: 52px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-22px {
        width: 110px;
        height: 110px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-22px::before,
      .expense-22px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-22px::before {
        border-width: 55px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-22px::after {
        border-width: 52px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-22px {
        width: 110px;
        height: 110px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-22px::before,
      .liabilities-22px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-22px::before {
        border-width: 55px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-22px::after {
        border-width: 52px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-23px {
        width: 115px;
        height: 115px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-23px::before,
      .active-income-23px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-23px::before {
        border-width: 57.5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-23px::after {
        border-width: 54.5px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-23px {
        width: 115px;
        height: 115px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-23px::before,
      .expense-23px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-23px::before {
        border-width: 57.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-23px::after {
        border-width: 54.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-23px {
        width: 115px;
        height: 115px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-23px::before,
      .liabilities-23px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-23px::before {
        border-width: 57.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-23px::after {
        border-width: 54.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-24px {
        width: 120px;
        height: 120px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-24px::before,
      .active-income-24px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-24px::before {
        border-width: 60px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-24px::after {
        border-width: 57px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-24px {
        width: 120px;
        height: 120px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-24px::before,
      .expense-24px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-24px::before {
        border-width: 60px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-24px::after {
        border-width: 57px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-24px {
        width: 120px;
        height: 120px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-24px::before,
      .liabilities-24px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-24px::before {
        border-width: 60px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-24px::after {
        border-width: 57px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-25px {
        width: 125px;
        height: 125px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-25px::before,
      .active-income-25px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-25px::before {
        border-width: 62.5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-25px::after {
        border-width: 59.5px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-25px {
        width: 125px;
        height: 125px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-25px::before,
      .expense-25px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-25px::before {
        border-width: 62.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-25px::after {
        border-width: 59.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-25px {
        width: 125px;
        height: 125px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-25px::before,
      .liabilities-25px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-25px::before {
        border-width: 62.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-25px::after {
        border-width: 59.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-26px {
        width: 130px;
        height: 130px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-26px::before,
      .active-income-26px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-26px::before {
        border-width: 65px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-26px::after {
        border-width: 62px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-26px {
        width: 130px;
        height: 130px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-26px::before,
      .expense-26px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-26px::before {
        border-width: 65px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-26px::after {
        border-width: 62px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-26px {
        width: 130px;
        height: 130px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-26px::before,
      .liabilities-26px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-26px::before {
        border-width: 65px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-26px::after {
        border-width: 62px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-27px {
        width: 135px;
        height: 135px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-27px::before,
      .active-income-27px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-27px::before {
        border-width: 67.5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-27px::after {
        border-width: 64.5px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-27px {
        width: 135px;
        height: 135px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-27px::before,
      .expense-27px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-27px::before {
        border-width: 67.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-27px::after {
        border-width: 64.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-27px {
        width: 135px;
        height: 135px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-27px::before,
      .liabilities-27px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-27px::before {
        border-width: 67.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-27px::after {
        border-width: 64.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-28px {
        width: 140px;
        height: 140px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-28px::before,
      .active-income-28px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-28px::before {
        border-width: 70px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-28px::after {
        border-width: 67px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-28px {
        width: 140px;
        height: 140px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-28px::before,
      .expense-28px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-28px::before {
        border-width: 70px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-28px::after {
        border-width: 67px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-28px {
        width: 140px;
        height: 140px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-28px::before,
      .liabilities-28px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-28px::before {
        border-width: 70px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-28px::after {
        border-width: 67px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-29px {
        width: 145px;
        height: 145px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-29px::before,
      .active-income-29px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-29px::before {
        border-width: 72.5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-29px::after {
        border-width: 69.5px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-29px {
        width: 145px;
        height: 145px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-29px::before,
      .expense-29px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-29px::before {
        border-width: 72.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-29px::after {
        border-width: 69.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-29px {
        width: 145px;
        height: 145px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-29px::before,
      .liabilities-29px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-29px::before {
        border-width: 72.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-29px::after {
        border-width: 69.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-30px {
        width: 150px;
        height: 150px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-30px::before,
      .active-income-30px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-30px::before {
        border-width: 75px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-30px::after {
        border-width: 72px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-30px {
        width: 150px;
        height: 150px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-30px::before,
      .expense-30px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-30px::before {
        border-width: 75px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-30px::after {
        border-width: 72px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-30px {
        width: 150px;
        height: 150px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-30px::before,
      .liabilities-30px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-30px::before {
        border-width: 75px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-30px::after {
        border-width: 72px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-31px {
        width: 155px;
        height: 155px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-31px::before,
      .active-income-31px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-31px::before {
        border-width: 77.5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-31px::after {
        border-width: 74.5px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-31px {
        width: 155px;
        height: 155px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-31px::before,
      .expense-31px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-31px::before {
        border-width: 77.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-31px::after {
        border-width: 74.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-31px {
        width: 155px;
        height: 155px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-31px::before,
      .liabilities-31px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-31px::before {
        border-width: 77.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-31px::after {
        border-width: 74.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-32px {
        width: 160px;
        height: 160px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-32px::before,
      .active-income-32px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-32px::before {
        border-width: 80px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-32px::after {
        border-width: 77px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-32px {
        width: 160px;
        height: 160px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-32px::before,
      .expense-32px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-32px::before {
        border-width: 80px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-32px::after {
        border-width: 77px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-32px {
        width: 160px;
        height: 160px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-32px::before,
      .liabilities-32px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-32px::before {
        border-width: 80px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-32px::after {
        border-width: 77px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-33px {
        width: 165px;
        height: 165px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-33px::before,
      .active-income-33px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-33px::before {
        border-width: 82.5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-33px::after {
        border-width: 79.5px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-33px {
        width: 165px;
        height: 165px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-33px::before,
      .expense-33px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-33px::before {
        border-width: 82.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-33px::after {
        border-width: 79.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-33px {
        width: 165px;
        height: 165px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-33px::before,
      .liabilities-33px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-33px::before {
        border-width: 82.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-33px::after {
        border-width: 79.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-34px {
        width: 170px;
        height: 170px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-34px::before,
      .active-income-34px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-34px::before {
        border-width: 85px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-34px::after {
        border-width: 82px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-34px {
        width: 170px;
        height: 170px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-34px::before,
      .expense-34px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-34px::before {
        border-width: 85px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-34px::after {
        border-width: 82px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-34px {
        width: 170px;
        height: 170px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-34px::before,
      .liabilities-34px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-34px::before {
        border-width: 85px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-34px::after {
        border-width: 82px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-35px {
        width: 175px;
        height: 175px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-35px::before,
      .active-income-35px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-35px::before {
        border-width: 87.5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-35px::after {
        border-width: 84.5px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-35px {
        width: 175px;
        height: 175px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-35px::before,
      .expense-35px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-35px::before {
        border-width: 87.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-35px::after {
        border-width: 84.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-35px {
        width: 175px;
        height: 175px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-35px::before,
      .liabilities-35px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-35px::before {
        border-width: 87.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-35px::after {
        border-width: 84.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-36px {
        width: 180px;
        height: 180px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-36px::before,
      .active-income-36px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-36px::before {
        border-width: 90px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-36px::after {
        border-width: 87px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-36px {
        width: 180px;
        height: 180px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-36px::before,
      .expense-36px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-36px::before {
        border-width: 90px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-36px::after {
        border-width: 87px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-36px {
        width: 180px;
        height: 180px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-36px::before,
      .liabilities-36px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-36px::before {
        border-width: 90px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-36px::after {
        border-width: 87px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-37px {
        width: 185px;
        height: 185px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-37px::before,
      .active-income-37px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-37px::before {
        border-width: 92.5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-37px::after {
        border-width: 89.5px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-37px {
        width: 185px;
        height: 185px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-37px::before,
      .expense-37px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-37px::before {
        border-width: 92.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-37px::after {
        border-width: 89.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-37px {
        width: 185px;
        height: 185px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-37px::before,
      .liabilities-37px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-37px::before {
        border-width: 92.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-37px::after {
        border-width: 89.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-38px {
        width: 190px;
        height: 190px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-38px::before,
      .active-income-38px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-38px::before {
        border-width: 95px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-38px::after {
        border-width: 92px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-38px {
        width: 190px;
        height: 190px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-38px::before,
      .expense-38px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-38px::before {
        border-width: 95px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-38px::after {
        border-width: 92px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-38px {
        width: 190px;
        height: 190px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-38px::before,
      .liabilities-38px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-38px::before {
        border-width: 95px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-38px::after {
        border-width: 92px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-39px {
        width: 195px;
        height: 195px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-39px::before,
      .active-income-39px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-39px::before {
        border-width: 97.5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-39px::after {
        border-width: 94.5px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-39px {
        width: 195px;
        height: 195px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-39px::before,
      .expense-39px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-39px::before {
        border-width: 97.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-39px::after {
        border-width: 94.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-39px {
        width: 195px;
        height: 195px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-39px::before,
      .liabilities-39px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-39px::before {
        border-width: 97.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-39px::after {
        border-width: 94.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-40px {
        width: 200px;
        height: 200px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-40px::before,
      .active-income-40px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-40px::before {
        border-width: 100px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-40px::after {
        border-width: 97px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-40px {
        width: 200px;
        height: 200px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-40px::before,
      .expense-40px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-40px::before {
        border-width: 100px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-40px::after {
        border-width: 97px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-40px {
        width: 200px;
        height: 200px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-40px::before,
      .liabilities-40px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-40px::before {
        border-width: 100px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-40px::after {
        border-width: 97px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-41px {
        width: 205px;
        height: 205px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-41px::before,
      .active-income-41px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-41px::before {
        border-width: 102.5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-41px::after {
        border-width: 99.5px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-41px {
        width: 205px;
        height: 205px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-41px::before,
      .expense-41px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-41px::before {
        border-width: 102.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-41px::after {
        border-width: 99.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-41px {
        width: 205px;
        height: 205px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-41px::before,
      .liabilities-41px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-41px::before {
        border-width: 102.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-41px::after {
        border-width: 99.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-42px {
        width: 210px;
        height: 210px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-42px::before,
      .active-income-42px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-42px::before {
        border-width: 105px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-42px::after {
        border-width: 102px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-42px {
        width: 210px;
        height: 210px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-42px::before,
      .expense-42px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-42px::before {
        border-width: 105px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-42px::after {
        border-width: 102px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-42px {
        width: 210px;
        height: 210px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-42px::before,
      .liabilities-42px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-42px::before {
        border-width: 105px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-42px::after {
        border-width: 102px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-43px {
        width: 215px;
        height: 215px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-43px::before,
      .active-income-43px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-43px::before {
        border-width: 107.5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-43px::after {
        border-width: 104.5px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-43px {
        width: 215px;
        height: 215px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-43px::before,
      .expense-43px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-43px::before {
        border-width: 107.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-43px::after {
        border-width: 104.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-43px {
        width: 215px;
        height: 215px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-43px::before,
      .liabilities-43px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-43px::before {
        border-width: 107.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-43px::after {
        border-width: 104.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-44px {
        width: 220px;
        height: 220px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-44px::before,
      .active-income-44px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-44px::before {
        border-width: 110px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-44px::after {
        border-width: 107px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-44px {
        width: 220px;
        height: 220px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-44px::before,
      .expense-44px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-44px::before {
        border-width: 110px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-44px::after {
        border-width: 107px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-44px {
        width: 220px;
        height: 220px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-44px::before,
      .liabilities-44px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-44px::before {
        border-width: 110px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-44px::after {
        border-width: 107px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-45px {
        width: 225px;
        height: 225px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-45px::before,
      .active-income-45px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-45px::before {
        border-width: 112.5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-45px::after {
        border-width: 109.5px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-45px {
        width: 225px;
        height: 225px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-45px::before,
      .expense-45px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-45px::before {
        border-width: 112.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-45px::after {
        border-width: 109.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-45px {
        width: 225px;
        height: 225px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-45px::before,
      .liabilities-45px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-45px::before {
        border-width: 112.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-45px::after {
        border-width: 109.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-46px {
        width: 230px;
        height: 230px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-46px::before,
      .active-income-46px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-46px::before {
        border-width: 115px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-46px::after {
        border-width: 112px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-46px {
        width: 230px;
        height: 230px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-46px::before,
      .expense-46px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-46px::before {
        border-width: 115px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-46px::after {
        border-width: 112px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-46px {
        width: 230px;
        height: 230px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-46px::before,
      .liabilities-46px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-46px::before {
        border-width: 115px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-46px::after {
        border-width: 112px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-47px {
        width: 235px;
        height: 235px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-47px::before,
      .active-income-47px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-47px::before {
        border-width: 117.5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-47px::after {
        border-width: 114.5px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-47px {
        width: 235px;
        height: 235px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-47px::before,
      .expense-47px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-47px::before {
        border-width: 117.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-47px::after {
        border-width: 114.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-47px {
        width: 235px;
        height: 235px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-47px::before,
      .liabilities-47px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-47px::before {
        border-width: 117.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-47px::after {
        border-width: 114.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-48px {
        width: 240px;
        height: 240px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-48px::before,
      .active-income-48px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-48px::before {
        border-width: 120px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-48px::after {
        border-width: 117px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-48px {
        width: 240px;
        height: 240px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-48px::before,
      .expense-48px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-48px::before {
        border-width: 120px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-48px::after {
        border-width: 117px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-48px {
        width: 240px;
        height: 240px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-48px::before,
      .liabilities-48px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-48px::before {
        border-width: 120px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-48px::after {
        border-width: 117px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-49px {
        width: 245px;
        height: 245px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-49px::before,
      .active-income-49px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-49px::before {
        border-width: 122.5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-49px::after {
        border-width: 119.5px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-49px {
        width: 245px;
        height: 245px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-49px::before,
      .expense-49px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-49px::before {
        border-width: 122.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-49px::after {
        border-width: 119.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-49px {
        width: 245px;
        height: 245px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-49px::before,
      .liabilities-49px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-49px::before {
        border-width: 122.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-49px::after {
        border-width: 119.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-50px {
        width: 250px;
        height: 250px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-50px::before,
      .active-income-50px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-50px::before {
        border-width: 125px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-50px::after {
        border-width: 122px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-50px {
        width: 250px;
        height: 250px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-50px::before,
      .expense-50px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-50px::before {
        border-width: 125px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-50px::after {
        border-width: 122px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-50px {
        width: 250px;
        height: 250px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-50px::before,
      .liabilities-50px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-50px::before {
        border-width: 125px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-50px::after {
        border-width: 122px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-51px {
        width: 255px;
        height: 255px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-51px::before,
      .active-income-51px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-51px::before {
        border-width: 127.5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-51px::after {
        border-width: 124.5px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-51px {
        width: 255px;
        height: 255px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-51px::before,
      .expense-51px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-51px::before {
        border-width: 127.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-51px::after {
        border-width: 124.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-51px {
        width: 255px;
        height: 255px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-51px::before,
      .liabilities-51px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-51px::before {
        border-width: 127.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-51px::after {
        border-width: 124.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-52px {
        width: 260px;
        height: 260px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-52px::before,
      .active-income-52px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-52px::before {
        border-width: 130px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-52px::after {
        border-width: 127px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-52px {
        width: 260px;
        height: 260px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-52px::before,
      .expense-52px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-52px::before {
        border-width: 130px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-52px::after {
        border-width: 127px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-52px {
        width: 260px;
        height: 260px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-52px::before,
      .liabilities-52px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-52px::before {
        border-width: 130px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-52px::after {
        border-width: 127px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-53px {
        width: 265px;
        height: 265px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-53px::before,
      .active-income-53px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-53px::before {
        border-width: 132.5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-53px::after {
        border-width: 129.5px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-53px {
        width: 265px;
        height: 265px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-53px::before,
      .expense-53px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-53px::before {
        border-width: 132.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-53px::after {
        border-width: 129.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-53px {
        width: 265px;
        height: 265px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-53px::before,
      .liabilities-53px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-53px::before {
        border-width: 132.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-53px::after {
        border-width: 129.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-54px {
        width: 270px;
        height: 270px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-54px::before,
      .active-income-54px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-54px::before {
        border-width: 135px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-54px::after {
        border-width: 132px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-54px {
        width: 270px;
        height: 270px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-54px::before,
      .expense-54px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-54px::before {
        border-width: 135px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-54px::after {
        border-width: 132px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-54px {
        width: 270px;
        height: 270px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-54px::before,
      .liabilities-54px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-54px::before {
        border-width: 135px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-54px::after {
        border-width: 132px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-55px {
        width: 275px;
        height: 275px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-55px::before,
      .active-income-55px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-55px::before {
        border-width: 137.5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-55px::after {
        border-width: 134.5px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-55px {
        width: 275px;
        height: 275px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-55px::before,
      .expense-55px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-55px::before {
        border-width: 137.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-55px::after {
        border-width: 134.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-55px {
        width: 275px;
        height: 275px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-55px::before,
      .liabilities-55px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-55px::before {
        border-width: 137.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-55px::after {
        border-width: 134.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-56px {
        width: 280px;
        height: 280px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-56px::before,
      .active-income-56px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-56px::before {
        border-width: 140px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-56px::after {
        border-width: 137px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-56px {
        width: 280px;
        height: 280px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-56px::before,
      .expense-56px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-56px::before {
        border-width: 140px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-56px::after {
        border-width: 137px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-56px {
        width: 280px;
        height: 280px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-56px::before,
      .liabilities-56px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-56px::before {
        border-width: 140px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-56px::after {
        border-width: 137px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-57px {
        width: 285px;
        height: 285px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-57px::before,
      .active-income-57px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-57px::before {
        border-width: 142.5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-57px::after {
        border-width: 139.5px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-57px {
        width: 285px;
        height: 285px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-57px::before,
      .expense-57px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-57px::before {
        border-width: 142.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-57px::after {
        border-width: 139.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-57px {
        width: 285px;
        height: 285px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-57px::before,
      .liabilities-57px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-57px::before {
        border-width: 142.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-57px::after {
        border-width: 139.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-58px {
        width: 290px;
        height: 290px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-58px::before,
      .active-income-58px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-58px::before {
        border-width: 145px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-58px::after {
        border-width: 142px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-58px {
        width: 290px;
        height: 290px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-58px::before,
      .expense-58px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-58px::before {
        border-width: 145px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-58px::after {
        border-width: 142px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-58px {
        width: 290px;
        height: 290px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-58px::before,
      .liabilities-58px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-58px::before {
        border-width: 145px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-58px::after {
        border-width: 142px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-59px {
        width: 295px;
        height: 295px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-59px::before,
      .active-income-59px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-59px::before {
        border-width: 147.5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-59px::after {
        border-width: 144.5px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-59px {
        width: 295px;
        height: 295px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-59px::before,
      .expense-59px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-59px::before {
        border-width: 147.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-59px::after {
        border-width: 144.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-59px {
        width: 295px;
        height: 295px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-59px::before,
      .liabilities-59px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-59px::before {
        border-width: 147.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-59px::after {
        border-width: 144.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-60px {
        width: 300px;
        height: 300px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-60px::before,
      .active-income-60px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-60px::before {
        border-width: 150px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-60px::after {
        border-width: 147px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-60px {
        width: 300px;
        height: 300px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-60px::before,
      .expense-60px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-60px::before {
        border-width: 150px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-60px::after {
        border-width: 147px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-60px {
        width: 300px;
        height: 300px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-60px::before,
      .liabilities-60px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-60px::before {
        border-width: 150px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-60px::after {
        border-width: 147px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-61px {
        width: 305px;
        height: 305px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-61px::before,
      .active-income-61px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-61px::before {
        border-width: 152.5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-61px::after {
        border-width: 149.5px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-61px {
        width: 305px;
        height: 305px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-61px::before,
      .expense-61px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-61px::before {
        border-width: 152.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-61px::after {
        border-width: 149.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-61px {
        width: 305px;
        height: 305px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-61px::before,
      .liabilities-61px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-61px::before {
        border-width: 152.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-61px::after {
        border-width: 149.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-62px {
        width: 310px;
        height: 310px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-62px::before,
      .active-income-62px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-62px::before {
        border-width: 155px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-62px::after {
        border-width: 152px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-62px {
        width: 310px;
        height: 310px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-62px::before,
      .expense-62px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-62px::before {
        border-width: 155px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-62px::after {
        border-width: 152px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-62px {
        width: 310px;
        height: 310px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-62px::before,
      .liabilities-62px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-62px::before {
        border-width: 155px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-62px::after {
        border-width: 152px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-63px {
        width: 315px;
        height: 315px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-63px::before,
      .active-income-63px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-63px::before {
        border-width: 157.5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-63px::after {
        border-width: 154.5px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-63px {
        width: 315px;
        height: 315px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-63px::before,
      .expense-63px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-63px::before {
        border-width: 157.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-63px::after {
        border-width: 154.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-63px {
        width: 315px;
        height: 315px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-63px::before,
      .liabilities-63px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-63px::before {
        border-width: 157.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-63px::after {
        border-width: 154.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-64px {
        width: 320px;
        height: 320px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-64px::before,
      .active-income-64px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-64px::before {
        border-width: 160px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-64px::after {
        border-width: 157px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-64px {
        width: 320px;
        height: 320px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-64px::before,
      .expense-64px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-64px::before {
        border-width: 160px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-64px::after {
        border-width: 157px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-64px {
        width: 320px;
        height: 320px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-64px::before,
      .liabilities-64px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-64px::before {
        border-width: 160px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-64px::after {
        border-width: 157px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-65px {
        width: 325px;
        height: 325px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-65px::before,
      .active-income-65px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-65px::before {
        border-width: 162.5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-65px::after {
        border-width: 159.5px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-65px {
        width: 325px;
        height: 325px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-65px::before,
      .expense-65px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-65px::before {
        border-width: 162.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-65px::after {
        border-width: 159.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-65px {
        width: 325px;
        height: 325px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-65px::before,
      .liabilities-65px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-65px::before {
        border-width: 162.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-65px::after {
        border-width: 159.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-66px {
        width: 330px;
        height: 330px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-66px::before,
      .active-income-66px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-66px::before {
        border-width: 165px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-66px::after {
        border-width: 162px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-66px {
        width: 330px;
        height: 330px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-66px::before,
      .expense-66px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-66px::before {
        border-width: 165px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-66px::after {
        border-width: 162px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-66px {
        width: 330px;
        height: 330px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-66px::before,
      .liabilities-66px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-66px::before {
        border-width: 165px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-66px::after {
        border-width: 162px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-67px {
        width: 335px;
        height: 335px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-67px::before,
      .active-income-67px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-67px::before {
        border-width: 167.5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-67px::after {
        border-width: 164.5px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-67px {
        width: 335px;
        height: 335px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-67px::before,
      .expense-67px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-67px::before {
        border-width: 167.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-67px::after {
        border-width: 164.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-67px {
        width: 335px;
        height: 335px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-67px::before,
      .liabilities-67px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-67px::before {
        border-width: 167.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-67px::after {
        border-width: 164.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-68px {
        width: 340px;
        height: 340px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-68px::before,
      .active-income-68px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-68px::before {
        border-width: 170px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-68px::after {
        border-width: 167px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-68px {
        width: 340px;
        height: 340px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-68px::before,
      .expense-68px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-68px::before {
        border-width: 170px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-68px::after {
        border-width: 167px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-68px {
        width: 340px;
        height: 340px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-68px::before,
      .liabilities-68px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-68px::before {
        border-width: 170px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-68px::after {
        border-width: 167px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-69px {
        width: 345px;
        height: 345px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-69px::before,
      .active-income-69px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-69px::before {
        border-width: 172.5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-69px::after {
        border-width: 169.5px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-69px {
        width: 345px;
        height: 345px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-69px::before,
      .expense-69px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-69px::before {
        border-width: 172.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-69px::after {
        border-width: 169.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-69px {
        width: 345px;
        height: 345px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-69px::before,
      .liabilities-69px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-69px::before {
        border-width: 172.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-69px::after {
        border-width: 169.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-70px {
        width: 350px;
        height: 350px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-70px::before,
      .active-income-70px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-70px::before {
        border-width: 175px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-70px::after {
        border-width: 172px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-70px {
        width: 350px;
        height: 350px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-70px::before,
      .expense-70px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-70px::before {
        border-width: 175px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-70px::after {
        border-width: 172px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-70px {
        width: 350px;
        height: 350px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-70px::before,
      .liabilities-70px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-70px::before {
        border-width: 175px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-70px::after {
        border-width: 172px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-71px {
        width: 355px;
        height: 355px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-71px::before,
      .active-income-71px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-71px::before {
        border-width: 177.5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-71px::after {
        border-width: 174.5px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-71px {
        width: 355px;
        height: 355px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-71px::before,
      .expense-71px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-71px::before {
        border-width: 177.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-71px::after {
        border-width: 174.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-71px {
        width: 355px;
        height: 355px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-71px::before,
      .liabilities-71px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-71px::before {
        border-width: 177.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-71px::after {
        border-width: 174.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-72px {
        width: 360px;
        height: 360px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-72px::before,
      .active-income-72px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-72px::before {
        border-width: 180px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-72px::after {
        border-width: 177px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-72px {
        width: 360px;
        height: 360px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-72px::before,
      .expense-72px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-72px::before {
        border-width: 180px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-72px::after {
        border-width: 177px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-72px {
        width: 360px;
        height: 360px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-72px::before,
      .liabilities-72px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-72px::before {
        border-width: 180px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-72px::after {
        border-width: 177px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-73px {
        width: 365px;
        height: 365px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-73px::before,
      .active-income-73px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-73px::before {
        border-width: 182.5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-73px::after {
        border-width: 179.5px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-73px {
        width: 365px;
        height: 365px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-73px::before,
      .expense-73px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-73px::before {
        border-width: 182.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-73px::after {
        border-width: 179.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-73px {
        width: 365px;
        height: 365px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-73px::before,
      .liabilities-73px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-73px::before {
        border-width: 182.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-73px::after {
        border-width: 179.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-74px {
        width: 370px;
        height: 370px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-74px::before,
      .active-income-74px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-74px::before {
        border-width: 185px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-74px::after {
        border-width: 182px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-74px {
        width: 370px;
        height: 370px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-74px::before,
      .expense-74px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-74px::before {
        border-width: 185px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-74px::after {
        border-width: 182px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-74px {
        width: 370px;
        height: 370px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-74px::before,
      .liabilities-74px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-74px::before {
        border-width: 185px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-74px::after {
        border-width: 182px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-75px {
        width: 375px;
        height: 375px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-75px::before,
      .active-income-75px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-75px::before {
        border-width: 187.5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-75px::after {
        border-width: 184.5px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-75px {
        width: 375px;
        height: 375px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-75px::before,
      .expense-75px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-75px::before {
        border-width: 187.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-75px::after {
        border-width: 184.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-75px {
        width: 375px;
        height: 375px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-75px::before,
      .liabilities-75px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-75px::before {
        border-width: 187.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-75px::after {
        border-width: 184.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-76px {
        width: 380px;
        height: 380px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-76px::before,
      .active-income-76px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-76px::before {
        border-width: 190px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-76px::after {
        border-width: 187px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-76px {
        width: 380px;
        height: 380px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-76px::before,
      .expense-76px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-76px::before {
        border-width: 190px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-76px::after {
        border-width: 187px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-76px {
        width: 380px;
        height: 380px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-76px::before,
      .liabilities-76px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-76px::before {
        border-width: 190px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-76px::after {
        border-width: 187px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-77px {
        width: 385px;
        height: 385px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-77px::before,
      .active-income-77px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-77px::before {
        border-width: 192.5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-77px::after {
        border-width: 189.5px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-77px {
        width: 385px;
        height: 385px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-77px::before,
      .expense-77px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-77px::before {
        border-width: 192.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-77px::after {
        border-width: 189.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-77px {
        width: 385px;
        height: 385px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-77px::before,
      .liabilities-77px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-77px::before {
        border-width: 192.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-77px::after {
        border-width: 189.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-78px {
        width: 390px;
        height: 390px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-78px::before,
      .active-income-78px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-78px::before {
        border-width: 195px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-78px::after {
        border-width: 192px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-78px {
        width: 390px;
        height: 390px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-78px::before,
      .expense-78px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-78px::before {
        border-width: 195px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-78px::after {
        border-width: 192px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-78px {
        width: 390px;
        height: 390px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-78px::before,
      .liabilities-78px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-78px::before {
        border-width: 195px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-78px::after {
        border-width: 192px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-79px {
        width: 395px;
        height: 395px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-79px::before,
      .active-income-79px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-79px::before {
        border-width: 197.5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-79px::after {
        border-width: 194.5px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-79px {
        width: 395px;
        height: 395px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-79px::before,
      .expense-79px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-79px::before {
        border-width: 197.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-79px::after {
        border-width: 194.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-79px {
        width: 395px;
        height: 395px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-79px::before,
      .liabilities-79px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-79px::before {
        border-width: 197.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-79px::after {
        border-width: 194.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-80px {
        width: 400px;
        height: 400px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-80px::before,
      .active-income-80px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-80px::before {
        border-width: 200px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-80px::after {
        border-width: 197px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-80px {
        width: 400px;
        height: 400px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-80px::before,
      .expense-80px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-80px::before {
        border-width: 200px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-80px::after {
        border-width: 197px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-80px {
        width: 400px;
        height: 400px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-80px::before,
      .liabilities-80px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-80px::before {
        border-width: 200px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-80px::after {
        border-width: 197px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-81px {
        width: 405px;
        height: 405px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-81px::before,
      .active-income-81px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-81px::before {
        border-width: 202.5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-81px::after {
        border-width: 199.5px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-81px {
        width: 405px;
        height: 405px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-81px::before,
      .expense-81px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-81px::before {
        border-width: 202.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-81px::after {
        border-width: 199.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-81px {
        width: 405px;
        height: 405px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-81px::before,
      .liabilities-81px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-81px::before {
        border-width: 202.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-81px::after {
        border-width: 199.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-82px {
        width: 410px;
        height: 410px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-82px::before,
      .active-income-82px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-82px::before {
        border-width: 205px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-82px::after {
        border-width: 202px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-82px {
        width: 410px;
        height: 410px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-82px::before,
      .expense-82px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-82px::before {
        border-width: 205px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-82px::after {
        border-width: 202px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-82px {
        width: 410px;
        height: 410px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-82px::before,
      .liabilities-82px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-82px::before {
        border-width: 205px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-82px::after {
        border-width: 202px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-83px {
        width: 415px;
        height: 415px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-83px::before,
      .active-income-83px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-83px::before {
        border-width: 207.5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-83px::after {
        border-width: 204.5px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-83px {
        width: 415px;
        height: 415px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-83px::before,
      .expense-83px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-83px::before {
        border-width: 207.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-83px::after {
        border-width: 204.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-83px {
        width: 415px;
        height: 415px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-83px::before,
      .liabilities-83px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-83px::before {
        border-width: 207.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-83px::after {
        border-width: 204.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-84px {
        width: 420px;
        height: 420px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-84px::before,
      .active-income-84px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-84px::before {
        border-width: 210px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-84px::after {
        border-width: 207px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-84px {
        width: 420px;
        height: 420px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-84px::before,
      .expense-84px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-84px::before {
        border-width: 210px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-84px::after {
        border-width: 207px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-84px {
        width: 420px;
        height: 420px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-84px::before,
      .liabilities-84px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-84px::before {
        border-width: 210px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-84px::after {
        border-width: 207px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-85px {
        width: 425px;
        height: 425px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-85px::before,
      .active-income-85px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-85px::before {
        border-width: 212.5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-85px::after {
        border-width: 209.5px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-85px {
        width: 425px;
        height: 425px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-85px::before,
      .expense-85px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-85px::before {
        border-width: 212.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-85px::after {
        border-width: 209.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-85px {
        width: 425px;
        height: 425px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-85px::before,
      .liabilities-85px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-85px::before {
        border-width: 212.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-85px::after {
        border-width: 209.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-86px {
        width: 430px;
        height: 430px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-86px::before,
      .active-income-86px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-86px::before {
        border-width: 215px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-86px::after {
        border-width: 212px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-86px {
        width: 430px;
        height: 430px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-86px::before,
      .expense-86px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-86px::before {
        border-width: 215px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-86px::after {
        border-width: 212px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-86px {
        width: 430px;
        height: 430px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-86px::before,
      .liabilities-86px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-86px::before {
        border-width: 215px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-86px::after {
        border-width: 212px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-87px {
        width: 435px;
        height: 435px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-87px::before,
      .active-income-87px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-87px::before {
        border-width: 217.5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-87px::after {
        border-width: 214.5px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-87px {
        width: 435px;
        height: 435px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-87px::before,
      .expense-87px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-87px::before {
        border-width: 217.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-87px::after {
        border-width: 214.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-87px {
        width: 435px;
        height: 435px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-87px::before,
      .liabilities-87px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-87px::before {
        border-width: 217.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-87px::after {
        border-width: 214.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-88px {
        width: 440px;
        height: 440px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-88px::before,
      .active-income-88px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-88px::before {
        border-width: 220px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-88px::after {
        border-width: 217px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-88px {
        width: 440px;
        height: 440px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-88px::before,
      .expense-88px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-88px::before {
        border-width: 220px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-88px::after {
        border-width: 217px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-88px {
        width: 440px;
        height: 440px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-88px::before,
      .liabilities-88px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-88px::before {
        border-width: 220px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-88px::after {
        border-width: 217px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-89px {
        width: 445px;
        height: 445px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-89px::before,
      .active-income-89px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-89px::before {
        border-width: 222.5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-89px::after {
        border-width: 219.5px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-89px {
        width: 445px;
        height: 445px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-89px::before,
      .expense-89px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-89px::before {
        border-width: 222.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-89px::after {
        border-width: 219.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-89px {
        width: 445px;
        height: 445px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-89px::before,
      .liabilities-89px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-89px::before {
        border-width: 222.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-89px::after {
        border-width: 219.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-90px {
        width: 450px;
        height: 450px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-90px::before,
      .active-income-90px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-90px::before {
        border-width: 225px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-90px::after {
        border-width: 222px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-90px {
        width: 450px;
        height: 450px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-90px::before,
      .expense-90px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-90px::before {
        border-width: 225px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-90px::after {
        border-width: 222px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-90px {
        width: 450px;
        height: 450px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-90px::before,
      .liabilities-90px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-90px::before {
        border-width: 225px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-90px::after {
        border-width: 222px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-91px {
        width: 455px;
        height: 455px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-91px::before,
      .active-income-91px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-91px::before {
        border-width: 227.5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-91px::after {
        border-width: 224.5px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-91px {
        width: 455px;
        height: 455px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-91px::before,
      .expense-91px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-91px::before {
        border-width: 227.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-91px::after {
        border-width: 224.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-91px {
        width: 455px;
        height: 455px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-91px::before,
      .liabilities-91px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-91px::before {
        border-width: 227.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-91px::after {
        border-width: 224.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-92px {
        width: 460px;
        height: 460px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-92px::before,
      .active-income-92px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-92px::before {
        border-width: 230px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-92px::after {
        border-width: 227px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-92px {
        width: 460px;
        height: 460px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-92px::before,
      .expense-92px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-92px::before {
        border-width: 230px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-92px::after {
        border-width: 227px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-92px {
        width: 460px;
        height: 460px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-92px::before,
      .liabilities-92px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-92px::before {
        border-width: 230px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-92px::after {
        border-width: 227px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-93px {
        width: 465px;
        height: 465px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-93px::before,
      .active-income-93px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-93px::before {
        border-width: 232.5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-93px::after {
        border-width: 229.5px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-93px {
        width: 465px;
        height: 465px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-93px::before,
      .expense-93px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-93px::before {
        border-width: 232.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-93px::after {
        border-width: 229.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-93px {
        width: 465px;
        height: 465px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-93px::before,
      .liabilities-93px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-93px::before {
        border-width: 232.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-93px::after {
        border-width: 229.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-94px {
        width: 470px;
        height: 470px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-94px::before,
      .active-income-94px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-94px::before {
        border-width: 235px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-94px::after {
        border-width: 232px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-94px {
        width: 470px;
        height: 470px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-94px::before,
      .expense-94px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-94px::before {
        border-width: 235px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-94px::after {
        border-width: 232px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-94px {
        width: 470px;
        height: 470px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-94px::before,
      .liabilities-94px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-94px::before {
        border-width: 235px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-94px::after {
        border-width: 232px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-95px {
        width: 475px;
        height: 475px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-95px::before,
      .active-income-95px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-95px::before {
        border-width: 237.5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-95px::after {
        border-width: 234.5px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-95px {
        width: 475px;
        height: 475px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-95px::before,
      .expense-95px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-95px::before {
        border-width: 237.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-95px::after {
        border-width: 234.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-95px {
        width: 475px;
        height: 475px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-95px::before,
      .liabilities-95px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-95px::before {
        border-width: 237.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-95px::after {
        border-width: 234.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-96px {
        width: 480px;
        height: 480px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-96px::before,
      .active-income-96px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-96px::before {
        border-width: 240px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-96px::after {
        border-width: 237px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-96px {
        width: 480px;
        height: 480px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-96px::before,
      .expense-96px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-96px::before {
        border-width: 240px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-96px::after {
        border-width: 237px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-96px {
        width: 480px;
        height: 480px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-96px::before,
      .liabilities-96px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-96px::before {
        border-width: 240px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-96px::after {
        border-width: 237px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-97px {
        width: 485px;
        height: 485px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-97px::before,
      .active-income-97px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-97px::before {
        border-width: 242.5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-97px::after {
        border-width: 239.5px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-97px {
        width: 485px;
        height: 485px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-97px::before,
      .expense-97px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-97px::before {
        border-width: 242.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-97px::after {
        border-width: 239.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-97px {
        width: 485px;
        height: 485px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-97px::before,
      .liabilities-97px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-97px::before {
        border-width: 242.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-97px::after {
        border-width: 239.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-98px {
        width: 490px;
        height: 490px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-98px::before,
      .active-income-98px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-98px::before {
        border-width: 245px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-98px::after {
        border-width: 242px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-98px {
        width: 490px;
        height: 490px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-98px::before,
      .expense-98px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-98px::before {
        border-width: 245px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-98px::after {
        border-width: 242px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-98px {
        width: 490px;
        height: 490px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-98px::before,
      .liabilities-98px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-98px::before {
        border-width: 245px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-98px::after {
        border-width: 242px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-99px {
        width: 495px;
        height: 495px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-99px::before,
      .active-income-99px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-99px::before {
        border-width: 247.5px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-99px::after {
        border-width: 244.5px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-99px {
        width: 495px;
        height: 495px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-99px::before,
      .expense-99px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-99px::before {
        border-width: 247.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-99px::after {
        border-width: 244.5px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-99px {
        width: 495px;
        height: 495px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-99px::before,
      .liabilities-99px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-99px::before {
        border-width: 247.5px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-99px::after {
        border-width: 244.5px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .active-income-100px {
        width: 500px;
        height: 500px;
        border: 6px solid #fff;
        position: absolute;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .active-income-100px::before,
      .active-income-100px::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .active-income-100px::before {
        border-width: 250px;
        border-top-color: #fff;
        border-left-color: #fff;
      }
      .active-income-100px::after {
        border-width: 247px;
        border-top-color: #444;
        border-left-color: #444;
      }

      .expense-100px {
        width: 500px;
        height: 500px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .expense-100px::before,
      .expense-100px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .expense-100px::before {
        border-width: 250px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .expense-100px::after {
        border-width: 247px;
        border-bottom-color: #111;
        border-right-color: #111;
      }

      .liabilities-100px {
        width: 500px;
        height: 500px;
        border: 6px solid #fff;
        position: absolute;
        border-top-color: transparent;
        border-left-color: transparent;
        transition: width 1s, height 1s, border-width 1s;
      }
      .liabilities-100px::before,
      .liabilities-100px::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-color: transparent;
        border-style: solid;
        transition: border-width 1s;
      }
      .liabilities-100px::before {
        border-width: 250px;
        border-bottom-color: #fff;
        border-right-color: #fff;
      }
      .liabilities-100px::after {
        border-width: 247px;
        border-bottom-color: #333;
        border-right-color: #333;
      }

      .employee-0px {
        border: 20px solid #000;
        bottom: -20px;
        right: -20px;
      }

      .lancer-0px {
        border: 20px solid #000;
        bottom: -20px;
        left: -20px;
      }

      .business-0px {
        border: 20px solid #000;
        top: -20px;
        right: -20px;
      }

      .investor-0px {
        border: 20px solid #000;
        top: -20px;
        left: -20px;
      }

      .employee-1px {
        border: 22px solid #000;
        bottom: -22px;
        right: -22px;
      }

      .lancer-1px {
        border: 22px solid #000;
        bottom: -22px;
        left: -22px;
      }

      .business-1px {
        border: 22px solid #000;
        top: -22px;
        right: -22px;
      }

      .investor-1px {
        border: 22px solid #000;
        top: -22px;
        left: -22px;
      }

      .employee-2px {
        border: 24px solid #000;
        bottom: -24px;
        right: -24px;
      }

      .lancer-2px {
        border: 24px solid #000;
        bottom: -24px;
        left: -24px;
      }

      .business-2px {
        border: 24px solid #000;
        top: -24px;
        right: -24px;
      }

      .investor-2px {
        border: 24px solid #000;
        top: -24px;
        left: -24px;
      }

      .employee-3px {
        border: 26px solid #000;
        bottom: -26px;
        right: -26px;
      }

      .lancer-3px {
        border: 26px solid #000;
        bottom: -26px;
        left: -26px;
      }

      .business-3px {
        border: 26px solid #000;
        top: -26px;
        right: -26px;
      }

      .investor-3px {
        border: 26px solid #000;
        top: -26px;
        left: -26px;
      }

      .employee-4px {
        border: 28px solid #000;
        bottom: -28px;
        right: -28px;
      }

      .lancer-4px {
        border: 28px solid #000;
        bottom: -28px;
        left: -28px;
      }

      .business-4px {
        border: 28px solid #000;
        top: -28px;
        right: -28px;
      }

      .investor-4px {
        border: 28px solid #000;
        top: -28px;
        left: -28px;
      }

      .employee-5px {
        border: 30px solid #000;
        bottom: -30px;
        right: -30px;
      }

      .lancer-5px {
        border: 30px solid #000;
        bottom: -30px;
        left: -30px;
      }

      .business-5px {
        border: 30px solid #000;
        top: -30px;
        right: -30px;
      }

      .investor-5px {
        border: 30px solid #000;
        top: -30px;
        left: -30px;
      }

      [class*='employee'] .text {
        position: relative;
        z-index: 30;
        text-align: right;
        top: calc(100% + 6px);
      }

      [class*='lancer'] .text {
        position: relative;
        z-index: 30;
        text-align: left;
        top: calc(100% + 6px);
      }

      [class*='business'] .text {
        position: relative;
        z-index: 30;
        text-align: right;
        top: -16px;
      }

      [class*='investor'] .text {
        position: relative;
        z-index: 30;
        text-align: left;
        top: -16px;
      }

      .arrow-top-right {
        transition: 1s;
        border: 0px solid mediumseagreen;
        border-top-width: 4px;
        border-right-width: 4px;
        height: 30px;
        width: 30px;
        z-index: 100;
        position: absolute;
        transform: translate(75px, -75px);
      }

      .arrow-top-right::before {
        content: '';
        position: relative;
        top: 56px;
        right: -52px;
        width: 0px;
        height: 0px;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 10px solid mediumseagreen;
      }

      .arrow-bottom-left {
        transition: 1s;
        border: 0px solid mediumseagreen;
        border-bottom-width: 10px;
        border-left-width: 10px;
        height: 50px;
        width: 60px;
        z-index: 100;
        position: absolute;
        transform: translate(125px, -130px);
        transform: translate(-125px, 130px);
      }

      .arrow-bottom-left::before {
        content: '';
        position: relative;
        bottom: 30px;
        left: -20px;
        width: 0px;
        height: 0px;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-bottom: 15px solid mediumseagreen;
      }

      .active-income-0px,
      .expense-0px,
      .savings-0px,
      .iga-0px,
      .liabilities-0px,
      .inc-exp,
      .inc-liab,
      .inc-sav,
      .inv-sav,
      .inv-liab,
      .inv-exp,
      .sav-inv {
        display: none;
      }
    `;
  }

  static get properties() {
    return {
      income: { type: Number },
      expense: { type: Number },
      liabilities: { type: Number },
      employee: { type: Number },
      lancer: { type: Number },
      business: { type: Number },
      investor: { type: Number },
      showLabel: { type: Boolean },
      showFlows: { type: Boolean },
      highlights: { type: Array },
      flows: { type: Array },
      disableStages: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.employee = 0;
    this.lancer = 0;
    this.business = 0;
    this.investor = 0;
    this.highlights = [];
    this.showLabel = false;
  }

  _highlightCSS() {
    if(this.highlights) {
      const hightlightCSS = this.highlights.reduce((acc, h) => {
        if (['employee', 'investor', 'lancer', 'business'].includes(h)) {
          return `${acc} :host [class*="${h}"] { opacity: 1; } ${ this.showLabel ? `:host [class*="${h}"] .text { opacity: 1; display: block !important; }` : '' }
  `;
        }
        let highlightAdditive = '';
        if (h === 'iga' && !this.highlights.includes('income')) {
          highlightAdditive += `:host [class*="income"] { opacity: 0.9; transition: width 1s, height 1s, border-width 1s, opacity 1s; } :host [class*="income"]:after { border-top-color: #c4c4c4; border-left-color: #c4c4c4; }`;
        }

        if (h === 'liabilities' && !this.highlights.includes('expense')) {
          highlightAdditive += `:host [class*="expense"] { opacity: 0.9; transition: width 1s, height 1s, border-width 1s, opacity 1s; } :host [class*="expense"]:after { border-bottom-color: #999999; border-right-color: #999999; }`;
        }

        if (h === 'savings' && !this.highlights.includes('liabilities')) {
          highlightAdditive += `
          :host [class*="liabilities"] { opacity: 0.9; transition: width 1s, height 1s, border-width 1s, opacity 1s; } :host [class*="liabilities"]:after { border-bottom-color: #bbbbbb; border-right-color: #bbbbbb; }
          `;
        }

        if (h === 'savings' && !this.highlights.includes('expense')) {
          highlightAdditive += `
          :host [class*="expense"] { opacity: 0.9; transition: width 1s, height 1s, border-width 1s, opacity 1s; } :host [class*="expense"]:after { border-bottom-color: #999999; border-right-color: #999999; }
          `;
        }

        if(this.showLabel && ['quadrant', 'cash-flow'].includes(h)) {
          return `${acc} :host [class*="${h}"], :host [class*="${h}"] * { opacity: 1; transition: width 1s, height 1s, border-width 1s, opacity 1s; } :host [class*="${h}"] .text { display: block !important; }`;
        }

        return `${acc} :host [class*="${h}"], :host [class*="${h}"] * { opacity: 1; transition: width 1s, height 1s, border-width 1s, opacity 1s; } ${highlightAdditive} ${ this.showLabel ? `:host [class*="${h}"] .text { display: inline-block !important; }` : ''}
  `;
      }, '');

    return this.highlights.length
      ? `
      .fw-wrapper * {
        opacity: 0.2;
      }

      ${ this.showLabel ? `.fw-wrapper .text {
        display: none;
      }` : ''}

      .fw-wrapper .cf-quadrant {
        opacity: 1;
        background-color: #fff;
      }

      .fw-wrapper .financial-stage {
        border-color: transparent;
        opacity: 0;
      }

      .fw-wrapper .quadrant {
        z-index: -1;
      }

      ${hightlightCSS}
    `
      : '';
    }

    return '';
  }

  _getFinancialStage() {
    if (this.disableStages) {
      return 'resolution';
    }

    const iga = 100 - this.income;
    const savings = 100 - this.expense - this.liabilities;

    if ((this.expense + this.liabilities <= 33) && iga >= 50) {
      return 'absolute';
    }

    if (this.expense <= 25 && this.liabilities <= 20 && iga > this.expense + this.liabilities) {
      return 'freedom';
    }

    if ((iga > this.expense || iga >= 30) && this.liabilities <= 33) {
      return 'independence';
    }

    if (iga >= 10 && this.liabilities <= 40) {
      return 'vitality';
    }

    if (savings >= 10) {
      return 'security';
    }

    return 'resolution';
  }

  // eslint-disable-next-line class-methods-use-this
  _getArrowPosition(className, positionTop) {
    const arrowDirection =
      className === 'sav-inv' ? 'arrow-bottom-left' : 'arrow-top-right';
    let top = ((225 * (positionTop * 0.5)) / 100) - 10;
    let size = 50;
    let borderWidth = 8;
    let arrowTop = size + 5;
    let arrowRight = size - 5.875;

    if ((className === 'inc-exp' || className === 'inv-exp') && top < 40) {
      const divide = positionTop > 20 && positionTop < 32 ? 0.8 : 0.6;
      top = ((225 * (positionTop * divide)) / 100) - 10;
      size = 30;
      borderWidth = 4;
      arrowTop = 35;
      arrowRight = 22.25;
    }

    const outputCss = `
        .${arrowDirection}.${className} {
          display: block;
          transform: ${
            className === 'sav-inv'
              ? `translate(-${top}px, ${top}px);`
              : `translate(${top}px, -${top}px);`
          }
          height: ${size}px;
          width: ${size}px;
          border-width: ${
            className === 'sav-inv'
              ? `0 0 ${borderWidth}px ${borderWidth}px;`
              : `${borderWidth}px ${borderWidth}px 0 0;`
          };
        }

        ${
          className !== 'sav-inv'
            ? `.${arrowDirection}.${className}::before {
          top: ${arrowTop}px;
          right: -${arrowRight}px;
        }`
            : ''
        }
      `;

    return { top, size, borderWidth, arrowTop, arrowRight, outputCss };
  }

  _getResidueSize(cfName) {
    switch (cfName) {
      case 'inv':
        return Number(this.income);
      case 'liab':
        return Number(this.expense);
      case 'sav':
        return Number(this.expense + this.liabilities);
      default:
        return 0;
    }
  }

  _calculateMedian(className, cfAVal, cfBVal) {
    const [cfA, cfB] = className.split('-');
    const residueA = this._getResidueSize(cfA);
    const residueB = this._getResidueSize(cfB);
    const endA = residueA + cfAVal;
    const endB = residueB + cfBVal;

    const medianStart = residueA > residueB ? residueA : residueB;
    const medianEnd = endA < endB ? endA : endB;
    const median = (medianEnd - medianStart) * 0.5;

    return medianStart + median;
  }

  _getArrowCSS(className, cfA, cfB) {
    this.flows.push(className);
    const positionTop = 2 * this._calculateMedian(className, cfA, cfB);
    const { outputCss } = this._getArrowPosition(className, positionTop);
    return outputCss;
  }

  _getFlowsCSS() {
    this.flows = [];
    let flowsCSS = '';
    const minWidth = 15;
    const income = Number(this.income);
    const expense = Number(this.expense);
    const liabilities = Number(this.liabilities);
    const liabilitiesPos = liabilities + expense;
    const savings = 100 - (Number(this.liabilities) + Number(this.expense));
    const iga = 100 - Number(this.income);

    if (expense >= minWidth && income >= minWidth) {
      flowsCSS += this._getArrowCSS('inc-exp', income, expense);
    }

    if (liabilitiesPos >= expense + minWidth && income >= expense + minWidth) {
      flowsCSS += this._getArrowCSS('inc-liab', income, liabilities);
    }

    if (
      liabilities >= minWidth &&
      iga >= minWidth &&
      liabilitiesPos >= income + minWidth
    ) {
      flowsCSS += this._getArrowCSS('inv-liab', iga, liabilities);
    }

    if (expense >= income + minWidth && iga >= minWidth) {
      flowsCSS += this._getArrowCSS('inv-exp', iga, expense);
    }

    if (
      Number(this.income) >
        Number(this.liabilities) + Number(this.expense) + minWidth &&
      savings >= minWidth
    ) {
      flowsCSS += this._getArrowCSS('inc-sav', income, savings);
    }

    if (
      100 - Number(this.income) >= minWidth &&
      100 - (Number(this.liabilities) + Number(this.expense)) >= minWidth
    ) {
      flowsCSS += this._getArrowCSS('inv-sav', iga, savings);
      flowsCSS += this._getArrowCSS('sav-inv', savings, iga);
    }

    return flowsCSS;
  }

  _quadrantSize(quadrantItem) {
    return typeof this[quadrantItem] !== 'undefined'
      ? `${quadrantItem}-${this[quadrantItem]}px`
      : quadrantItem;
  }

  _cashItemSize(cashItem) {
    switch (cashItem) {
      case 'active-income':
        return Number(this.income) > -1
          ? `active-income-${this.income}px`
          : cashItem;
      case 'expense':
        return Number(this.expense) > -1
          ? `expense-${this.expense}px`
          : cashItem;
      case 'liabilities':
        return Number(this.liabilities) > -1
          ? `liabilities-${this.expense + this.liabilities}px`
          : cashItem;
      default:
        return cashItem;
    }
  }

  render() {
    const fsqTag =
      this.employee || this.lancer || this.business || this.investor
        ? `
        .fw-wrapper .financial-stage:after {
          top: -${String(20 + (this.investor + this.business) * 2).trim()}px;
          border-top: ${String(
            20 + (this.investor + this.business) * 2
          ).trim()}px solid white;
          border-bottom: ${String(
            20 + (this.employee + this.lancer) * 2
          ).trim()}px solid white;
        }

        .fw-wrapper .financial-stage:before {
          left: -${String(20 + (this.investor + this.lancer) * 2).trim()}px;
          border-left: ${String(
            20 + (this.investor + this.lancer) * 2
          ).trim()}px solid white;
          border-right: ${String(
            20 + (this.employee + this.business) * 2
          ).trim()}px solid white;
        }
    `
        : '';

    return html`
      <style>
        ${!this.showLabel ? html`.text { display: none !important; }` : ''}
        ${!this.showFlows
          ? html`[class*="arrow-"] { display: none !important; }`
          : ''}
        ${(this.income <= 10 && this.expense <= 10) ||
        this.income <= 20 ||
        this.expense <= 20
          ? html`.cash-flow { width: 20px !important; height: 20px !important; }`
          : ''}
        ${fsqTag}
        ${this._highlightCSS()}
        ${this.showFlows ? this._getFlowsCSS() : ''}
      </style>
      ${ this.showLogs ?  html`
      <pre>
Income Generating Assets: ${100 - this.income}
Savings: ${100 - this.expense - this.liabilities}
Income: ${this.income}
Expense: ${this.expense}
Liabilities: ${this.liabilities}
Stage: ${this._getFinancialStage()}
Flows: ${this.flows && this.flows.toString()}
        </pre>` : '' }
      <div id="fw" class="fw-wrapper ${this._getFinancialStage()}">
        <div class="cf-quadrant absolute-center">
          <div class="${this._quadrantSize('employee')} quadrant">
            <div class="text">Employee</div>
          </div>
          <div class="${this._quadrantSize('lancer')} quadrant">
            <div class="text">Lancer</div>
          </div>
          <div class="${this._quadrantSize('business')} quadrant">
            <div class="text">Business</div>
          </div>
          <div class="${this._quadrantSize('investor')} quadrant">
            <div class="text">Investor</div>
          </div>
        </div>
        <div class="financial-stage absolute-center"></div>
        <div class="iga cash-item absolute-center">
          <div class="text">Passive Income</div>
        </div>
        <div
          id="ai"
          class="${this._cashItemSize(
            'active-income'
          )} cash-item absolute-center"
        >
          <div class="text">Active Income</div>
        </div>
        <div id="si" class="savings cash-item absolute-center">
          <div class="text">Savings</div>
        </div>
        <div
          class="${this._cashItemSize('liabilities')} cash-item absolute-center"
        >
          <div class="text">Liability expense</div>
        </div>
        <div
          id="ei"
          class="${this._cashItemSize(
            'expense'
          )} expense cash-item absolute-center"
        >
          <div class="text">Expense</div>
        </div>
        <div class="arrow-top-right inc-exp absolute-center"></div>
        <div class="arrow-top-right inc-liab absolute-center"></div>
        <div class="arrow-top-right inc-sav absolute-center"></div>
        <div class="arrow-top-right inv-sav absolute-center"></div>
        <div class="arrow-top-right inv-liab absolute-center"></div>
        <div class="arrow-top-right inv-exp absolute-center"></div>
        <div class="arrow-bottom-left sav-inv absolute-center"></div>
        <div class="cash-flow absolute-center shade">
          <div class="text">Cash flow</div>
        </div>
      </div>
    `;
  }
}

window.customElements.define('fw-logo', FwLogo);