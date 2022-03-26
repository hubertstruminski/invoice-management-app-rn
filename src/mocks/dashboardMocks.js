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
import { languages } from '../internationalization/languages';

export const DASHBOARD_TILES = [
    { 
        title: languages.dashboardTiles.companies, 
        icon: <CompaniesIcon />, 
        label: COMPANY_ENTITY,
    },
    { 
        title: languages.dashboardTiles.customers, 
        icon: <CustomersIcon />, 
        label: CUSTOMER_ENTITY,
    },
    { 
        title: languages.dashboardTiles.invoices, 
        icon: <InvoicesIcon />, 
        label: INVOICE_ENTITY,
    },
    { 
        title: languages.dashboardTiles.products, 
        icon: <ProductsIcon />, 
        label: PRODUCT_ENTITY,
    },
    { 
        title: languages.dashboardTiles.taxes, 
        icon: <TaxesIcon />, 
        label: TAX_ENTITY,
    },
];