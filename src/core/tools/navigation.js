import { 
    COMPANY_ENTITY, 
    CUSTOMER_ENTITY, 
    INVOICE_ENTITY, 
    PRODUCT_ENTITY, 
    TAX_ENTITY, 
} from '../constants/constants';
import { Screens } from '../constants/navigator';

export const navigateFromTile = (label, navigate) => {
    switch(label) {
        case COMPANY_ENTITY:
            navigate(Screens.MY_COMPANIES);
            break;
        case CUSTOMER_ENTITY:
            navigate(Screens.CUSTOMERS);
            break;
        case INVOICE_ENTITY:
            navigate(Screens.INVOICES);
            break;
        case PRODUCT_ENTITY:
            navigate(Screens.PRODUCTS);
            break;
        case TAX_ENTITY:
            navigate(Screens.TAXES);
            break;
        default: 
            break;
    }
}