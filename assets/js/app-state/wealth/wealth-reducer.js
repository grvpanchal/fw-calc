import {
  UPDATE_WEALTH,
} from './wealth-action-types.js';
import initialState from '../initial.js';

const INITIAL_STATE = initialState.wealth;

const wealthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_WEALTH:
      return state.map((wealthItem) => {
        if (wealthItem && wealthItem.date === action.payload.date) {
          return action.payload;
        }
        return wealthItem;
      });
    default:
      return state;
  }
};

export default wealthReducer;
