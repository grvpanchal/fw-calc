import {
  ADD_LIABILITY,
  UPDATE_LIABILITY,
  REMOVE_LIABILITY
} from './liabilities-action-types.js';
import initialState from '../../initial.js';



const INITIAL_STATE = initialState.balanceSheet.liabilities;

const liabilitiesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_LIABILITY:
      return [...state, action.payload];
    case UPDATE_LIABILITY:
      return state.map(liab => liab.id === action.payload.id ? action.payload : liab);
    case REMOVE_LIABILITY:
      return state.filter(liab => liab.id !== action.payload.id);
    default:
      return state;
  }
};

export default liabilitiesReducer;