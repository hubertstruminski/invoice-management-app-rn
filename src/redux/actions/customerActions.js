import { SET_CHOSEN_CUSTOMER_DETAILS } from "./types";

export const setCustomerDetails = value => ({
    type: SET_CHOSEN_CUSTOMER_DETAILS,
    payload: value,
});