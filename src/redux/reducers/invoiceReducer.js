import { INVOICES } from '../../mocks';
import { 
    ADD_INVOICE,
    REMOVE_INVOICE, 
    SET_CHOSEN_INVOICE_DETAILS,
    UPDATE_INVOICE, 
} from '../actions/types';

const initialState = {
    invoiceDetails: {
        id: 0,
        number: '',
        date: '',
        deadline: '',
        customer: null,
        description: '',
        sentStatus: false,
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
        case ADD_INVOICE:
            return {
                ...state,
                invoices: [...state.invoices, action.payload],
            };
        case UPDATE_INVOICE:
            return {
                ...state,
                invoices: state.invoices.map(item => item.id === action.payload.id ?
                    action.payload : item),
            };
        default:
            return state;
    }
}