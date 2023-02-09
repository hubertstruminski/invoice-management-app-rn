import React, {
    useState,
    useCallback,
    useEffect,
} from 'react';

import { Alert } from 'react-native';

import Toast from 'react-native-toast-message';
import * as EmailValidator from 'email-validator';

import { 
    BasicView, 
    Button, 
    Input, 
    ResponsiveText, 
    TouchableLayout,
} from '../../../core/components';
import globalStyles from '../../../core/styles/globalStyles';
import { 
    MAIN_GRAY, 
    TRANSPARENT, 
    WHITE, 
} from '../../../core/constants/colors';
import styles from '../styles/screenStyle';
import { 
    UserIcon, 
    LockIcon, 
} from '../../../../assets';
import { languages } from '../../../core/internationalization/languages';
import { logIn } from '../axios';
import { saveAsyncStorageString } from '../../../core/storage';
import { JWT_TOKEN_KEY } from '../../../core/constants/constants';

const LoginScreen = ({
    navigation: {
        navigate,
    },
    route: {
        params,
    },
}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(null);

    useEffect(() => {
        params?.isCreated &&
        Toast.show({
            type: 'success',
            text1: languages.info.successLabel,
            text2: languages.info.accountCreated,
        });
    }, [params?.isCreated]);

    const redirectToRegisterScreen = useCallback(() => navigate('RegisterScreen'), []);

    const onLogInPress = useCallback(async () => {
        if(email !== '' && password !== '') {
            const isValidEmail = EmailValidator.validate(email);
            if(isValidEmail) {
                try {
                    const response = await logIn(email, password);
                    
                    if(response.status === 200) {
                        await saveAsyncStorageString(JWT_TOKEN_KEY, response.data?.accessToken);
                        navigate('DashboardScreen');
                    } else {
                        Alert.alert(languages.formErrors.label, languages.formErrors.incorrectCredentials);
                    }
                } catch(error) {
                    console.log(error);
                } finally {
                    setEmailError(null);
                }
            } else {
                setEmailError(languages.formErrors.invalidEmail);
            }
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
                    keyboardType="email-address"
                    withWarning={emailError !== null}
                    errorText={emailError}
                />
                <Input 
                    leftTitle={languages.labels.password}
                    placeholder={languages.placeholders.password}
                    leftIcon={<LockIcon />}
                    containerStyle={globalStyles.lastInputSpace}
                    value={password}
                    setValue={setPassword}
                    isPassword
                    textContentType="newPassword"
                />
                <Button 
                    color={WHITE}
                    text={languages.buttons.logIn}
                    onPress={onLogInPress}
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