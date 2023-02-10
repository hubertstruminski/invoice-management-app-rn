import {
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';

import { useNavigation } from '@react-navigation/native';
import { 
    useSelector, 
    useDispatch, 
} from 'react-redux';

import { 
    handleFormErrors, 
    initFutureDate, 
    validateNewInvoiceForm, 
} from '../../../core/tools';
import { 
    addInvoice, 
    fetchCustomers, 
    fetchProducts, 
    updateInvoice,
} from '../../../core/redux/actions';
import { 
    addInvoiceRequest, 
    updateInvoiceRequest, 
} from '../../../core/redux/requests';
import { useInitData } from '../../../core/services';

export const numberMask = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/];

export function useAddInvoiceScreen(params) {
    const futureDate = initFutureDate();
    
    const [number, setNumber] = useState('');
    const [deadline, setDeadline] = useState(futureDate);
    const [customerId, setCustomerId] = useState(null);
    const [comment, setComment] = useState('');
    const [chosenProducts, setChosenProducts] = useState([]);

    const [errors, setErrors] = useState([null, null, null, null]);

    const [isOpenDeadlineModal, setIsOpenDeadlineModal] = useState(false);

    const products = useSelector(state => state.product.products);
    const customers = useSelector(state => state.customer.customers);
    const invoiceDetails = useSelector(state => state.invoice.invoiceDetails);

    let customerRef = useRef(null);
    let productRef = useRef(null);

    useInitData(fetchCustomers);
    useInitData(fetchProducts);

    const dispatch = useDispatch();
    const { goBack } = useNavigation();

    useEffect(() => {
        setNumber(invoiceDetails?.number);
        setDeadline(new Date(invoiceDetails?.deadline));
        setCustomerId(invoiceDetails?.customer?.id);
        setComment(invoiceDetails?.description);
        const products = invoiceDetails?.products
            ?.map(item => ({ name: item.name, id: item.id }));
        if(Array.isArray(products) && products.length !== 0) {
            setChosenProducts(products);
        }
    }, [invoiceDetails]);

    const closeDropdowns = useCallback(() => {
        customerRef.current.isOpen && customerRef.current.closeDropdown();
        productRef.current.isOpen && productRef.current.closeDropdown();
    }, [customerRef, productRef]);

    const confirmDeadlineModal = useCallback((value) => {
        setIsOpenDeadlineModal(false);                   
        setDeadline(value);
    }, []);

    const toggleDeadlineModal = 
    useCallback(() => setIsOpenDeadlineModal(!isOpenDeadlineModal), [isOpenDeadlineModal]);

    const closeDeadlineModal = useCallback(() => setIsOpenDeadlineModal(false), []);

    const createInvoice = useCallback(async () => {
        const errorObject = validateNewInvoiceForm(
            number, 
            deadline, 
            customerId, 
            chosenProducts,
        );
        const isValidModel = handleFormErrors(errorObject, errors, setErrors);

        if(isValidModel) {
            let payload = {
                number,
                deadline,
                customerId: customerId,
                description: comment,
                sentStatus: invoiceDetails.sentStatus,
            };

            const result = [];
            chosenProducts.forEach(item => {
                const foundElement = products.find(product => product.id === item.id);
                foundElement && result.push(foundElement.id);
            });

            payload = { ...payload, productIds: result };

            if(params?.isEdit) {
                const response = await updateInvoiceRequest(invoiceDetails.id, payload);
                if(response.status === 200) {
                    payload = { 
                        ...payload, 
                        id: invoiceDetails.id,
                        customer: response.data?.customer,
                        products: response.data?.products,
                    };
                    dispatch(updateInvoice(payload));
                }
            } else {
                const response = await addInvoiceRequest(payload);
                if(response.status === 201) {
                    payload = { 
                        ...payload, 
                        id: response.data?.id,
                        sentStatus: false,  
                        customer: response.data?.customer,
                        products: response.data?.products,
                    };
                    dispatch(addInvoice(payload));
                }
            }
            goBack();
        }
    }, [
        number,
        customerId,
        errors,
        products,
        customers,
        chosenProducts,
    ]);

    return {
        number, 
        setNumber,
        deadline, 
        customerId, 
        setCustomerId,
        comment, 
        setComment,
        chosenProducts, 
        setChosenProducts,
        errors, 
        isOpenDeadlineModal, 
        invoiceDetails,
        products,
        customers,
        customerRef,
        productRef,
        closeDropdowns,
        confirmDeadlineModal,
        toggleDeadlineModal,
        closeDeadlineModal,
        createInvoice,
    };
}