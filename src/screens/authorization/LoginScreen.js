import React, {
    useState,
    useCallback,
} from 'react';
import { Alert } from 'react-native';

import { 
    BasicView, 
    Button, 
    Input, 
    ResponsiveText, 
    TouchableLayout,
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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const redirectToRegisterScreen = useCallback(() => navigate('RegisterScreen'), []);

    const logIn = useCallback(() => {
        if(email.toLowerCase() === 'admin@gmail.com' && password === '123456') {
            navigate('DashboardScreen');
        } else {
            Alert.alert(languages.formErrors.label, languages.formErrors.incorrectCredentials);
        }
    }, [email, password]);

    return (
        <BasicView>
            <TouchableLayout containerStyle={styles.container}>
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
                    value={email}
                    setValue={setEmail}
                />
                <Input 
                    leftTitle={languages.labels.password}
                    placeholder={languages.placeholders.password}
                    leftIcon={<LockIcon />}
                    containerStyle={styles.lastInputSpace}
                    value={password}
                    setValue={setPassword}
                    isPassword
                />
                <Button 
                    color={WHITE}
                    text={languages.buttons.logIn}
                    onPress={logIn}
                />
                <Button 
                    color={MAIN_GRAY}
                    text={languages.buttons.registerAccount}
                    backgroundColor={TRANSPARENT}
                    isOutline
                    onPress={redirectToRegisterScreen}
                />
            </TouchableLayout>
        </BasicView>
    );
}

export default LoginScreen;