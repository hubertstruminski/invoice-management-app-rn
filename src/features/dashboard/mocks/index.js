import React from 'react';

import { 
    CompaniesIcon, 
    CustomersIcon, 
    InvoicesIcon, 
    ProductsIcon, 
    TaxesIcon, 
} from '../../../../assets';
import { 
    COMPANY_ENTITY, 
    CUSTOMER_ENTITY, 
    INVOICE_ENTITY, 
    PRODUCT_ENTITY, 
    TAX_ENTITY, 
} from '../../../core/constants/constants';
import { strings } from '../../../core/internationalization/strings';

export const DASHBOARD_TILES = [
    { 
        title: strings.dashboardTiles.companies, 
        icon: <CompaniesIcon />, 
        label: COMPANY_ENTITY,
    },
    { 
        title: strings.dashboardTiles.customers, 
        icon: <CustomersIcon />, 
        label: CUSTOMER_ENTITY,
    },
    { 
        title: strings.dashboardTiles.invoices, 
        icon: <InvoicesIcon />, 
        label: INVOICE_ENTITY,
    },
    { 
        title: strings.dashboardTiles.products, 
        icon: <ProductsIcon />, 
        label: PRODUCT_ENTITY,
    },
    { 
        title: strings.dashboardTiles.taxes, 
        icon: <TaxesIcon />, 
        label: TAX_ENTITY,
    },
];