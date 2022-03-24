import { SET_CHOSEN_PRODUCT_DETAILS } from "./types";

export const setProductDetails = value => ({
    type: SET_CHOSEN_PRODUCT_DETAILS,
    payload: value,
});