import { 
    CLOSE_OPENED_DROPDOWNS,
} from '../types';

const initialState = {
    isDropdownOpen: false,
}

export default function(state = initialState, action) {
    switch(action.type) {
        case CLOSE_OPENED_DROPDOWNS:
            return {
                ...state,
                isDropdownOpen: action.payload,
            };
        default:
            return state;
    }
}