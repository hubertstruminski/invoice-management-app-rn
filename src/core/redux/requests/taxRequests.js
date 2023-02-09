import axios from "axios"

import { API_URL } from '../../constants/constants';

export const removeTaxById = async (id) => {
    return await axios({
        method: 'DELETE',
        url: `${API_URL}/api/taxes/${id}`,
    })
}

export const addTaxRequest = async (payload) => {
    return await axios({
        method: 'POST',
        url: `${API_URL}/api/taxes`,
        data: payload,
    });
}

export const updateTaxRequest = async (id, payload) => {
    return await axios({
        method: 'PUT',
        url: `${API_URL}/api/taxes/${id}`,
        data: payload,
    });
}