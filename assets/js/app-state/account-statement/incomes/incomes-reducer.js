import {
  ADD_INCOME,
  UPDATE_INCOME,
  REMOVE_INCOME,
  TEST_INCOME,
} from './incomes-action-types.js';
import initialState from '../../initial.js';

const INITIAL_STATE = initialState.accountStatement.incomes;

const incomesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_INCOME:
      return [...state, action.payload];
    case UPDATE_INCOME:
      return state.map((inc) => (inc.id === action.payload.id ? action.payload : inc));
    case REMOVE_INCOME:
      return state.filter((inc) => inc.id !== action.payload.id);
    case TEST_INCOME:
      console.log('action TEST_INCOME', action);
      return state;
    default:
      return state;
  }
};

export default incomesReducer;
