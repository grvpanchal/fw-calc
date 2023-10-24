import {
    ADD_LIABILITY,
    UPDATE_LIABILITY,
    REMOVE_LIABILITY,
} from './liabilities-action-types.js';

export const addLiability = (payload) => {
    return {
        type: ADD_LIABILITY,
        payload
    };
};

export const updateLiability = (payload) => {
    return {
        type: UPDATE_LIABILITY,
        payload
    };
};

export const removeLiability = (payload) => {
    return {
        type: REMOVE_LIABILITY,
        payload
    };
};