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
import styles from '../screenStyle';
import { 
    UserIcon, 
    LockIcon, 
} from '../../../assets';
import { languages } from '../../internationalization/languages';

const RegisterScreen = ({
    navigation: {
        navigate,
    },
}) => {
    return (
        <BasicView 
            containerStyle={styles.container}
            headerComponent={<Header withLogout={false} />}
        >
            <ResponsiveText 
                text={languages.hi}
                color={MAIN_GRAY}
                fontStyle="registerTitle"
                customStyle={styles.appTitleContainer}
            />
            <Input 
                leftTitle={languages.labels.email}
                placeholder={languages.placeholders.email}
                leftIcon={<UserIcon />}
            />
            <Input 
                leftTitle={languages.labels.fullName}
                placeholder={languages.placeholders.fullName}
            />
            <Input 
                leftTitle={languages.labels.password}
                placeholder={languages.placeholders.password}
                leftIcon={<LockIcon />}
            />
            <Input 
                leftTitle={languages.labels.confirmPassword}
                placeholder={languages.placeholders.password}
                leftIcon={<LockIcon />}
                containerStyle={styles.lastInputSpace}
            />   
            <Button 
                color={WHITE}
                text={languages.buttons.registerAccount}
                onPress={() => navigate('DashboardScreen')}
            />
        </BasicView>
    );
}

export default RegisterScreen;