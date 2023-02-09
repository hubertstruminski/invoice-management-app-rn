import { 
    COMPANY_ENTITY, 
    CUSTOMER_ENTITY, 
    INVOICE_ENTITY, 
    PRODUCT_ENTITY, 
    TAX_ENTITY, 
} from '../constants/constants';

export const navigateFromTile = (label, navigate) => {
    switch(label) {
        case COMPANY_ENTITY:
            navigate('MyCompaniesScreen');
            break;
        case CUSTOMER_ENTITY:
            navigate('CustomersScreen');
            break;
        case INVOICE_ENTITY:
            navigate('InvoicesScreen');
            break;
        case PRODUCT_ENTITY:
            navigate('ProductsScreen');
            break;
        case TAX_ENTITY:
            navigate('TaxesScreen');
            break;
        default: 
            break;
    }
}