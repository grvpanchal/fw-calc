import {
  ADD_ASSET,
  UPDATE_ASSET,
  REMOVE_ASSET,
} from './assets-action-types.js';

export const addAsset = (payload) => ({
  type: ADD_ASSET,
  payload,
});

export const updateAsset = (payload) => ({
  type: UPDATE_ASSET,
  payload,
});

export const removeAsset = (payload) => ({
  type: REMOVE_ASSET,
  payload,
});
