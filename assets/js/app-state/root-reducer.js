import { combineReducers } from 'redux';
import accountStatementReducer from './account-statement/account-statement-reducer.js';
import balanceSheetReducer from './balance-sheet/balance-sheet-reducer.js';
import wealthReducer from './wealth/wealth-reducer.js';
import { investmentPreferencesReducer } from './investment-preferences/investment-preferences-reducer.js';

const appReducer = combineReducers({
  wealth: wealthReducer,
  accountStatement: accountStatementReducer,
  balanceSheet: balanceSheetReducer,
  investmentPreferences: investmentPreferencesReducer,
});

export default appReducer;
