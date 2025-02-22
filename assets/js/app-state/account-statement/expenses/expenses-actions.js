import {
  ADD_EXPENSE,
  UPDATE_EXPENSE,
  REMOVE_EXPENSE,
} from './expenses-action-types.js';

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const updateExpense = (payload) => ({
  type: UPDATE_EXPENSE,
  payload,
});

export const removeExpense = (payload) => ({
  type: REMOVE_EXPENSE,
  payload,
});
