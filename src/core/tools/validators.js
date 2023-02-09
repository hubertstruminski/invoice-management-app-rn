import * as EmailValidator from 'email-validator';

import ValidProperty from '../classes/ValidProperty';
import { strings } from '../internationalization/strings';

export const validateNewAccountForm = (email, fullName, password, confirmPassword) => {
    const errors = {}; 

    errors.email = validateEmail(email);
    errors.fullName = validateString(fullName, strings.labels.fullName);
    errors.password = validatePassword(password);
    errors.confirmPassword = validateConfirmPassword(password, confirmPassword);

    return errors;
}

export const validateNewCompanyForm = (companyName, street, postalCode, city, country) => {
    const errors = {};

    errors.companyName = validateString(companyName, strings.labels.companyName);
    errors.street = validateString(street, strings.labels.street);
    errors.postalCode = validatePostalCode(postalCode);
    errors.city = validateString(city, strings.labels.city);
    errors.country = validateString(country, strings.labels.country);

    return errors;
}

export const validateNewTaxForm = (name, amount) => {
    const errors = {};

    errors.name = validateString(name, strings.labels.name);
    errors.amount = validateString(amount, strings.labels.amount);

    return errors;
}

export const validateNewCustomerForm = (fullName, email, street, city, nip) => {
    const errors = {};
    
    errors.fullName = validateString(fullName, strings.labels.fullName);
    errors.email = validateEmail(email);
    errors.street = validateString(street, strings.labels.street);
    errors.city = validateString(city, strings.labels.city);
    errors.nip = validateNIP(nip);

    return errors;
}

export const validateNewProductForm = (name, price, amount, unit, discount, taxId) => {
    const errors = {};

    errors.name = validateString(name, strings.labels.name);
    errors.price = validatePrice(price);
    errors.amount = validateAmount(amount);
    errors.unit = validateString(unit, strings.labels.unit);
    errors.discount = validateDiscount(discount);
    errors.taxId = validateEntityObject(taxId, strings.labels.tax);

    return errors;
}

export const validateNewInvoiceForm = (number, 
    // date, 
    deadline, customerId, chosenProducts) => {
    const errors = {};

    errors.number = validateInvoiceNumber(number);
    errors.date = validateDateRange(new Date(), deadline);
    errors.customerId = validateEntityObject(customerId, strings.labels.customer);
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
        return new ValidProperty(false, strings.formErrors.requiredEmail);
    } else {
        if(!EmailValidator.validate(email)) {
            return new ValidProperty(false, strings.formErrors.invalidEmail);
        } else {
            return new ValidProperty(true);
        }
    }
}

export const validateString = (value, fieldName) => {
    if(value === '') {
        return new ValidProperty(false, fieldName + ' ' + strings.formErrors.isRequired);
    } else {
        return new ValidProperty(true);
    }
}

export const validatePassword = (password) => {
    if(password === '') {
        return new ValidProperty(false, strings.formErrors.requiredPassword);
    } else {
        if(!/.{6,}/.test(password)) {
            return new ValidProperty(false, strings.formErrors.passwordRules);
        } else {
            return new ValidProperty(true);
        }
    }
}

export const validateConfirmPassword = (password, confirmPassword) => {
    if(password !== confirmPassword) {
        return new ValidProperty(false, strings.formErrors.samePasswords);
    } else {
        return new ValidProperty(true);
    }
}

export const validatePostalCode = (postalCode) => {
    if(postalCode === '') {
        return new ValidProperty(false, strings.formErrors.requiredPostalCode);
    } else {
        if(!/\d{2}-\d{3}/.test(postalCode)) {
            return new ValidProperty(false, strings.formErrors.postalCodeFormat);
        } else {
            return new ValidProperty(true);
        }
    }
}

export const validateNIP = (nip) => {
    if(nip === '') {
        return new ValidProperty(false, strings.formErrors.requiredNip);
    } else {
        if(!/\d{10}/.test(nip)) {
            return new ValidProperty(false, strings.formErrors.nipFormat);
        } else {
            return new ValidProperty(true);
        }
    }
}

export const validatePrice = (price) => {
    if(price === '') {
        return new ValidProperty(false, strings.formErrors.requiredPrice);
    } else {
        if(!/\d{1,}\.\d{2}/.test(price)) {
            return new ValidProperty(false, strings.formErrors.priceFormat);
        } else {
            return new ValidProperty(true);
        }
    }
}

export const validateDiscount = discount => {
    if(discount !== '') {
        if(!/\d{1,}/.test(discount)) {
            return new ValidProperty(false, strings.formErrors.amountFormat);
        } else {
            return new ValidProperty(true);    
        }
    } else {
        return new ValidProperty(true);
    }
}

export const validateAmount = (amount) => {
    if(amount === '') {
        return new ValidProperty(false, strings.formErrors.requiredAmount);
    } else {
        if(!/\d{1,}/.test(amount)) {
            return new ValidProperty(false, strings.formErrors.amountFormat);
        } else {
            return new ValidProperty(true);
        }
    }
}

export const validateInvoiceNumber = (number) => {
    if(number === '') {
        return new ValidProperty(false, strings.formErrors.requiredNumber);
    } else {
        if(!/\d{6}/.test(number)) {
            return new ValidProperty(false, strings.formErrors.numberFormat);
        } else {
            return new ValidProperty(true);
        }
    }
}

export const validateInvoiceProductsList = (products) => {
    if(products.length === 0) {
        return new ValidProperty(false, strings.formErrors.requiredProducts);
    } else {
        return new ValidProperty(true);
    }
}

export const validateDateRange = (date, deadline) => {
    if(date > deadline) {
        return new ValidProperty(false, strings.formErrors.dateDeadlineRule);
    } else {
        return new ValidProperty(true);
    }
}

export const validateEntityObject = (customerId, fieldName) => {
    if(!customerId) {
        return new ValidProperty(false, fieldName + ' ' + strings.formErrors.isRequired);
    } else {
        return new ValidProperty(true);
    }
}