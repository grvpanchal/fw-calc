import {
  ADD_EXPENSE,
  UPDATE_EXPENSE,
  REMOVE_EXPENSE,
} from './expenses-action-types.js';
import initialState from '../../initial.js';


const INITIAL_STATE = initialState.accountStatement.expenses;

const expensesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return [...state, action.payload];
    case UPDATE_EXPENSE:
      return state.map(exp => exp.id === action.payload.id ? action.payload : exp);
    case REMOVE_EXPENSE:
      return state.filter(exp => exp.id !== action.payload.id);
    default:
      return state;
  }
};

export default expensesReducer;