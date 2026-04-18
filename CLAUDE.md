# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm install` — install dev dependencies (ESLint + static server only; no runtime deps)
- `npm start` — serve the app at `http://localhost:5000` via `serve`
- `npm run lint:fix` — run ESLint with `--fix` across the repo

There is no build, no bundler, and no test suite.

## Architecture

### No-build browser ESM

This app runs directly in the browser as native ES modules. Runtime dependencies
(`lit-element`, `redux`, `redux-saga`, `redux-persist`, `reselect`, `pwa-helpers`,
`style-shelter`, `chota` CSS) are loaded from unpkg via the `<script type="importmap">`
block in `index.html`. `importmap.json` is a duplicate of that block used only so
`@jsenv/importmap-eslint-resolver` can resolve bare specifiers for lint.

Implications:
- Code must be valid ES2020+ as-is — no transpilation runs.
- Always include the `.js` extension in relative imports (enforced implicitly by the browser).
- Adding a runtime dependency means editing **both** the importmap in `index.html`
  and `importmap.json`.

### State layer (`assets/js/app-state/`)

Redux store with four top-level slices combined in `root-reducer.js`:
`accountStatement` (incomes, expenses), `balanceSheet` (assets, liabilities),
`investmentPreferences` (allocations), and `wealth` (derived timeline).

Each feature slice follows the same four-file convention:
`*-action-types.js`, `*-actions.js`, `*-reducer.js`, `*-selector.js` (selectors
use `reselect`).

`store.js` hand-rolls persistence — it loads from and subscribes to write
`localStorage['appState']` directly. `redux-persist` is imported but the
persistence shown in README/copilot docs is actually this custom subscription.
`isFirstTimeUser()` checks the same key to gate the setup wizard. `sagas.js`
exists and is wired in but currently no-ops.

### Wealth projection (the core domain logic)

`wealth-actions.js` is not a typical action creator file — `updateWealth(...)`
runs a full 360-month (30-year) forward projection inside `generateWealthProjection`
and dispatches the entire resulting timeline as the `UPDATE_WEALTH` payload.
`wealth-reducer.js` replaces state wholesale with that payload.

Key behaviors encoded there:
- Monthly compound growth of assets; EMI + remaining balance computed per liability.
- Positive monthly savings are reinvested per `investmentPreferences.allocations`
  and consolidated via `mergeAssets` by asset name/type.
- Phased retirement: active income starts tapering at 80% passive-income coverage,
  and zeros out 6 months after passive income first fully covers expenses
  (`ffAchievedAtMonth`). The loop also terminates 6 months past that point.
- Expenses of type `liability-expense` are intentionally ignored — EMI is
  derived from liabilities, not from expense entries.

`app-shell.js` re-dispatches `updateWealth(...)` after every user mutation
(`recalculateWealth`), so any new mutation handler must do the same.

### UI layer

Lit-Element web components organized as atoms → molecules → organisms under
`assets/js/ui/`, plus feature components in `assets/js/components/`
(`setup-wizard.js`, `todo-view.js`). `app-shell.js` is the root component
(`<app-shell>` in `index.html`) and is the only component that talks to the
store directly via `connect(store)` from `pwa-helpers`; children receive props
and emit custom events that `app-shell` translates into store dispatches.

`ChotaElement` (in `assets/js/mixins/`) is a LitElement subclass that adopts
`/assets/css/chota.css` into the shadow root via `style-shelter` — extend it
when you need Chota utility classes inside a component's shadow DOM.

## Conventions

- Kebab-case filenames; component filename matches the custom element tag
  (`ch-button.js` → `<ch-button>`).
- ESLint extends `airbnb-base` with several rules disabled (see `.eslintrc.js`);
  notably `import/extensions` is off but you should still write `.js` extensions
  for the browser.
- Never mutate Redux state; go through actions. After mutating, call
  `recalculateWealth()` (or dispatch `updateWealth`) so the timeline stays in sync.
- To reset while developing: `localStorage.clear()` in the browser console —
  this also re-triggers the setup wizard.
