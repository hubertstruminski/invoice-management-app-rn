import { COMPANIES } from '../../mocks';
import {
    ADD_COMPANY,
    REMOVE_COMPANY,
    SET_CHOSEN_COMPANY_DETAILS, 
    SET_COMPANIES,
    UPDATE_COMPANY, 
} from '../actions/types';

const initialState = {
    companyDetails: {
        id: 0,
        name: '',
        street: '',
        postalCode: '',
        city: '',
        country: '',
    },
    companies: COMPANIES,
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_CHOSEN_COMPANY_DETAILS:
            return {
                ...state,
                companyDetails: action.payload,
            };
        case SET_COMPANIES:
            return {
                ...state,
                companies: action.payload,
            };
        case REMOVE_COMPANY:
            return {
                ...state,
                companies: state.companies.filter(item => item.id !== action.payload),
            };
        case ADD_COMPANY:
            return {
                ...state,
                companies: [...state.companies, action.payload],
            };
        case UPDATE_COMPANY:
            return {
                ...state,
                companies: state.companies.map(item => item.id === action.payload.id ?
                    action.payload : item),
            };
        default:
            return state;
    }
}