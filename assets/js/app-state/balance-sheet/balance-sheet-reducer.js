import { combineReducers } from 'redux';
import assetsReducer from './assets/assets-reducer.js';
import liabilitiesReducer from './liabilities/liabilities-reducer.js';

const balanceSheetReducer = combineReducers({
  assets: assetsReducer,
  liabilities: liabilitiesReducer,
});

export default balanceSheetReducer;
