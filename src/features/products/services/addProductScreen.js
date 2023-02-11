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
import { 
    useIsFocused, 
    useNavigation, 
} from '@react-navigation/native';

import { 
    addProduct, 
    fetchTaxes, 
    setChosenUnit, 
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
import { UNITS } from '../mocks';

export function useAddProductScreen(params) {
    const taxes = useSelector(state => state.tax.taxes);
    const productDetails = useSelector(state => state.product.productDetails);
    const chosenUnitIndex = useSelector(state => state.product.chosenUnit);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [amount, setAmount] = useState('');
    const [discount, setDiscount] = useState('');
    const [taxId, setTaxId] = useState(null);

    const [errors, setErrors] = useState([null, null, null, null, null, null]);

    let taxRef = useRef(null);

    useInitData(fetchTaxes);

    const { goBack } = useNavigation();
    const dispatch = useDispatch();
    const isFocused = useIsFocused();

    useEffect(() => {
        if(productDetails && isFocused) {
            setName(productDetails.name);
            setDescription(productDetails.description);
            setPrice(productDetails.price?.toString());
            setAmount(productDetails.amount?.toString());
            setDiscount(productDetails.discount?.toString());
            
            const index = UNITS?.findIndex(item => item === productDetails.unit);
            dispatch(setChosenUnit(index !== -1 ? index : 0));
            
            setTaxId(productDetails.tax?.id);
        }
    }, [productDetails, isFocused]);

    const closeDropdown = useCallback(() => {
        taxRef.current.isOpen && taxRef.current.closeDropdown();
    }, [taxRef]);

    const createProduct = useCallback(async () => {
        const errorObject = validateNewProductForm(name, price, amount, discount, taxId);
        const isValidModel = handleFormErrors(errorObject, errors, setErrors);
    
        if(isValidModel) {
            let payload = {
                name,
                price: Number(price),
                amount,
                discount,
                unit: UNITS[chosenUnitIndex],
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
        chosenUnitIndex,
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
        taxId, 
        setTaxId,
        errors, 
        taxRef,
        closeDropdown,
        createProduct,
    };
}