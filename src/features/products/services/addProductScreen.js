import {
    useCallback,
    useRef,
    useState,
    useEffect,
} from 'react';

import { 
    useDispatch, 
    useSelector, 
} from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { 
    addProduct, 
    fetchTaxes, 
    updateProduct, 
} from '../../../core/redux/actions';
import { 
    handleFormErrors, 
    validateNewProductForm, 
} from '../../../core/tools';
import {
    addProductRequest, 
    updateProductRequest, 
} from '../../../core/redux/requests';
import { useInitData } from '../../../core/services';

export function useAddProductScreen(params) {
    const taxes = useSelector(state => state.tax.taxes);
    const productDetails = useSelector(state => state.product.productDetails);
    
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [amount, setAmount] = useState('');
    const [discount, setDiscount] = useState('');
    const [unit, setUnit] = useState('');
    const [taxId, setTaxId] = useState(null);

    const [errors, setErrors] = useState([null, null, null, null, null, null]);

    let taxRef = useRef(null);

    useInitData(fetchTaxes);

    const { goBack } = useNavigation();
    const dispatch = useDispatch();

    useEffect(() => {
        setName(productDetails?.name);
        setDescription(productDetails?.description);
        setPrice(productDetails?.price?.toString());
        setAmount(productDetails?.amount?.toString());
        setDiscount(productDetails?.discount?.toString());
        setUnit(productDetails?.unit);
        setTaxId(productDetails?.tax?.id);
    }, [productDetails]);

    const closeDropdown = useCallback(() => {
        taxRef.current.isOpen && taxRef.current.closeDropdown();
    }, [taxRef]);

    const createProduct = useCallback(async () => {
        const errorObject = validateNewProductForm(name, price, amount, unit, discount, taxId);
        const isValidModel = handleFormErrors(errorObject, errors, setErrors);
    
        if(isValidModel) {
            let payload = {
                name,
                price: Number(price),
                amount,
                discount,
                unit,
                taxId: taxId,
                description,
            };

            if(params?.isEdit) {
                const response = await updateProductRequest(productDetails.id, payload);
                if(response.status === 200) {
                    payload = { ...payload, id: productDetails.id };
                    dispatch(updateProduct(payload));
                }
            } else {
                const response = await addProductRequest(payload);
                if(response.status === 201) {
                    payload = { ...payload, id: response.data?.id };
                    dispatch(addProduct(payload));
                }
            }
            goBack();
        }
    }, [
        name, 
        price,
        amount,
        discount,
        unit,
        taxId,
        description,
        errors,
    ]);

    return {
        taxes,
        productDetails,
        name, 
        setName,
        description, 
        setDescription,
        price, 
        setPrice,
        amount, 
        setAmount,
        discount, 
        setDiscount,
        unit, 
        setUnit,
        taxId, 
        setTaxId,
        errors, 
        taxRef,
        closeDropdown,
        createProduct,
    };
}