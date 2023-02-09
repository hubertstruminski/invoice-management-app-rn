import {
    useCallback,
    useEffect,
    useState,
} from 'react';

import { 
    useDispatch, 
    useSelector, 
} from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { 
    addCustomer, 
    updateCustomer, 
} from '../../../core/redux/actions';
import { 
    handleFormErrors, 
    validateNewCustomerForm, 
} from '../../../core/tools';
import { 
    addCustomerRequest, 
    updateCustomerRequest, 
} from '../../../core/redux/requests';

export const phoneNumberMask = [/\+/, /\d/, /\d/, /\s/, /\d/, /\d/, /\d/, /\s/, /\d/, /\d/, /\d/, /\s/, /\d/, /\d/, /\d/];
export const nipMask = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];

export function useAddCustomerScreen(params) {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [nip, setNip] = useState('');
    const [additionalInformations, setAdditionalInformations] = useState('');

    const [errors, setErrors] = useState([null, null, null, null, null]);

    const customerDetails = useSelector(state => state.customer.customerDetails);
  
    const { goBack } = useNavigation();
    const dispatch = useDispatch();
    
    useEffect(() => {
        setFullName(customerDetails?.fullName);
        setEmail(customerDetails?.email);
        setStreet(customerDetails?.street);
        setCity(customerDetails?.city);
        setCountry(customerDetails?.country);
        setPhoneNumber(customerDetails?.phoneNumber);
        setNip(customerDetails?.nip);
        setAdditionalInformations(customerDetails?.description);
    }, [customerDetails]);

    const createCustomer = useCallback(async () => {
        const errorObject = validateNewCustomerForm(fullName, email, street, city, nip);
        const isValidModel = handleFormErrors(errorObject, errors, setErrors);
    
        if(isValidModel) {
            let payload = {
                fullName,
                email,
                phoneNumber,
                nip,
                street,
                city,
                country,
                description: additionalInformations,
            };

            if(params?.isEdit) {
                const response = await updateCustomerRequest(customerDetails.id, payload);
                if(response.status === 200) {
                    payload = { ...payload, id: customerDetails.id };
                    dispatch(updateCustomer(payload));
                }
            } else {
                const response = await addCustomerRequest(payload);
                if(response.status === 201) {
                    payload = { ...payload, id: response.data?.id };
                    dispatch(addCustomer(payload));
                }
            }
            goBack();
        }
    }, [
        fullName,
        email,
        street,
        city,
        nip,
        errors,
        additionalInformations,
    ]);

    return {
        createCustomer,
        fullName,
        setFullName,
        email,
        setEmail,
        street, 
        setStreet,
        city, 
        setCity,
        country, 
        setCountry,
        phoneNumber, 
        setPhoneNumber,
        nip, 
        setNip,
        additionalInformations, 
        setAdditionalInformations,
        errors,
        setErrors,
    };
}