import axios from 'axios';
import { API_URL } from '../../contants/constants';

import { 
    ADD_TAX,
    FETCH_TAXES,
    REMOVE_TAX, 
    SET_CHOSEN_TAX_DETAILS,
    UPDATE_TAX, 
} from "./types";

export const setTaxDetails = value => ({
    type: SET_CHOSEN_TAX_DETAILS,
    payload: value,
});

export const removeTax = id => ({
    type: REMOVE_TAX,
    payload: id,
});

export const addTax = value => ({
    type: ADD_TAX,
    payload: value,
});

export const updateTax = value => ({
    type: UPDATE_TAX,
    payload: value,
});

const setTaxes = value => ({
    type: FETCH_TAXES,
    payload: value,
});

export const fetchTaxes = () => {
    return async dispatch => {
        const response = await axios({
            method: 'GET',
            url: `${API_URL}/api/taxes`,
        });

        if(response.status === 200) {
            dispatch(setTaxes(response.data));
        }
    }
}