import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer.js';
import mySaga from './sagas.js';

const sagaMiddleware = createSagaMiddleware();

// console.log('rootReducer', rootReducer);

export const store = createStore(
  rootReducer,
  // JSON.parse(window.localStorage.getItem('appState') || '{ }'),
  applyMiddleware(
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__,
    sagaMiddleware,
  ),
);

sagaMiddleware.run(mySaga);
