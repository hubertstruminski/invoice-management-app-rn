import { TAXES } from '../../mocks';
import { 
    ADD_TAX,
    REMOVE_TAX, 
    SET_CHOSEN_TAX_DETAILS,
    UPDATE_TAX, 
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
        case ADD_TAX:
            return {
                ...state,
                taxes: [...state.taxes, action.payload],
            };
        case UPDATE_TAX:
            return {
                ...state,
                taxes: state.taxes.map(item => item.id === action.payload.id ?
                    action.payload : item),
            };
        default:
            return state;
    }
}