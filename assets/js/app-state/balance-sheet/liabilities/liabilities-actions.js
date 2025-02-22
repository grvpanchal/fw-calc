import {
  ADD_LIABILITY,
  UPDATE_LIABILITY,
  REMOVE_LIABILITY,
} from './liabilities-action-types.js';

export const addLiability = (payload) => ({
  type: ADD_LIABILITY,
  payload,
});

export const updateLiability = (payload) => ({
  type: UPDATE_LIABILITY,
  payload,
});

export const removeLiability = (payload) => ({
  type: REMOVE_LIABILITY,
  payload,
});
