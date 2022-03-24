import { SET_CHOSEN_TAX_DETAILS } from '../actions/types';

const initialState = {
    taxDetails: {
        name: '',
        amount: 0,
        description: '',
    },
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_CHOSEN_TAX_DETAILS:
            return {
                ...state,
                taxDetails: action.payload,
            };
        default:
            return state;
    }
}