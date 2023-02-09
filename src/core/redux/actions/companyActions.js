import { fetchCompaniesRequest } from '../requests';
import { 
    ADD_COMPANY,
    FETCH_COMPANIES,
    REMOVE_COMPANY,
    SET_CHOSEN_COMPANY_DETAILS,
    UPDATE_COMPANY, 
} from '../types';

export const setCompanyDetails = value => ({
    type: SET_CHOSEN_COMPANY_DETAILS,
    payload: value,
});

export const removeCompany = id => ({
    type: REMOVE_COMPANY,
    payload: id,
});

export const addCompany = value => ({
    type: ADD_COMPANY,
    payload: value,
});

export const updateCompany = value => ({
    type: UPDATE_COMPANY,
    payload: value,
});

const setCompanies = value => ({
    type: FETCH_COMPANIES,
    payload: value,
});

export const fetchCompanies = () => {
    return async dispatch => {
        const response = await fetchCompaniesRequest();

        if(response.status === 200) {
            dispatch(setCompanies(response.data));
        }
    }
};
