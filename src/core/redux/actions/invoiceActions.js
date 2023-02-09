import axios from "axios";
import { API_URL } from '../../constants/constants';
import { 
    ADD_INVOICE,
    FETCH_INVOICES,
    REMOVE_INVOICE, 
    SET_CHOSEN_INVOICE_DETAILS,
    UPDATE_INVOICE, 
} from "../types";


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

const setInvoices = value => ({
    type: FETCH_INVOICES,
    payload: value,
});

export const fetchInvoices = () => {
    return async dispatch => {
        const response = await axios({
            method: 'GET',
            url: `${API_URL}/api/invoices`,
        });

        if(response.status === 200) {
            dispatch(setInvoices(response.data));
        }
    }
}