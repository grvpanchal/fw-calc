import {
  UPDATE_WEALTH,
} from './wealth-action-types.js';
import initialState from '../initial.js';

const INITIAL_STATE = initialState.wealth;

const wealthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_WEALTH:
      // Replace entire wealth timeline with new projection
      return action.payload;
    default:
      return state;
  }
};

export default wealthReducer;
