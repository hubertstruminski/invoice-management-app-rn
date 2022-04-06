import { PRODUCTS } from '../../mocks';
import { 
    ADD_PRODUCT,
    REMOVE_PRODUCT, 
    SET_CHOSEN_PRODUCT_DETAILS,
    UPDATE_PRODUCT, 
} from '../actions/types';

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
    products: PRODUCTS,
}

export default function(state = initialState, action) {
    switch(action.type) {
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
        default:
            return state;
    }
}