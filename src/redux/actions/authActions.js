import axios from "axios";

import { API_URL } from "../../contants/constants";

export const createUserAccount = async (payload) => {
    return await axios({
        method: 'POST',
        url: `${API_URL}/api/auth/signup`,
        data: payload,
    })
}

export const logIn = async (email, password) => {
    return await axios({
        method: 'POST',
        url: `${API_URL}/api/auth/signin`,
        data: {
            email,
            password,
        },
    });
}