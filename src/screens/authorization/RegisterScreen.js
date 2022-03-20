import React from 'react';

import { 
    BasicView, 
    Button, 
    Header, 
    Input, 
    ResponsiveText
} from '../../components';
import { 
    MAIN_GRAY, 
    WHITE 
} from '../../contants/colors';
import styles from './authorizationStyle';
import { 
    UserIcon, 
    LockIcon, 
} from '../../../assets';

const RegisterScreen = ({
    navigation: {
        navigate,
    },
}) => {
    return (
        <BasicView 
            containerStyle={styles.container}
            headerComponent={<Header />}
        >
            <ResponsiveText 
                text="Get Started!"
                color={MAIN_GRAY}
                fontStyle="registerTitle"
                customStyle={styles.appTitleContainer}
            />
            <Input 
                leftTitle="Email"
                placeholder="Enter email"
                leftIcon={<UserIcon />}
            />
            <Input 
                leftTitle="Full name"
                placeholder="Enter full name"
            />
            <Input 
                leftTitle="Password"
                placeholder="Enter password"
                leftIcon={<LockIcon />}
            />
            <Input 
                leftTitle="Confirm password"
                placeholder="Enter password"
                leftIcon={<LockIcon />}
                containerStyle={styles.lastInputSpace}
            />   
            <Button 
                color={WHITE}
                text="Create an Account"
            />
        </BasicView>
    );
}

export default RegisterScreen;