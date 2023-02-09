import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { 
    Screens, 
    routes, 
    screenOptions,
} from '../constants/navigator';

const AppStackNavigator = createStackNavigator();

export default () => {
    return (
        <AppStackNavigator.Navigator
            initialRouteName={Screens.LOGIN}
            screenOptions={screenOptions}
            mode='modal'
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