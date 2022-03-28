import { 
    REMOVE_PRODUCT, 
    SET_CHOSEN_PRODUCT_DETAILS, 
} from "./types";

export const setProductDetails = value => ({
    type: SET_CHOSEN_PRODUCT_DETAILS,
    payload: value,
});

export const removeProduct = id => ({
    type: REMOVE_PRODUCT,
    payload: id,
});