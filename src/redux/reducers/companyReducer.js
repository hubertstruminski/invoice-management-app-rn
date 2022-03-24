import { SET_CHOSEN_COMPANY_DETAILS } from '../actions/types';

const initialState = {
    companyDetails: {
        name: '',
        street: '',
        postalCode: '',
        city: '',
        country: '',
    },
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_CHOSEN_COMPANY_DETAILS:
            return {
                ...state,
                companyDetails: action.payload,
            };
        // case SET_COMPANY_NAME:
        //     return {
        //         ...state,
        //         companyDetails: {
        //             ...state.companyDetails,
        //             name: action.payload,
        //         },
        //     };
        // case SET_COMPANY_STREET:
        //     return {
        //         ...state,
        //         companyDetails: {
        //             ...state.companyDetails,
        //             street: action.payload,
        //         },
        //     };
        //     case SET_COMPANY_POSTALCODE:
        //     return {
        //         ...state,
        //         companyDetails: {
        //             ...state.companyDetails,
        //             postalCode: action.payload,
        //         },
        //     };
        //     case SET_COMPANY_CITY:
        //     return {
        //         ...state,
        //         companyDetails: {
        //             ...state.companyDetails,
        //             city: action.payload,
        //         },
        //     };
        //     case SET_COMPANY_COUNTRY:
        //     return {
        //         ...state,
        //         companyDetails: {
        //             ...state.companyDetails,
        //             country: action.payload,
        //         },
        //     };
        default:
            return state;
    }
}