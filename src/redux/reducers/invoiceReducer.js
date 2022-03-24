import { SET_CHOSEN_INVOICE_DETAILS } from '../actions/types';

const initialState = {
    invoiceDetails: {
        number: '',
        date: '',
        deadline: '',
        customer: null,
        description: '',
    },
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_CHOSEN_INVOICE_DETAILS:
            return {
                ...state,
                invoiceDetails: action.payload,
            };
        default:
            return state;
    }
}