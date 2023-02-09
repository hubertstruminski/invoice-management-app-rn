import { combineReducers } from 'redux';

import dropdownReducer from './dropdownReducer';
import companyReducer from './companyReducer';
import taxReducer from './taxReducer';
import productReducer from './productReducer';
import invoiceReducer from './invoiceReducer';
import customerReducer from './customerReducer';

export default combineReducers({
    dropdown: dropdownReducer,
    company: companyReducer,
    tax: taxReducer,
    product: productReducer,
    invoice: invoiceReducer,
    customer: customerReducer,
});