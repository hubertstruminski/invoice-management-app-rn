import {  
    LoginScreen,
    RegisterScreen,
} from '../../features/authorization';
import {  
    AddCompanyScreen,
    MyCompaniesScreen,
    MyCompanyDetailsScreen,
} from '../../features/company';
import {  
    AddCustomerScreen,
    CustomerDetailsScreen,
    CustomersScreen,
} from '../../features/customers';
import { DashboardScreen } from '../../features/dashboard';
import {  
    AddInvoiceScreen,
    InvoiceDetailsScreen,
    InvoicesScreen,
} from '../../features/invoices';
import {  
    AddProductScreen,
    ProductDetailsScreen,
    ProductsScreen,
} from '../../features/products';
import {  
    AddTaxScreen,
    TaxDetailsScreen,
    TaxesScreen,
} from '../../features/taxes';

export const Screens = {
    LOGIN: 'LoginScreen',
    REGISTER: 'RegisterScreen',
    DASHBOARD: 'DashboardScreen',
    MY_COMPANIES: 'MyCompaniesScreen',
    CUSTOMERS: 'CustomersScreen',
    INVOICES: 'InvoicesScreen',
    PRODUCTS: 'ProductsScreen',
    TAXES: 'TaxesScreen',
    ADD_COMPANY: 'AddCompanyScreen',
    ADD_CUSTOMER: 'AddCustomerScreen',
    ADD_INVOICE: 'AddInvoiceScreen',
    ADD_TAX: 'AddTaxScreen',
    ADD_PRODUCT: 'AddProductScreen',
    MY_COMPANY_DETAILS: 'MyCompanyDetailsScreen',
    TAX_DETAILS: 'TaxDetailsScreen',
    PRODUCT_DETAILS: 'ProductDetailsScreen',
    INVOICE_DETAILS: 'InvoiceDetailsScreen',
    CUSTOMER_DETAILS: 'CustomerDetailsScreen',
};

export const routes = [
    { name: Screens.LOGIN, component: LoginScreen },
    { name: Screens.REGISTER, component: RegisterScreen },
    { name: Screens.DASHBOARD, component: DashboardScreen },
    { name: Screens.MY_COMPANIES, component: MyCompaniesScreen },
    { name: Screens.CUSTOMERS, component: CustomersScreen },
    { name: Screens.INVOICES, component: InvoicesScreen },
    { name: Screens.PRODUCTS, component: ProductsScreen },
    { name: Screens.TAXES, component: TaxesScreen },
    { name: Screens.ADD_COMPANY, component: AddCompanyScreen },
    { name: Screens.ADD_CUSTOMER, component: AddCustomerScreen },
    { name: Screens.ADD_INVOICE, component: AddInvoiceScreen },
    { name: Screens.ADD_TAX, component: AddTaxScreen },
    { name: Screens.ADD_PRODUCT, component: AddProductScreen },
    { name: Screens.MY_COMPANY_DETAILS, component: MyCompanyDetailsScreen },
    { name: Screens.TAX_DETAILS, component: TaxDetailsScreen },
    { name: Screens.PRODUCT_DETAILS, component: ProductDetailsScreen },
    { name: Screens.INVOICE_DETAILS, component: InvoiceDetailsScreen },
    { name: Screens. CUSTOMER_DETAILS, component: CustomerDetailsScreen }, 
];

export const screenOptions = {
    headerShown: false,
};