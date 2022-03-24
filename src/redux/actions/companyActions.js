import { 
    SET_CHOSEN_COMPANY_DETAILS,
    SET_COMPANY_CITY, 
    SET_COMPANY_COUNTRY, 
    SET_COMPANY_NAME, 
    SET_COMPANY_POSTALCODE, 
    SET_COMPANY_STREET 
} from "./types";

// export const setCompanyName = value => ({
//     type: SET_COMPANY_NAME,
//     payload: value,
// });

// export const setCompanyStreet = value => ({
//     type: SET_COMPANY_STREET,
//     payload: value,
// });

// export const setCompanyPostalCode = value => ({
//     type: SET_COMPANY_POSTALCODE,
//     payload: value,
// });

// export const setCompanyCity = value => ({
//     type: SET_COMPANY_CITY,
//     payload: value,
// });

// export const setCompanyCountry = value => ({
//     type: SET_COMPANY_COUNTRY,
//     payload: value,
// });

export const setCompanyDetails = value => ({
    type: SET_CHOSEN_COMPANY_DETAILS,
    payload: value,
});
