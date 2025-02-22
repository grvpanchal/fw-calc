import {
  ADD_INCOME,
  UPDATE_INCOME,
  REMOVE_INCOME,
} from './incomes-action-types.js';

export const addIncome = (payload) => ({
  type: ADD_INCOME,
  payload,
});

export const updateIncome = (payload) => ({
  type: UPDATE_INCOME,
  payload,
});

export const removeIncome = (payload) => ({
  type: REMOVE_INCOME,
  payload,
});
