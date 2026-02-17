/**
 * Selectors for investment preferences state
 */

import { createSelector } from 'reselect';

/**
 * Get the full investment preferences state
 * @param {Object} state - Redux state
 * @returns {Object} Investment preferences state
 */
const getInvestmentPreferencesState = (state) => state.investmentPreferences;

/**
 * Get the investment allocation array
 */
export const getInvestmentAllocations = createSelector(
  getInvestmentPreferencesState,
  (investmentPreferences) => investmentPreferences.allocations || [],
);
