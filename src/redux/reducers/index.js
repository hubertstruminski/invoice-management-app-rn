import { combineReducers } from 'redux';

import dropdownReducer from './dropdownReducer';

export default combineReducers({
    dropdown: dropdownReducer,
});