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
    addCompany, 
    updateCompany, 
} from '../../../core/redux/actions';
import { 
    handleFormErrors, 
    validateNewCompanyForm, 
} from '../../../core/tools';
import { 
    addCompanyRequest, 
    updateCompanyRequest, 
} from '../../../core/redux/requests';

export const postalCodeMask = [/\d/, /\d/, '-', /\d/, /\d/, /\d/];

export function useAddCompanyScreen(params) {
    const [companyName, setCompanyName] = useState('');
    const [street, setStreet] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    const [errors, setErrors] = useState([null, null, null, null, null]);

    const dispatch = useDispatch();
    const { goBack } = useNavigation();

    const companyDetails = useSelector(state => state.company.companyDetails);

    useEffect(() => {
        setCompanyName(companyDetails?.name);
        setStreet(companyDetails?.street);
        setPostalCode(companyDetails?.postalCode);
        setCity(companyDetails?.city);
        setCountry(companyDetails?.country);
    }, [companyDetails]);

    const createCompany = useCallback(async () => {
        const errorObject = validateNewCompanyForm(companyName, street, postalCode, city, country);
        const isValidModel = handleFormErrors(errorObject, errors, setErrors);
    
        if(isValidModel) {
            let payload = {
                name: companyName,
                street,
                postalCode,
                city,
                country,
            };

            if(params?.isEdit) {
                const response = await updateCompanyRequest(companyDetails.id, payload);
                if(response.status === 200) {
                    payload = { ...payload, id: companyDetails.id };
                    dispatch(updateCompany(payload));
                }
            } else {
                const response = await addCompanyRequest(payload);
                if(response.status === 201) {
                    payload = { ...payload, id: response.data?.id };
                    dispatch(addCompany(payload));
                }
            }
            goBack();
        }
    }, [
        companyName,
        street,
        postalCode,
        city,
        country,
        errors,
    ]);

    return {
        createCompany,
        companyName, 
        setCompanyName,
        street, 
        setStreet,
        postalCode, 
        setPostalCode,
        city, 
        setCity,
        country, 
        setCountry,
        errors, 
    };
}