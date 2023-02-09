import {
    useCallback,
    useState,
} from 'react';

import { useNavigation } from '@react-navigation/native';

import { 
    validateNewAccountForm, 
    handleFormErrors, 
} from '../../../core/tools';
import { createUserAccount } from '../axios';
import { validateEmail } from '../../../core/tools/validators';
import { Screens } from '../../../core/constants/navigator';

export function useRegisterScreen() {
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [errors, setErrors] = useState([null , null, null, null]);

    const { navigate } = useNavigation();

    const onEmailChange = (text) => {
        const validEmailObj = { email: validateEmail(text) };
        handleFormErrors(validEmailObj, errors, setErrors);
        setEmail(text);
    }

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
                    navigate(Screens.LOGIN, { isCreated: true });
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

    return {
        email,
        setEmail,
        fullName,
        errors,
        setFullName,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        onEmailChange,
        createAccount,
    };
}