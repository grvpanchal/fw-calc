/**
 * Reducer for investment preferences state
 */

import { SET_INVESTMENT_ALLOCATION } from './investment-preferences-action-types.js';

/**
 * Investment preferences reducer
 * @param {Object} state - Current state
 * @param {Object} action - Redux action
 * @returns {Object} New state
 */
export const investmentPreferencesReducer = (state = { allocations: [] }, action) => {
  switch (action.type) {
    case SET_INVESTMENT_ALLOCATION:
      return {
        ...state,
        allocations: action.payload,
      };
    default:
      return state;
  }
};
