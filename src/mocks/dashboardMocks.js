import React from 'react';

import { 
    CompaniesIcon, 
    CustomersIcon, 
    InvoicesIcon, 
    ProductsIcon, 
    TaxesIcon, 
} from '../../assets';

export const DASHBOARD_TILES = [
    { 
        title: 'My companies', 
        icon: <CompaniesIcon />, 
        label: 'myCompanies',
    },
    { 
        title: 'Customers', 
        icon: <CustomersIcon />, 
        label: 'customers',
    },
    { 
        title: 'Invoices', 
        icon: <InvoicesIcon />, 
        label: 'invoices',
    },
    { 
        title: 'Products', 
        icon: <ProductsIcon />, 
        label: 'products',
    },
    { 
        title: 'Taxes', 
        icon: <TaxesIcon />, 
        label: 'taxes',
    },
];