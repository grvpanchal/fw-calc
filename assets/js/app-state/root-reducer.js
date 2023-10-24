import { combineReducers } from 'redux';
import accountStatementReducer from './account-statement/account-statement-reducer.js';
import balanceSheetReducer from './balance-sheet/balance-sheet-reducer.js';
import wealthReducer from './wealth/wealth-reducer.js';

const UPDATE_WEALTH = 'UPDATE_WEALTH';

const appReducer = combineReducers({
    wealth: wealthReducer,
    accountStatement: accountStatementReducer,
    balanceSheet: balanceSheetReducer,
});

export default appReducer;