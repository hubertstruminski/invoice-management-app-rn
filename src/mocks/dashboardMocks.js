import React from 'react';

import { 
    CompaniesIcon, 
    CustomersIcon, 
    InvoicesIcon, 
    ProductsIcon, 
    TaxesIcon, 
} from '../../assets';
import { 
    COMPANY_ENTITY, 
    CUSTOMER_ENTITY, 
    INVOICE_ENTITY, 
    PRODUCT_ENTITY, 
    TAX_ENTITY, 
} from '../contants/constants';

export const DASHBOARD_TILES = [
    { 
        title: 'My companies', 
        icon: <CompaniesIcon />, 
        label: COMPANY_ENTITY,
    },
    { 
        title: 'Customers', 
        icon: <CustomersIcon />, 
        label: CUSTOMER_ENTITY,
    },
    { 
        title: 'Invoices', 
        icon: <InvoicesIcon />, 
        label: INVOICE_ENTITY,
    },
    { 
        title: 'Products', 
        icon: <ProductsIcon />, 
        label: PRODUCT_ENTITY,
    },
    { 
        title: 'Taxes', 
        icon: <TaxesIcon />, 
        label: TAX_ENTITY,
    },
];