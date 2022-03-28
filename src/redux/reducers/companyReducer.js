import { COMPANIES } from '../../mocks';
import {
    REMOVE_COMPANY,
    SET_CHOSEN_COMPANY_DETAILS, 
    SET_COMPANIES, 
} from '../actions/types';

const initialState = {
    companyDetails: {
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
        default:
            return state;
    }
}