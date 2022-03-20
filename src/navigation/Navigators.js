import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
    LoginScreen, 
    RegisterScreen,
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
        </AppStackNavigator.Navigator>
    );
}