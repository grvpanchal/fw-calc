import {
    ADD_INCOME,
    UPDATE_INCOME,
    REMOVE_INCOME,
} from './incomes-action-types.js';

export const addIncome = (payload) => {
    return {
        type: ADD_INCOME,
        payload
    };
};

export const updateIncome = (payload) => {
    return {
        type: UPDATE_INCOME,
        payload
    };
};

export const removeIncome = (payload) => {
    return {
        type: REMOVE_INCOME,
        payload
    };
};