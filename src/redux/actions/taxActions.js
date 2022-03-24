import { SET_CHOSEN_TAX_DETAILS } from "./types";

export const setTaxDetails = value => ({
    type: SET_CHOSEN_TAX_DETAILS,
    payload: value,
});