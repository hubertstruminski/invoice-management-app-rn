import {
    useState,
    useCallback,
    useEffect,
} from 'react';

import { Alert } from 'react-native';

import Toast from 'react-native-toast-message';
import * as EmailValidator from 'email-validator';
import { useNavigation } from '@react-navigation/native';

import { strings } from '../../../core/internationalization/strings';
import { logIn } from '../axios';
import { saveAsyncStorageString } from '../../../core/storage';
import { JWT_TOKEN_KEY } from '../../../core/constants/constants';
import { Screens } from '../../../core/constants/navigator';

export function useLoginScreen(params) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(null);

    const { navigate } = useNavigation();

    useEffect(() => {
        params?.isCreated &&
        Toast.show({
            type: 'success',
            text1: strings.info.successLabel,
            text2: strings.info.accountCreated,
        });
    }, [params?.isCreated]);

    const redirectToRegisterScreen = useCallback(() => navigate(Screens.REGISTER), []);

    const onLogInPress = useCallback(async () => {
        if(email !== '' && password !== '') {
            const isValidEmail = EmailValidator.validate(email);
            if(isValidEmail) {
                try {
                    const response = await logIn(email, password);
                    
                    if(response.status === 200) {
                        await saveAsyncStorageString(JWT_TOKEN_KEY, response.data?.accessToken);
                        navigate(Screens.DASHBOARD);
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

    return {
        email,
        setEmail,
        password,
        setPassword,
        emailError,
        redirectToRegisterScreen,
        onLogInPress,
    };
}