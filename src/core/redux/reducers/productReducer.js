import { UNITS } from '../../../features/products/mocks';
import { 
    ADD_PRODUCT,
    FETCH_PRODUCTS,
    REMOVE_PRODUCT, 
    SET_CHOSEN_PRODUCT_DETAILS,
    SET_CHOSEN_UNIT,
    SET_IS_UNIT_MODAL_VISIBLE,
    UPDATE_PRODUCT, 
} from '../types';

const initialState = {
    productDetails: {
        id: 0,
        name: '',
        price: 0,
        amount: 0, 
        discount: 0,
        unit: '',
        invoice: null,
        customer: null,
        tax: null,
        description: '',
    },
    products: [],
    chosenUnit: 0,
    isModalVisible: false,
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            };
        case SET_CHOSEN_PRODUCT_DETAILS:
            return {
                ...state,
                productDetails: action.payload,
            };
        case REMOVE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(item => item.id !== action.payload),
            };
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload],
            };
        case UPDATE_PRODUCT:
            return {
                ...state,
                products: state.products.map(item => item.id === action.payload.id ?
                    action.payload : item),
            }; 
        case SET_CHOSEN_UNIT:
            return {
                ...state,
                chosenUnit: action.payload,
            };
        case SET_IS_UNIT_MODAL_VISIBLE:
            return {
                ...state,
                isModalVisible: action.payload,
            };
        default:
            return state;
    }
}