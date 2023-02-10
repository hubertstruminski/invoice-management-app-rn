import { useCallback } from 'react';

import { 
    useDispatch, 
    useSelector, 
} from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { 
    setInvoiceDetails, 
    fetchInvoices,
    removeInvoice, 
} from '../../../core/redux/actions';
import { useInitData } from '../../../core/services';
import { initFutureDate } from '../../../core/tools';
import { removeInvoiceById } from '../../../core/redux/requests';
import { Screens } from '../../../core/constants/navigator';

export function useInvoicesScreen() {
    const invoices = useSelector(state => state.invoice.invoices);

    const { navigate } = useNavigation();
    const dispatch = useDispatch();

    useInitData(fetchInvoices);

    const openAddInvoiceForm = useCallback(() => {
        setInvoiceDetails({
            id: 0,
            number: '',
            date: new Date(),
            deadline: initFutureDate(),
            customer: null,
            description: '',
            sentStatus: false,
        });
        navigate(Screens.ADD_INVOICE, { isEdit: false });
    }, []);

    const openDetails = (id) => {
        const chosenInvoice = invoices.find(item => item.id === id);
        dispatch(setInvoiceDetails(chosenInvoice));
        navigate(Screens.INVOICE_DETAILS);
    }

    const removeItem = async (id) => {
        try {
            const response = await removeInvoiceById(id);
            if(response.status === 200) {
                dispatch(removeInvoice(id));
            }
        } catch(error) {
            console.log(error);
        }
    };

    const updateItem = (item) => {
        const invoicePayload = {
            id: item.id,
            number: item.number,
            date: item.date,
            deadline: item.deadline,
            customer: item.customer,
            description: item.description,
            sentStatus: item.sentStatus,
            products: item.products,
        };
        dispatch(setInvoiceDetails(invoicePayload));
        navigate(Screens.ADD_INVOICE, { isEdit: true });
    };

    return {
        invoices,
        openAddInvoiceForm,
        openDetails,
        removeItem,
        updateItem,
    };
}