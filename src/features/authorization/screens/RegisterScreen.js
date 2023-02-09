import React from 'react';

import { Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { 
    BasicView, 
    Button, 
    Header, 
    Input, 
    ResponsiveText,
    TouchableLayout
} from '../../../core/components';
import globalStyles from '../../../core/styles/globalStyles';
import { 
    MAIN_GRAY, 
    WHITE 
} from '../../../core/constants/colors';
import styles from '../styles/screenStyle';
import { 
    UserIcon, 
    LockIcon, 
} from '../../../../assets';
import { strings } from '../../../core/internationalization/strings';
import { useRegisterScreen } from '../services';

const RegisterScreen = () => {
    const {  
        email,
        fullName,
        setFullName,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        onEmailChange,
        createAccount,
        errors,
    } = useRegisterScreen();

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
                    text={strings.hi}
                    color={MAIN_GRAY}
                    fontStyle='registerTitle'
                    customStyle={styles.appTitleContainer}
                />
                <Input 
                    leftTitle={strings.labels.email}
                    placeholder={strings.placeholders.email}
                    leftIcon={<UserIcon />}
                    value={email}
                    setValue={onEmailChange}
                    withWarning={errors[0] !== null}
                    errorText={errors[0]}
                    keyboardType='email-address'
                />
                <Input 
                    leftTitle={strings.labels.fullName}
                    placeholder={strings.placeholders.fullName}
                    value={fullName}
                    setValue={setFullName}
                    withWarning={errors[1] !== null}
                    errorText={errors[1]}
                    autoCapitalize='words'
                />
                <Input 
                    leftTitle={strings.labels.password}
                    placeholder={strings.placeholders.password}
                    value={password}
                    setValue={setPassword}
                    leftIcon={<LockIcon />}
                    withWarning={errors[2] !== null}
                    errorText={errors[2]}
                    isPassword
                    textContentType='newPassword'
                />
                <Input 
                    leftTitle={strings.labels.confirmPassword}
                    placeholder={strings.placeholders.password}
                    value={confirmPassword}
                    setValue={setConfirmPassword}
                    leftIcon={<LockIcon />}
                    containerStyle={globalStyles.lastInputSpace}
                    withWarning={errors[3] !== null}
                    errorText={errors[3]}
                    isPassword
                    textContentType='newPassword'
                />   
                <Button 
                    color={WHITE}
                    text={strings.buttons.registerAccount}
                    onPress={createAccount}
                />
                </TouchableLayout>
            </KeyboardAwareScrollView>
        </BasicView>
    );
}

export default RegisterScreen;