import axios from 'axios'

import { API_URL } from '../../constants/constants';

export const removeCompanyById = async (id) => {
    return await axios({
        method: 'DELETE',
        url: `${API_URL}/api/companies/${id}`,
    });
}

export const addCompanyRequest = async (payload) => {
    return await axios({
        method: 'POST',
        url: `${API_URL}/api/companies`,
        data: payload,
    });
}

export const updateCompanyRequest = async (id, payload) => {
    return await axios({
        method: 'PUT',
        url: `${API_URL}/api/companies/${id}`,
        data: payload,
    });
}

export const fetchCompaniesRequest = async () => {
    return await axios({
        method: 'GET',
        url: `${API_URL}/api/companies`,
    });
};