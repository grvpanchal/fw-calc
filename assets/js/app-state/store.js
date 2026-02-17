import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer.js';
import mySaga from './sagas.js';

const sagaMiddleware = createSagaMiddleware();

// Load state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('appState');
    if (serializedState === null) {
      return undefined; // Let Redux use initial state
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Could not load state', err);
    return undefined;
  }
};

// Save state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('appState', serializedState);
  } catch (err) {
    console.error('Could not save state', err);
  }
};

const persistedState = loadState();

export const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(sagaMiddleware),
);

// Subscribe to store changes and persist
store.subscribe(() => {
  saveState(store.getState());
});

sagaMiddleware.run(mySaga);

// Export function to check if first time user
export const isFirstTimeUser = () => !localStorage.getItem('appState');
