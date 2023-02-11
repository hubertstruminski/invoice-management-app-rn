import React from 'react';

import { View } from 'react-native';

import { 
    BasicView, 
    Button, 
    Input, 
    TouchableLayout,
} from '../../../core/components';
import globalStyles from '../../../core/styles/globalStyles';
import styles from '../styles/screenStyle';
import { 
    UserIcon, 
    LockIcon,
    AppIcon, 
} from '../../../../assets';
import { strings } from '../../../core/internationalization/strings';
import { useLoginScreen } from '../services';
import { useTheme } from '../../../core/services';

const LoginScreen = ({
    route: {
        params,
    },
}) => {
    const {  
        email,
        setEmail,
        password,
        setPassword,
        emailError,
        redirectToRegisterScreen,
        onLogInPress,
    } = useLoginScreen(params);
    const { colors } = useTheme();

    return (
        <BasicView withHeader={false}>
            <TouchableLayout containerStyle={styles.container}>
                <View style={styles.appTitleContainer}>
                    <AppIcon />
                </View>     
                <Input 
                    leftTitle={strings.labels.email}
                    placeholder={strings.placeholders.email}
                    leftIcon={<UserIcon color={colors.BLACK} />}
                    value={email}
                    setValue={setEmail}
                    keyboardType='email-address'
                    withWarning={emailError !== null}
                    errorText={emailError}
                />
                <Input 
                    leftTitle={strings.labels.password}
                    placeholder={strings.placeholders.password}
                    leftIcon={<LockIcon color={colors.BLACK} />}
                    containerStyle={globalStyles.lastInputSpace}
                    value={password}
                    setValue={setPassword}
                    isPassword
                    textContentType='newPassword'
                />  
                <Button 
                    color={colors.WHITE}
                    text={strings.buttons.logIn}
                    onPress={onLogInPress}
                />
                <Button 
                    color={colors.MAIN_GRAY}
                    text={strings.buttons.registerAccount}
                    backgroundColor={colors.TRANSPARENT}
                    isOutline
                    onPress={redirectToRegisterScreen}
                />
            </TouchableLayout>
        </BasicView>
    );
}

export default LoginScreen;