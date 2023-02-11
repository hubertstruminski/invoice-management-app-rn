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

export const DASHBOARD_TILES = (colors) => ([
    { 
        title: strings.dashboardTiles.companies, 
        icon: <CompaniesIcon color={colors.BLACK} />, 
        label: COMPANY_ENTITY,
    },
    { 
        title: strings.dashboardTiles.customers, 
        icon: <CustomersIcon color={colors.BLACK}  />, 
        label: CUSTOMER_ENTITY,
    },
    { 
        title: strings.dashboardTiles.invoices, 
        icon: <InvoicesIcon color={colors.BLACK}  />, 
        label: INVOICE_ENTITY,
    },
    { 
        title: strings.dashboardTiles.products, 
        icon: <ProductsIcon color={colors.BLACK}  />, 
        label: PRODUCT_ENTITY,
    },
    { 
        title: strings.dashboardTiles.taxes, 
        icon: <TaxesIcon color={colors.BLACK}  />, 
        label: TAX_ENTITY,
    },
]);