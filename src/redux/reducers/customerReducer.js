import { CUSTOMERS } from '../../mocks';
import { 
    REMOVE_CUSTOMER, 
    SET_CHOSEN_CUSTOMER_DETAILS, 
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
    customers: CUSTOMERS
}

export default function(state = initialState, action) {
    switch(action.type) {
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
        default:
            return state;
    }
}