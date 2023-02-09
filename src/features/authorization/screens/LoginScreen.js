import React, {
    useState,
    useCallback,
    useEffect,
} from 'react';

import { Alert, View } from 'react-native';

import Toast from 'react-native-toast-message';
import * as EmailValidator from 'email-validator';

import { 
    BasicView, 
    Button, 
    Input, 
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
    AppIcon, 
} from '../../../../assets';
import { strings } from '../../../core/internationalization/strings';
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
            text1: strings.info.successLabel,
            text2: strings.info.accountCreated,
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
                        Alert.alert(strings.formErrors.label, strings.formErrors.incorrectCredentials);
                    }
                } catch(error) {
                    console.log(error);
                } finally {
                    setEmailError(null);
                }
            } else {
                setEmailError(strings.formErrors.invalidEmail);
            }
        }
    }, [email, password]);

    return (
        <BasicView>
            <TouchableLayout containerStyle={styles.container}>
                <View style={styles.appTitleContainer}>
                    <AppIcon />
                </View>     
                <Input 
                    leftTitle={strings.labels.email}
                    placeholder={strings.placeholders.email}
                    leftIcon={<UserIcon />}
                    value={email}
                    setValue={setEmail}
                    keyboardType="email-address"
                    withWarning={emailError !== null}
                    errorText={emailError}
                />
                <Input 
                    leftTitle={strings.labels.password}
                    placeholder={strings.placeholders.password}
                    leftIcon={<LockIcon />}
                    containerStyle={globalStyles.lastInputSpace}
                    value={password}
                    setValue={setPassword}
                    isPassword
                    textContentType="newPassword"
                />
                <Button 
                    color={WHITE}
                    text={strings.buttons.logIn}
                    onPress={onLogInPress}
                />
                <Button 
                    color={MAIN_GRAY}
                    text={strings.buttons.registerAccount}
                    backgroundColor={TRANSPARENT}
                    isOutline
                    onPress={redirectToRegisterScreen}
                />
            </TouchableLayout>
        </BasicView>
    );
}

export default LoginScreen;