# GitHub Copilot Instructions for FW-Calc Project

## Project Overview
**Family Wealth Calculator** is a financial planning application that calculates cash flow based on account statements and balance sheets. It helps users track their journey toward financial freedom.

## Architecture & Tech Stack

### Core Technologies
- **No Build System**: Pure browser ESM (ES Modules) - no bundlers, no transpilation
- **Web Components**: Built with Lit-Element 3.3.3 for component architecture
- **State Management**: Redux 4.2.1 with Redux-Saga 1.2.1 for side effects
- **State Persistence**: Redux-Persist 6.0.0 for localStorage persistence
- **Styling**: Chota CSS (minimal CSS framework)
- **Import Maps**: Browser-native module resolution via importmap

### Key Dependencies (CDN via unpkg)
```javascript
- lit-element: Web components framework
- redux: State management
- redux-saga: Side effects management
- redux-persist: State persistence
- reselect: Memoized selectors
- pwa-helpers: Redux store connector
- style-shelter: Style encapsulation
- chota: Minimalist CSS framework
```

## Project Structure

### State Management Organization
All state logic follows **modular Redux pattern** under `assets/js/app-state/`:

```
app-state/
├── store.js              # Redux store configuration
├── root-reducer.js       # Root reducer combining all slices
├── sagas.js             # Root saga orchestrator
├── initial.js           # Initial state shape
├── account-statement/   # Income/expense tracking
│   ├── account-statement-reducer.js
│   ├── expenses/        # Expense slice
│   │   ├── expenses-action-types.js
│   │   ├── expenses-actions.js
│   │   ├── expenses-reducer.js
│   │   └── expenses-selector.js
│   └── incomes/         # Income slice
│       ├── incomes-action-types.js
│       ├── incomes-actions.js
│       ├── incomes-reducer.js
│       └── incomes-selector.js
├── balance-sheet/       # Asset/liability tracking
│   ├── balance-sheet-reducer.js
│   ├── assets/          # Assets slice
│   │   ├── assets-action-types.js
│   │   ├── assets-actions.js
│   │   ├── assets-reducer.js
│   │   └── assets-selector.js
│   └── liabilities/     # Liabilities slice
│       ├── liabilities-action-types.js
│       ├── liabilities-actions.js
│       ├── liabilities-reducer.js
│       └── liabilities-selector.js
└── wealth/              # Calculated wealth metrics
    ├── wealth-action-types.js
    ├── wealth-actions.js
    ├── wealth-reducer.js
    └── wealth-selector.js
```

### UI Component Organization
Components follow **Atomic Design** under `assets/js/`:

```
ui/
├── atoms/               # Basic building blocks
│   ├── ch-button.js
│   ├── ch-input.js
│   └── fw-logo.js
├── molecules/           # Composite components
│   ├── app-input-entry.js
│   ├── app-input-group.js
│   └── app-tabs.js
└── organisms/           # Complex sections
    └── fw-logo.js

components/              # Feature components
└── todo-view.js

mixins/                  # Shared behaviors
├── chota-element.js
└── chota-mixin.js
```

## Development Workflow

### Setup
```bash
npm install    # Installs dev dependencies (linting, dev server)
npm start      # Starts local dev server on port 5000
```

### Available Scripts
- `npm start`: Runs dev server at `http://localhost:5000`
- `npm run lint:fix`: Auto-fixes ESLint issues

### Dev Dependencies (Node.js only)
```json
- eslint: Code linting
- eslint-config-airbnb: Airbnb style guide
- @jsenv/importmap-eslint-resolver: Import map support in ESLint
- serve: Static file server
```

## Key Architectural Concepts

### 1. Browser ESM - No Build Step
- All imports use **native ES modules** in the browser
- Dependencies loaded via **CDN** (unpkg.com)
- Import maps resolve bare specifiers (e.g., `import { LitElement } from 'lit-element'`)
- **No webpack, Vite, or any bundler**

### 2. Redux State Slices
Each feature has a complete Redux slice with:
- **Action Types**: String constants for action names
- **Actions**: Action creator functions
- **Reducer**: Pure state update functions
- **Selectors**: Memoized state access functions (using reselect)

