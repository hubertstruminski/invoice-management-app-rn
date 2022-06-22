import React, {
    useCallback,
    useState,
} from 'react';

import { Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { 
    BasicView, 
    Button, 
    globalStyles, 
    Header, 
    Input, 
    ResponsiveText,
    TouchableLayout
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
import { 
    validateNewAccountForm, 
    handleFormErrors, 
} from '../../tools';
import { createUserAccount } from '../../redux/actions';

const RegisterScreen = ({
    navigation: {
        navigate,
    },
}) => {
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [errors, setErrors] = useState([null , null, null, null]);

    const createAccount = useCallback(async () => {
        const errorObject = validateNewAccountForm(email, fullName, password, confirmPassword);
        const isValidModel = handleFormErrors(errorObject, errors, setErrors);
    
        if(isValidModel) {
            const payload = {
                email, 
                password, 
                fullName,
            };
 
            try {
                const response = await createUserAccount(payload);

                if(response.status === 200) {
                    navigate('LoginScreen', { isCreated: true });
                } 
            } catch(error) {
                console.log(error);
            }
            
        }
    }, [
        email,
        fullName,
        password,
        confirmPassword,
        errors,
    ]);

    return (
        <BasicView 
            containerStyle={styles.container}
            headerComponent={<Header withLogout={false} />}
        >
            <KeyboardAwareScrollView 
                extraHeight={Platform.OS === 'ios' ? 200 : 150}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={globalStyles.alignCenter}
            >
                <TouchableLayout containerStyle={globalStyles.alignCenter}>
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
                    value={email}
                    setValue={setEmail}
                    withWarning={errors[0] !== null}
                    errorText={errors[0]}
                    keyboardType="email-address"
                />
                <Input 
                    leftTitle={languages.labels.fullName}
                    placeholder={languages.placeholders.fullName}
                    value={fullName}
                    setValue={setFullName}
                    withWarning={errors[1] !== null}
                    errorText={errors[1]}
                    autoCapitalize="words"
                />
                <Input 
                    leftTitle={languages.labels.password}
                    placeholder={languages.placeholders.password}
                    value={password}
                    setValue={setPassword}
                    leftIcon={<LockIcon />}
                    withWarning={errors[2] !== null}
                    errorText={errors[2]}
                    isPassword
                    textContentType="newPassword"
                />
                <Input 
                    leftTitle={languages.labels.confirmPassword}
                    placeholder={languages.placeholders.password}
                    value={confirmPassword}
                    setValue={setConfirmPassword}
                    leftIcon={<LockIcon />}
                    containerStyle={styles.lastInputSpace}
                    withWarning={errors[3] !== null}
                    errorText={errors[3]}
                    isPassword
                    textContentType="newPassword"
                />   
                <Button 
                    color={WHITE}
                    text={languages.buttons.registerAccount}
                    onPress={createAccount}
                />
                </TouchableLayout>
            </KeyboardAwareScrollView>
        </BasicView>
    );
}

export default RegisterScreen;