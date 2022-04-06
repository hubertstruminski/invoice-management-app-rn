import ValidProperty from '../classes/ValidProperty';
import { languages } from '../internationalization/languages';

export const validateNewAccountForm = (email, fullName, password, confirmPassword) => {
    const errors = {}; 

    errors.email = validateEmail(email);
    errors.fullName = validateString(fullName, languages.labels.fullName);
    errors.password = validatePassword(password);
    errors.confirmPassword = validateConfirmPassword(password, confirmPassword);

    return errors;
}

export const validateNewCompanyForm = (companyName, street, postalCode, city, country) => {
    const errors = {};

    errors.companyName = validateString(companyName, languages.labels.companyName);
    errors.street = validateString(street, languages.labels.street);
    errors.postalCode = validatePostalCode(postalCode);
    errors.city = validateString(city, languages.labels.city);
    errors.country = validateString(country, languages.labels.country);

    return errors;
}

export const validateNewTaxForm = (name, amount) => {
    const errors = {};

    errors.name = validateString(name, languages.labels.name);
    errors.amount = validateString(amount, languages.labels.amount);

    return errors;
}

export const validateNewCustomerForm = (fullName, email, street, city, nip) => {
    const errors = {};
    
    errors.fullName = validateString(fullName, languages.labels.fullName);
    errors.email = validateEmail(email);
    errors.street = validateString(street, languages.labels.street);
    errors.city = validateString(city, languages.labels.city);
    errors.nip = validateNIP(nip);

    return errors;
}

export const validateNewProductForm = (name, price, amount, unit) => {
    const errors = {};

    errors.name = validateString(name, languages.labels.name);
    errors.price = validatePrice(price);
    errors.amount = validateAmount(amount);
    errors.unit = validateString(unit, languages.labels.unit);

    return errors;
}

export const validateNewInvoiceForm = (number, date, deadline, customerId, chosenProducts) => {
    const errors = {};

    errors.number = validateInvoiceNumber(number);
    errors.date = validateDateRange(date, deadline);
    errors.customerId = validateEntityObject(customerId, languages.labels.customer);
    errors.chosenProducts = validateInvoiceProductsList(chosenProducts);

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
        return new ValidProperty(false, languages.formErrors.requiredEmail);
    } else {
        if(!/.{1,}@.{1,}\.{1}.{1,}/.test(email)) {
            return new ValidProperty(false, languages.formErrors.invalidEmail);
        } else {
            return new ValidProperty(true);
        }
    }
}

export const validateString = (value, fieldName) => {
    if(value === '') {
        return new ValidProperty(false, fieldName + " " + languages.formErrors.isRequired);
    } else {
        return new ValidProperty(true);
    }
}

export const validatePassword = (password) => {
    if(password === '') {
        return new ValidProperty(false, languages.formErrors.requiredPassword);
    } else {
        if(!/.{6,}/.test(password)) {
            return new ValidProperty(false, languages.formErrors.passwordRules);
        } else {
            return new ValidProperty(true);
        }
    }
}

export const validateConfirmPassword = (password, confirmPassword) => {
    if(password !== confirmPassword) {
        return new ValidProperty(false, languages.formErrors.samePasswords);
    } else {
        return new ValidProperty(true);
    }
}

export const validatePostalCode = (postalCode) => {
    if(postalCode === '') {
        return new ValidProperty(false, languages.formErrors.requiredPostalCode);
    } else {
        if(!/\d{2}-\d{3}/.test(postalCode)) {
            return new ValidProperty(false, languages.formErrors.postalCodeFormat);
        } else {
            return new ValidProperty(true);
        }
    }
}

export const validateNIP = (nip) => {
    if(nip === '') {
        return new ValidProperty(false, languages.formErrors.requiredNip);
    } else {
        if(!/\d{10}/.test(nip)) {
            return new ValidProperty(false, languages.formErrors.nipFormat);
        } else {
            return new ValidProperty(true);
        }
    }
}

export const validatePrice = (price) => {
    if(price === '') {
        return new ValidProperty(false, languages.formErrors.requiredPrice);
    } else {
        if(!/\d{1,}\.\d{2}/.test(price)) {
            return new ValidProperty(false, languages.formErrors.priceFormat);
        } else {
            return new ValidProperty(true);
        }
    }
}

export const validateAmount = (amount) => {
    if(amount === '') {
        return new ValidProperty(false, languages.formErrors.requiredAmount);
    } else {
        if(!/\d{1,}/.test(amount)) {
            return new ValidProperty(false, languages.formErrors.amountFormat);
        } else {
            return new ValidProperty(true);
        }
    }
}

export const validateInvoiceNumber = (number) => {
    if(number === '') {
        return new ValidProperty(false, languages.formErrors.requiredNumber);
    } else {
        if(!/\d{6}/.test(number)) {
            return new ValidProperty(false, languages.formErrors.numberFormat);
        } else {
            return new ValidProperty(true);
        }
    }
}

export const validateInvoiceProductsList = (products) => {
    if(products.length === 0) {
        return new ValidProperty(false, languages.formErrors.requiredProducts);
    } else {
        return new ValidProperty(true);
    }
}

export const validateDateRange = (date, deadline) => {
    if(date > deadline) {
        return new ValidProperty(false, languages.formErrors.dateDeadlineRule);
    } else {
        return new ValidProperty(true);
    }
}

export const validateEntityObject = (customerId, fieldName) => {
    if(customerId === null) {
        return new ValidProperty(false, fieldName + " " + languages.formErrors.isRequired);
    } else {
        return new ValidProperty(true);
    }
}