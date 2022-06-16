import axios from "axios";

import { API_URL } from "../../contants/constants";

export const createUserAccount = async (payload) => {
    return await axios({
        method: 'POST',
        url: `${API_URL}/api/auth/signup`,
        data: payload,
    })
}