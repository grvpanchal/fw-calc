import {
    ADD_ASSET,
    UPDATE_ASSET,
    REMOVE_ASSET,
} from './assets-action-types.js';

export const addAsset = (payload) => {
    return {
        type: ADD_ASSET,
        payload
    };
};

export const updateAsset = (payload) => {
    return {
        type: UPDATE_ASSET,
        payload
    };
};

export const removeAsset = (payload) => {
    return {
        type: REMOVE_ASSET,
        payload
    };
};
