import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
    DashboardScreen,
    LoginScreen, 
    RegisterScreen,
} from '../screens';
import MyCompaniesScreen from '../screens/company/MyCompaniesScreen';

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
        </AppStackNavigator.Navigator>
    );
}