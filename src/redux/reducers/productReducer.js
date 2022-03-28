import { PRODUCTS } from '../../mocks';
import { 
    REMOVE_PRODUCT, 
    SET_CHOSEN_PRODUCT_DETAILS, 
} from '../actions/types';

const initialState = {
    productDetails: {
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
        default:
            return state;
    }
}