import { CUSTOMERS } from '../../mocks';
import { 
    ADD_CUSTOMER,
    FETCH_CUSTOMERS,
    REMOVE_CUSTOMER, 
    SET_CHOSEN_CUSTOMER_DETAILS,
    UPDATE_CUSTOMER, 
} from '../actions/types';

const initialState = {
    customerDetails: {
        id: 0,
        fullName: '',
        email: '',
        phoneNumber: '',
        nip: '',
        street: '',
        city: '',
        country: '',
        description: '',
    },
    customers: [],
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_CUSTOMERS:
            return {
                ...state,
                customers: action.payload,
            };
        case SET_CHOSEN_CUSTOMER_DETAILS:
            return {
                ...state,
                customerDetails: action.payload,
            };
        case REMOVE_CUSTOMER:
            return {
                ...state,
                customers: state.customers.filter(item => item.id !== action.payload),
            };
        case ADD_CUSTOMER:
            return {
                ...state,
                customers: [...state.customers, action.payload],
            };
        case UPDATE_CUSTOMER:
            return {
                ...state,
                customers: state.customers.map(item => item.id === action.payload.id ?
                    action.payload : item),
            };
        default:
            return state;
    }
}