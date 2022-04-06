import React, { 
    useRef, 
} from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppStackNavigator from './Navigators';

const AppNavigator = () => {
    const navigation = useRef(null);

    return (
        <NavigationContainer ref={navigation}>
            <AppStackNavigator />
        </NavigationContainer>
    );
}

export default AppNavigator;