import ValidProperty from '../classes/ValidProperty';

export const validateNewAccountForm = (email, fullName, password, confirmPassword) => {
    const errors = {}; 

    errors.email = validateEmail(email);
    errors.fullName = validateString(fullName, "Full name");
    errors.password = validatePassword(password);
    errors.confirmPassword = validateConfirmPassword(password, confirmPassword);

    return errors;
}

export const validateNewCompanyForm = (companyName, street, postalCode, city, country) => {
    const errors = {};

    errors.companyName = validateString(companyName, "Company name");
    errors.street = validateString(street, "Street");
    errors.postalCode = validatePostalCode(postalCode);
    errors.city = validateString(city, "City");
    errors.country = validateString(country, "Country");

    return errors;
}

export const validateNewTaxForm = (name, amount) => {
    const errors = {};

    errors.name = validateString(name, "Name");
    errors.amount = validateString(amount, "Amount");

    return errors;
}

export const validateNewCustomerForm = (fullName, email, street, city, nip) => {
    const errors = {};
    
    errors.fullName = validateString(fullName, "Full name");
    errors.email = validateEmail(email);
    errors.street = validateString(street, "Street");
    errors.city = validateString(city, "City");
    errors.nip = validateNIP(nip);

    return errors;
}

export const validateNewProductForm = (name, price, amount, unit) => {
    const errors = {};

    errors.name = validateString(name, "Name");
    errors.price = validatePrice(price);
    errors.amount = validateAmount(amount);
    errors.unit = validateString(unit, "Unit");

    return errors;
}

export const validateNewInvoiceForm = (number, date, deadline, customerId, chosenProducts) => {
    const errors = {};

    errors.number = validateInvoiceNumber(number);
    errors.date = validateDateRange(date, deadline);
    errors.customerId = validateEntityObject(customerId, "Customer");
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
        return new ValidProperty(false, "Email is required!");
    } else {
        if(!/.{1,}@.{1,}\.{1}.{1,}/.test(email)) {
            return new ValidProperty(false, "Invalid email!");
        } else {
            return new ValidProperty(true);
        }
    }
}

export const validateString = (value, fieldName) => {
    if(value === '') {
        return new ValidProperty(false, fieldName + " " + "is required!");
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

export const validatePostalCode = (postalCode) => {
    if(postalCode === '') {
        return new ValidProperty(false, "Postal code is required!");
    } else {
        if(!/\d{2}-\d{3}/.test(postalCode)) {
            return new ValidProperty(false, "Invalid format! Use 00-000.");
        } else {
            return new ValidProperty(true);
        }
    }
}

export const validateNIP = (nip) => {
    if(nip === '') {
        return new ValidProperty(false, "NIP is required!");
    } else {
        if(!/\d{10}/.test(nip)) {
            return new ValidProperty(false, "Invalid format! Type 10 digits without spaces.");
        } else {
            return new ValidProperty(true);
        }
    }
}

export const validatePrice = (price) => {
    if(price === '') {
        return new ValidProperty(false, "Price is required!");
    } else {
        if(!/\d{1,}\.\d{2}/.test(price)) {
            return new ValidProperty(false, "Invalid format! Use 0.00 format.");
        } else {
            return new ValidProperty(true);
        }
    }
}

export const validateAmount = (amount) => {
    if(amount === '') {
        return new ValidProperty(false, "Amount is required!");
    } else {
        if(!/\d{1,}/.test(amount)) {
            return new ValidProperty(false, "Invalid format! Use only digits.");
        } else {
            return new ValidProperty(true);
        }
    }
}

export const validateInvoiceNumber = (number) => {
    if(number === '') {
        return new ValidProperty(false, "Number is required!");
    } else {
        if(!/\d{6}/.test(number)) {
            return new ValidProperty(false, "Invalid format! Use only 6-digit number.");
        } else {
            return new ValidProperty(true);
        }
    }
}

export const validateInvoiceProductsList = (products) => {
    if(products.length === 0) {
        return new ValidProperty(false, "You must choose at least 1 product!");
    } else {
        return new ValidProperty(true);
    }
}

export const validateDateRange = (date, deadline) => {
    if(date > deadline) {
        return new ValidProperty(false, "Date can not be lower than deadline!");
    } else {
        return new ValidProperty(true);
    }
}

export const validateEntityObject = (customerId, fieldName) => {
    if(customerId === null) {
        return new ValidProperty(false, fieldName + " is required!");
    } else {
        return new ValidProperty(true);
    }
}