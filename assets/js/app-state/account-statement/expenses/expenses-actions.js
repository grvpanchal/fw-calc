import {
    ADD_EXPENSE,
    UPDATE_EXPENSE,
    REMOVE_EXPENSE,
} from './expenses-action-types.js';

export const addExpense = payload => {
    return {
        type: ADD_EXPENSE,
        payload
    };
};

export const updateExpense = payload => {
    return {
        type: UPDATE_EXPENSE,
        payload
    };
};

export const removeExpense = payload => {
    return {
        type: REMOVE_EXPENSE,
        payload
    };
};