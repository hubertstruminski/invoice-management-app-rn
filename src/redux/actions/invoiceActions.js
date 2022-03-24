import { SET_CHOSEN_INVOICE_DETAILS } from "./types";


export const setInvoiceDetails = value => ({
    type: SET_CHOSEN_INVOICE_DETAILS,
    payload: value,
});