import axios from 'axios'

import { API_URL } from '../../constants/constants';

export const removeCustomerById = async (id) => {
    return await axios({
        method: 'DELETE',
        url: `${API_URL}/api/customers/${id}`,
    })
}

export const addCustomerRequest = async (payload) => {
    return await axios({
        method: 'POST',
        url: `${API_URL}/api/customers`,
        data: payload,
    });
}

export const updateCustomerRequest = async (id, payload) => {
    return await axios({
        method: 'PUT',
        url: `${API_URL}/api/customers/${id}`,
        data: payload,
    });
}

export const fetchCustomersRequest = async () => {
    return await axios({
        method: 'GET',
        url: `${API_URL}/api/customers`,
    });
}