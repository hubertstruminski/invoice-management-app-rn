import { SET_CHOSEN_CUSTOMER_DETAILS } from '../actions/types';

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
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_CHOSEN_CUSTOMER_DETAILS:
            return {
                ...state,
                customerDetails: action.payload,
            };
        default:
            return state;
    }
}