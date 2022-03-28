import { 
    ADD_COMPANY,
    REMOVE_COMPANY,
    SET_CHOSEN_COMPANY_DETAILS,
    UPDATE_COMPANY, 
} from "./types";

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
