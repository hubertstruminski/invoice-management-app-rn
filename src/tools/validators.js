import ValidProperty from '../classes/ValidProperty';

export const validateNewAccountForm = (email, fullName, password, confirmPassword) => {
    let errors = {}; 

    errors.email = validateEmail(email);
    errors.fullName = validateFullName(fullName);
    errors.password = validatePassword(password);
    errors.confirmPassword = validateConfirmPassword(password, confirmPassword);

    return errors;
}

export const handleFormErrors = (errorObject, errorMessages, setErrorMessages) => {
    let count = 0;
    let errorCount = 0;
    const copy = [...errorMessages];
    for(const key in errorObject) {
        if(!errorObject[key].isValid) {
            errorCount++;
            copy[count] = errorObject[key].message;
        } else {
            copy[count] = null;
        }
        count++;
    }
    
    setErrorMessages(copy);
    return errorCount === 0 ? true : false;
}

export const validateEmail = (email) => {
    if(email === '') {
        return new ValidProperty(false, "Email is required!");
    } else {
        if(!/.{1,}@.{1,}\.{1}.{1,}/.test(email)) {
            return new ValidProperty(false, "Incorrect email!");
        } else {
            return new ValidProperty(true);
        }
    }
}

export const validateFullName = (fullName) => {
    if(fullName === '') {
        return new ValidProperty(false, "Full name is required!");
    } else {
        return new ValidProperty(true);
    }
}

export const validatePassword = (password) => {
    if(password === '') {
        return new ValidProperty(false, "Password is required!");
    } else {
        if(!/.{6,}/.test(password)) {
            return new ValidProperty(false, "Password must have at least 6 characters!");
        } else {
            return new ValidProperty(true);
        }
    }
}

export const validateConfirmPassword = (password, confirmPassword) => {
    if(password !== confirmPassword) {
        return new ValidProperty(false, "Passwords must be the same!");
    } else {
        return new ValidProperty(true);
    }
}