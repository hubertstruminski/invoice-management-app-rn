import { 
    REMOVE_TAX, 
    SET_CHOSEN_TAX_DETAILS, 
} from "./types";

export const setTaxDetails = value => ({
    type: SET_CHOSEN_TAX_DETAILS,
    payload: value,
});

export const removeTax = id => ({
    type: REMOVE_TAX,
    payload: id,
});