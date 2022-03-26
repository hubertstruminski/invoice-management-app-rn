import React from 'react';

import { 
    BasicView, 
    Button, 
    Input, 
    ResponsiveText 
} from '../../components';
import { 
    MAIN_GRAY, 
    TRANSPARENT, 
    WHITE, 
} from '../../contants/colors';
import styles from '../screenStyle';
import { 
    UserIcon, 
    LockIcon, 
} from '../../../assets';
import { languages } from '../../internationalization/languages';

const LoginScreen = ({
    navigation: {
        navigate,
    },
}) => {
    return (
        <BasicView containerStyle={styles.container}>
            <ResponsiveText 
                text={languages.appTitle}
                color={MAIN_GRAY}
                fontStyle="appTitle"
                customStyle={styles.appTitleContainer}
            />
            <Input 
                leftTitle={languages.labels.email}
                placeholder={languages.placeholders.email}
                leftIcon={<UserIcon />}
            />
            <Input 
                leftTitle={languages.labels.password}
                placeholder={languages.placeholders.password}
                leftIcon={<LockIcon />}
                containerStyle={styles.lastInputSpace}
            />
            <Button 
                color={WHITE}
                text={languages.buttons.logIn}
                onPress={() => navigate('DashboardScreen')}
            />
            <Button 
                color={MAIN_GRAY}
                text={languages.buttons.registerAccount}
                backgroundColor={TRANSPARENT}
                isOutline
                onPress={() => navigate('RegisterScreen')}
            />
        </BasicView>
    );
}

export default LoginScreen;