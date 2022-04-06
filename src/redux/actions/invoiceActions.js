import { 
    ADD_INVOICE,
    REMOVE_INVOICE, 
    SET_CHOSEN_INVOICE_DETAILS,
    UPDATE_INVOICE, 
} from "./types";


export const setInvoiceDetails = value => ({
    type: SET_CHOSEN_INVOICE_DETAILS,
    payload: value,
});

export const removeInvoice = id => ({
    type: REMOVE_INVOICE,
    payload: id,
});

export const addInvoice = value => ({
    type: ADD_INVOICE,
    payload: value,
});

export const updateInvoice = value => ({
    type: UPDATE_INVOICE,
    payload: value,
});