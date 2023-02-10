import { useCallback, useMemo } from 'react';

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
import { hp, initFutureDate } from '../../../core/tools';
import { removeInvoiceById } from '../../../core/redux/requests';
import { Screens } from '../../../core/constants/navigator';
import { Button, EntityItem } from '../../../core/components';
import { InvoiceItem } from '../components';
import { MAIN_GRAY, TRANSPARENT } from '../../../core/constants/colors';
import { strings } from '../../../core/internationalization/strings';

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

    const renderItem = ({ item, index }) => (
        <EntityItem 
            key={index}
            height={hp(112)}
            item={item}
            openDetails={openDetails}
            removeItem={removeItem}
            updateItem={updateItem}
        >
            <InvoiceItem 
                number={item.number}
                fullName={item.customer.fullName}
                deadline={item.deadline}
            />
        </EntityItem>
    );

    const renderHeader = useMemo(() => (
        <Button 
            color={MAIN_GRAY}
            text={strings.addEntity.addInvoice}
            backgroundColor={TRANSPARENT}
            isOutline
            onPress={openAddInvoiceForm}
        />
    ), [openAddInvoiceForm]);

    return {
        invoices,
        renderItem,
        renderHeader,
    };
}