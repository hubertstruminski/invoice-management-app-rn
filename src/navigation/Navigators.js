import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
    CustomersScreen,
    DashboardScreen,
    InvoicesScreen,
    LoginScreen, 
    RegisterScreen,
    MyCompaniesScreen,
    ProductsScreen,
    TaxesScreen,
    AddCompanyScreen,
    AddCustomerScreen,
    AddInvoiceScreen,
    AddTaxScreen,
    AddProductScreen,
    MyCompanyDetailsScreen,
    TaxDetailsScreen,
    ProductDetailsScreen,
    InvoiceDetailsScreen,
    CustomerDetailsScreen,
} from '../screens';

const AppStackNavigator = createStackNavigator();

const routes = [
    { name: 'LoginScreen', component: LoginScreen },
    { name: 'RegisterScreen', component: RegisterScreen },
    { name: 'DashboardScreen', component: DashboardScreen },
    { name: 'MyCompaniesScreen', component: MyCompaniesScreen },
    { name: 'CustomersScreen', component: CustomersScreen },
    { name: 'InvoicesScreen', component: InvoicesScreen },
    { name: 'ProductsScreen', component: ProductsScreen },
    { name: 'TaxesScreen', component: TaxesScreen },
    { name: 'AddCompanyScreen', component: AddCompanyScreen },
    { name: 'AddCustomerScreen', component: AddCustomerScreen },
    { name: 'AddInvoiceScreen', component: AddInvoiceScreen },
    { name: 'AddTaxScreen', component: AddTaxScreen },
    { name: 'AddProductScreen', component: AddProductScreen },
    { name: 'MyCompanyDetailsScreen', component: MyCompanyDetailsScreen },
    { name: 'TaxDetailsScreen', component: TaxDetailsScreen },
    { name: 'ProductDetailsScreen', component: ProductDetailsScreen },
    { name: 'InvoiceDetailsScreen', component: InvoiceDetailsScreen },
    { name: 'CustomerDetailsScreen', component: CustomerDetailsScreen }, 
];

export default () => {
    return (
        <AppStackNavigator.Navigator
            initialRouteName="LoginScreen"
            screenOptions={{ headerShown: false }}
            mode="modal"
        >
            {routes.map((item, index) => (
                <AppStackNavigator.Screen 
                    key={index}
                    name={item.name}
                    component={item.component}
                />
            ))}
        </AppStackNavigator.Navigator>
    );
}