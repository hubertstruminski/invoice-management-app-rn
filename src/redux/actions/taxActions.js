import { 
    ADD_TAX,
    REMOVE_TAX, 
    SET_CHOSEN_TAX_DETAILS,
    UPDATE_TAX, 
} from "./types";

export const setTaxDetails = value => ({
    type: SET_CHOSEN_TAX_DETAILS,
    payload: value,
});

export const removeTax = id => ({
    type: REMOVE_TAX,
    payload: id,
});

export const addTax = value => ({
    type: ADD_TAX,
    payload: value,
});

export const updateTax = value => ({
    type: UPDATE_TAX,
    payload: value,
});