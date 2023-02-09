import React, { 
    useRef, 
    useState,
} from 'react';

import { NavigationContainer } from '@react-navigation/native';

import AppStackNavigator from './Navigators';
import { useAuthorization } from '../services';

const AppNavigator = () => {
    const navigation = useRef(null);
    const { 
        setNavigationReady,
        onStateChange,
    } = useAuthorization(navigation?.current);

    return (
        <NavigationContainer 
            onReady={setNavigationReady}
            onStateChange={onStateChange}
            ref={navigation}
        >
            <AppStackNavigator />
        </NavigationContainer>
    );
}

export default AppNavigator;