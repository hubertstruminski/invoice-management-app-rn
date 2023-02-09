import { 
    ADD_INVOICE,
    FETCH_INVOICES,
    REMOVE_INVOICE, 
    SET_CHOSEN_INVOICE_DETAILS,
    UPDATE_INVOICE, 
} from '../types';

const initialState = {
    invoiceDetails: {
        id: 0,
        number: '',
        date: '',
        deadline: '',
        customer: null,
        description: '',
        sentStatus: false,
        products: [],
    },
    invoices: [],
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_INVOICES:
            return {
                ...state,
                invoices: action.payload,
            };
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