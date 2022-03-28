import { TAXES } from '../../mocks';
import { 
    REMOVE_TAX, 
    SET_CHOSEN_TAX_DETAILS, 
} from '../actions/types';

const initialState = {
    taxDetails: {
        id: 0,
        name: '',
        amount: 0,
        description: '',
    },
    taxes: TAXES,
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_CHOSEN_TAX_DETAILS:
            return {
                ...state,
                taxDetails: action.payload,
            };
        case REMOVE_TAX:
            return {
                ...state,
                taxes: state.taxes.filter(item => item.id !== action.payload),
            };
        default:
            return state;
    }
}