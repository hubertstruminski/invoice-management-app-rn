import { 
    ADD_PRODUCT,
    REMOVE_PRODUCT, 
    SET_CHOSEN_PRODUCT_DETAILS,
    UPDATE_PRODUCT, 
} from "./types";

export const setProductDetails = value => ({
    type: SET_CHOSEN_PRODUCT_DETAILS,
    payload: value,
});

export const removeProduct = id => ({
    type: REMOVE_PRODUCT,
    payload: id,
});

export const addProduct = value => ({
    type: ADD_PRODUCT,
    payload: value,
});

export const updateProduct = value => ({
    type: UPDATE_PRODUCT,
    payload: value,
});
