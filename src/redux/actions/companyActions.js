import { 
    REMOVE_COMPANY,
    SET_CHOSEN_COMPANY_DETAILS, 
} from "./types";

export const setCompanyDetails = value => ({
    type: SET_CHOSEN_COMPANY_DETAILS,
    payload: value,
});

export const removeCompany = id => ({
    type: REMOVE_COMPANY,
    payload: id,
});
