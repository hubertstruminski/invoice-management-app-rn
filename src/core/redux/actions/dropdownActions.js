import { CLOSE_OPENED_DROPDOWNS } from '../types';

export const closeAllDropdowns = value => ({
    type: CLOSE_OPENED_DROPDOWNS,
    payload: value,
})