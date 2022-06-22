import axios from "axios"

import { API_URL } from "../../contants/constants"

export const removeProductById = async (id) => {
    return await axios({
        method: 'DELETE',
        url: `${API_URL}/api/products/${id}`,
    })
}

export const addProductRequest = async (payload) => {
    return await axios({
        method: 'POST',
        url: `${API_URL}/api/products`,
        data: payload,
    });
}

export const updateProductRequest = async (id, payload) => {
    return await axios({
        method: 'PUT',
        url: `${API_URL}/api/products/${id}`,
        data: payload,
    });
}