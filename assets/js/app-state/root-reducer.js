import { combineReducers } from 'redux';
import accountStatementReducer from './account-statement/account-statement-reducer.js';
import balanceSheetReducer from './balance-sheet/balance-sheet-reducer.js';
import wealthReducer from './wealth/wealth-reducer.js';

const appReducer = combineReducers({
  wealth: wealthReducer,
  accountStatement: accountStatementReducer,
  balanceSheet: balanceSheetReducer,
});

export default appReducer;
