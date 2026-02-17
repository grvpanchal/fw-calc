/**
 * Action creators for investment preferences
 */

import { SET_INVESTMENT_ALLOCATION } from './investment-preferences-action-types.js';

/**
 * Set the investment allocation preferences for savings
 * @param {Array} allocations - Array of allocation objects with {id, name, rate, percent}
 * @returns {Object} Redux action
 */
export const setInvestmentAllocation = (allocations) => ({
  type: SET_INVESTMENT_ALLOCATION,
  payload: allocations,
});