### 3. Component Pattern (Lit-Element)
```javascript
import { LitElement, html } from 'lit-element';
import { connect } from 'pwa-helpers';

class MyComponent extends connect(store)(LitElement) {
  static get properties() {
    return { /* reactive properties */ };
  }
  
  stateChanged(state) {
    // Subscribe to Redux state
  }
  
  render() {
    return html`<div>Component markup</div>`;
  }
}

customElements.define('my-component', MyComponent);
```

### 4. Entry Point
- **[index.html](index.html)**: Main HTML file with import map
- **[assets/js/app-shell.js](assets/js/app-shell.js)**: Root web component
- All modules loaded via `<script type="module">`

## Coding Guidelines

### When Adding New Features

#### 1. Redux State Slice
Create in appropriate `app-state/` subdirectory:
```javascript
// feature-action-types.js
export const ADD_FEATURE = 'ADD_FEATURE';

// feature-actions.js
export const addFeature = (payload) => ({ type: ADD_FEATURE, payload });

// feature-reducer.js
export const featureReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEATURE:
      return { ...state, items: [...state.items, action.payload] };
    default:
      return state;
  }
};

// feature-selector.js
import { createSelector } from 'reselect';
export const getFeature = createSelector(
  (state) => state.feature,
  (feature) => feature.items
);
```

#### 2. Web Components
- Use Lit-Element for all components
- Connect to Redux via `pwa-helpers` if needed
- Follow atomic design (atoms → molecules → organisms)
- Import in parent component or [app-shell.js](assets/js/app-shell.js)

#### 3. Styling
- Use Chota CSS utility classes where possible
- Shadow DOM for component-scoped styles
- Import chota-mixin for consistent theming

### Import Conventions
```javascript
// External dependencies (resolved via import map)
import { LitElement, html } from 'lit-element';
import { store } from './app-state/store.js';

// Always use relative paths for local modules
import { getIncomes } from './app-state/account-statement/incomes/incomes-selector.js';

// Always include .js extension
import './ui/atoms/ch-button.js';
```

### File Naming
- **Kebab-case** for all files: `my-component.js`
- **Match component name**: `ch-button.js` → `<ch-button>`
- **Descriptive suffixes**: `-actions.js`, `-reducer.js`, `-selector.js`, `-action-types.js`

## Important Notes for Copilot

1. **No Transpilation**: Code must be valid ES2020+ (supported by modern browsers)
2. **No NPM Imports**: All runtime dependencies come from CDN via import map
3. **Manual Module Registration**: Web components must call `customElements.define()`
4. **Redux Store Access**: Always import from `./app-state/store.js`
5. **ESLint Config**: Uses Airbnb style with import map resolver
6. **File Extensions**: Always include `.js` in imports
7. **State Updates**: Always use Redux actions, never mutate state directly
8. **Selectors**: Use reselect for memoized derived state

## Testing the App
1. Run `npm start`
2. Open `http://localhost:5000` in browser
3. Check browser console for Redux state logs
4. State persists in localStorage (via redux-persist)

## Common Tasks

### Add a new expense category
1. Add action type in [expenses-action-types.js](assets/js/app-state/account-statement/expenses/expenses-action-types.js)
2. Create action in [expenses-actions.js](assets/js/app-state/account-statement/expenses/expenses-actions.js)
3. Handle in [expenses-reducer.js](assets/js/app-state/account-statement/expenses/expenses-reducer.js)
4. Create selector in [expenses-selector.js](assets/js/app-state/account-statement/expenses/expenses-selector.js)

### Add a new UI component
1. Create component file in appropriate `ui/` directory
2. Import in parent component or [app-shell.js](assets/js/app-shell.js)
3. Use component tag in parent's render method

### Modify initial state
1. Update [assets/js/app-state/initial.js](assets/js/app-state/initial.js)
2. Clear localStorage to test: `localStorage.clear()`

## Debugging Tips
- Redux DevTools compatible (if extension installed)
- Check console logs in [app-shell.js](assets/js/app-shell.js) `stateChanged()` method
- Inspect `localStorage` for persisted state
- Use browser's Network tab to verify CDN imports load correctly
