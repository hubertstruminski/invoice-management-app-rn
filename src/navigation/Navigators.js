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
} from '../screens';

const AppStackNavigator = createStackNavigator();

export default () => {
    return (
        <AppStackNavigator.Navigator
            initialRouteName="LoginScreen"
            screenOptions={{ headerShown: false }}
            mode="modal"
        >
            <AppStackNavigator.Screen 
                name="LoginScreen"
                component={LoginScreen}
            />
            <AppStackNavigator.Screen 
                name="RegisterScreen"
                component={RegisterScreen}
            />
            <AppStackNavigator.Screen 
                name="DashboardScreen"
                component={DashboardScreen}
            />
            <AppStackNavigator.Screen 
                name="MyCompaniesScreen"
                component={MyCompaniesScreen}
            />
            <AppStackNavigator.Screen 
                name="CustomersScreen"
                component={CustomersScreen}
            />
            <AppStackNavigator.Screen 
                name="InvoicesScreen"
                component={InvoicesScreen}
            />
            <AppStackNavigator.Screen 
                name="ProductsScreen"
                component={ProductsScreen}
            />
        </AppStackNavigator.Navigator>
    );
}