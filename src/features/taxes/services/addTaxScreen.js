import {
    useCallback,
    useEffect,
    useState,
} from 'react';

import { useNavigation } from "@react-navigation/native";
import { 
    useDispatch,
    useSelector, 
} from 'react-redux';

import { 
    addTax, 
    updateTax, 
} from '../../../core/redux/actions';
import { 
    handleFormErrors, 
    validateNewTaxForm, 
} from '../../../core/tools';
import { 
    addTaxRequest, 
    updateTaxRequest, 
} from '../../../core/redux/requests';

export function useAddTaxScreen(params) {
    const taxDetails = useSelector(state => state.tax.taxDetails);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');

    const [errors, setErrors] = useState([null, null]);

    const { goBack } = useNavigation();
    const dispatch = useDispatch();

    useEffect(() => {
        setName(taxDetails?.name);
        setDescription(taxDetails?.description);
        setAmount(taxDetails?.amount?.toString());
    }, [taxDetails]);

    const createTax = useCallback(async () => {
        const errorObject = validateNewTaxForm(name, amount);
        const isValidModel = handleFormErrors(errorObject, errors, setErrors);
    
        if(isValidModel) {
            let payload = {
                name,
                amount,
                description,
            };

            if(params?.isEdit) {
                const response = await updateTaxRequest(taxDetails.id, payload);
                if(response.status === 200) {
                    payload = { ...payload, id: taxDetails.id };
                    dispatch(updateTax(payload));
                }
            } else {
                const response = await addTaxRequest(payload);
                if(response.status === 201) {
                    payload = { ...payload, id: response.data?.id };
                    dispatch(addTax(payload));
                }
            }
            goBack();
        }
    }, [
        name, 
        amount,
        errors,
        description,
    ]);

    return {
        createTax,
        name, 
        setName,
        description, 
        setDescription,
        amount, 
        setAmount,
        errors, 
    };
}