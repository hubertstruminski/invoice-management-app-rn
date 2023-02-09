import { useCallback } from 'react';

import { 
    useDispatch, 
    useSelector, 
} from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { 
    fetchCustomers, 
    removeCustomer, 
    setCustomerDetails, 
} from '../../../core/redux/actions';
import { useInitData } from '../../../core/services';
import { removeCustomerById } from '../../../core/redux/requests';
import { Screens } from '../../../core/constants/navigator';

export function useCustomersScreen() {
    const customers = useSelector(state => state.customer.customers);

    const { navigate } = useNavigation();
    const dispatch = useDispatch();

    useInitData(fetchCustomers);

    const openAddCustomerForm = useCallback(() => {
        dispatch(setCustomerDetails({
            id: 0,
            fullName: '',
            email: '',
            phoneNumber: '',
            nip: '',
            street: '',
            city: '',
            country: '',
            description: '',
        }));
        navigate(Screens.ADD_CUSTOMER, { isEdit: false })
    }, []);

    const openDetails = (id) => {
        const chosenCustomer = customers.find(item => item.id === id);
        dispatch(setCustomerDetails(chosenCustomer));
        navigate(Screens.CUSTOMER_DETAILS);
    }

    const removeItem = async (id) => {
        try {
            const response = await removeCustomerById(id);
            if(response.status === 200) {
                dispatch(removeCustomer(id));
            }
        } catch(error) {
            console.log(error);
        }
    };

    const updateItem = (item) => {
        const customerPayload = {
            id: item.id,
            fullName: item.fullName,
            email: item.email,
            phoneNumber: item.phoneNumber,
            nip: item.nip,
            street: item.street,
            city: item.city,
            country: item.country,
            description: item.description,
        };
        dispatch(setCustomerDetails(customerPayload));
        navigate(Screens.ADD_CUSTOMER, { isEdit: true });
    };

    return {
        customers,
        openAddCustomerForm,
        openDetails,
        removeItem,
        updateItem,
    };
}