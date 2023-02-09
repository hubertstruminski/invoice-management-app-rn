import { fetchCustomersRequest } from '../requests';
import { 
    ADD_CUSTOMER,
    FETCH_CUSTOMERS,
    REMOVE_CUSTOMER, 
    SET_CHOSEN_CUSTOMER_DETAILS,
    UPDATE_CUSTOMER, 
} from '../types';

export const setCustomerDetails = value => ({
    type: SET_CHOSEN_CUSTOMER_DETAILS,
    payload: value,
});

export const removeCustomer = id => ({
    type: REMOVE_CUSTOMER,
    payload: id,
});

export const addCustomer = value => ({
    type: ADD_CUSTOMER,
    payload: value,
});

export const updateCustomer = value => ({
    type: UPDATE_CUSTOMER,
    payload: value,
});

const setCustomers = value => ({
    type: FETCH_CUSTOMERS,
    payload: value,
});

export const fetchCustomers = () => {
    return async dispatch => {
        const response = await fetchCustomersRequest();

        if(response.status === 200) {
            dispatch(setCustomers(response.data));
        }
    }
}