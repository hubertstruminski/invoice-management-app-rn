import { INVOICES } from '../../mocks';
import { 
    REMOVE_INVOICE, 
    SET_CHOSEN_INVOICE_DETAILS, 
} from '../actions/types';

const initialState = {
    invoiceDetails: {
        number: '',
        date: '',
        deadline: '',
        customer: null,
        description: '',
    },
    invoices: INVOICES,
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_CHOSEN_INVOICE_DETAILS:
            return {
                ...state,
                invoiceDetails: action.payload,
            };
        case REMOVE_INVOICE:
            return {
                ...state,
                invoices: state.invoices.filter(item => item.id !== action.payload),
            };
        default:
            return state;
    }
}