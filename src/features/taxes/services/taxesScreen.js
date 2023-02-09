import { useCallback } from 'react';

import { 
    useSelector, 
    useDispatch, 
} from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { setTaxDetails } from '../../../core/redux/actions';
import { 
    fetchTaxes, 
    removeTax, 
} from '../../../core/redux/actions/taxActions';
import { useInitData } from '../../../core/services';
import { removeTaxById } from '../../../core/redux/requests';
import { Screens } from '../../../core/constants/navigator';

export function useTaxesScreen() {
    const taxes = useSelector(state => state.tax.taxes);

    const { navigate } = useNavigation();
    const dispatch = useDispatch();

    useInitData(fetchTaxes);

    const openAddTaxForm = useCallback(() => {
        dispatch(setTaxDetails({
            id: 0,
            name: '',
            amount: '',
            description: '',
        }));
        navigate(Screens.ADD_TAX, { isEdit: false });
    }, []);


    const openDetails = (id) => {
        const chosenTax = taxes.find(item => item.id === id);
        dispatch(setTaxDetails(chosenTax));
        navigate(Screens.TAX_DETAILS);
    }

    const removeItem = async (id) => {
        try {
            const response = await removeTaxById(id);
            if(response.status === 200) {
                dispatch(removeTax(id));
            }
        } catch(error) {
            console.log(error);
        }
    };

    const updateItem = (item) => {
        const taxPayload = {
            id: item.id,
            name: item.name,
            amount: item.amount,
            description: item.description,
        };
        dispatch(setTaxDetails(taxPayload));
        navigate(Screens.ADD_TAX, { isEdit: true });
    };

    return {
        taxes,
        openAddTaxForm,
        openDetails,
        removeItem,
        updateItem,
    }
}