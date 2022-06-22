import axios from "axios"

import { API_URL } from "../../contants/constants"

export const removeInvoiceById = async (id) => {
    return await axios({
        method: 'DELETE',
        url: `${API_URL}/api/invoices/${id}`,
    })
}

export const addInvoiceRequest = async (payload) => {
    return await axios({
        method: 'POST',
        url: `${API_URL}/api/invoices`,
        data: payload,
    });
}

export const updateInvoiceRequest = async (id, payload) => {
    return await axios({
        method: 'PUT',
        url: `${API_URL}/api/invoices/${id}`,
        data: payload,
    });
}