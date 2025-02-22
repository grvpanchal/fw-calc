import { combineReducers } from 'redux';
import incomesReducer from './incomes/incomes-reducer.js';
import expensesReducer from './expenses/expenses-reducer.js';

const accountStatementReducer = combineReducers({
  incomes: incomesReducer,
  expenses: expensesReducer,
});

export default accountStatementReducer;
