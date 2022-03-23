import React from 'react';

import { 
    BasicView, 
    Button, 
    Input, 
    ResponsiveText 
} from '../../components';
import { 
    MAIN_GRAY, 
    WHITE 
} from '../../contants/colors';
import styles from '../screenStyle';
import { 
    UserIcon, 
    LockIcon, 
} from '../../../assets';

const LoginScreen = ({
    navigation: {
        navigate,
    },
}) => {
    return (
        <BasicView containerStyle={styles.container}>
            <ResponsiveText 
                text="Invoice Management App"
                color={MAIN_GRAY}
                fontStyle="appTitle"
                customStyle={styles.appTitleContainer}
            />
            <Input 
                leftTitle="Email"
                placeholder="Enter email"
                leftIcon={<UserIcon />}
            />
            <Input 
                leftTitle="Password"
                placeholder="Enter password"
                leftIcon={<LockIcon />}
                containerStyle={styles.lastInputSpace}
            />
            <Button 
                color={WHITE}
                text="Log In"
                onPress={() => navigate('DashboardScreen')}
            />
            <Button 
                color={MAIN_GRAY}
                text="Register an Account"
                backgroundColor="transparent"
                isOutline
                onPress={() => navigate('RegisterScreen')}
            />
        </BasicView>
    );
}

export default LoginScreen;