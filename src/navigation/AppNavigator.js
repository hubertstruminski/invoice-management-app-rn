import React, { 
    useRef, 
} from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppStackNavigator from './Navigators';
import { useAuthorization } from '../services/authorization';

const AppNavigator = () => {
    const navigation = useRef(null);
    const { checkIfJWTExpired } = useAuthorization(navigation?.current);

    return (
        <NavigationContainer 
            onStateChange={checkIfJWTExpired} 
            ref={navigation}
        >
            <AppStackNavigator />
        </NavigationContainer>
    );
}

export default AppNavigator;