import React, {
    useCallback,
    useEffect,
    useState,
} from 'react';

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
import { 
    validateNewAccountForm, 
    handleFormErrors, 
} from '../../tools';

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

    const createAccount = useCallback(() => {
        const errorObject = validateNewAccountForm(email, fullName, password, confirmPassword);
        console.log(errorObject);
        const isValidModel = handleFormErrors(errorObject, errors, setErrors);
    
        if(isValidModel) {
            navigate('DashboardScreen');
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
            />
            <Input 
                leftTitle={languages.labels.fullName}
                placeholder={languages.placeholders.fullName}
                value={fullName}
                setValue={setFullName}
                withWarning={errors[1] !== null}
                errorText={errors[1]}
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
            />   
            <Button 
                color={WHITE}
                text={languages.buttons.registerAccount}
                onPress={createAccount}
            />
        </BasicView>
    );
}

export default RegisterScreen;