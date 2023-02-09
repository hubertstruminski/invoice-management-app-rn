import { useCallback } from 'react';

import { 
    useDispatch, 
    useSelector, 
} from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { 
    setProductDetails,
    fetchProducts,
    removeProduct, 
} from '../../../core/redux/actions';
import { useInitData } from '../../../core/services';
import { removeProductById } from '../../../core/redux/requests';
import { Screens } from '../../../core/constants/navigator';

export function useProductsScreen() {
    const products = useSelector(state => state.product.products);

    const { navigate } = useNavigation();
    const dispatch = useDispatch();

    useInitData(fetchProducts);

    const openAddProductForm = useCallback(() => {
        dispatch(setProductDetails({
            id: 0,
            name: '',
            price: '',
            amount: '',
            discount: '',
            unit: '',
            invoice: null,
            customer: null,
            tax: null,
            description: '',
        }));
        navigate(Screens.ADD_PRODUCT, { isEdit: false });
    }, []);

    const openDetails = (id) => {
        const chosenProduct = products.find(item => item.id === id);
        dispatch(setProductDetails(chosenProduct));
        navigate(Screens.PRODUCT_DETAILS);
    }

    const removeItem = async (id) => {
        try {
            const response = await removeProductById(id);
            if(response.status === 200) {
                dispatch(removeProduct(id));
            }
        } catch(error) {
            console.log(error);
        }
    };

    const updateItem = (item) => {
        const productPayload = {
            id: item.id,
            name: item.name,
            price: item.price,
            amount: item.amount,
            discount: item.discount,
            unit: item.unit,
            invoice: item.invoice,
            customer: item.customer,
            tax: item.tax,
            description: item.description,
        };
        dispatch(setProductDetails(productPayload));
        navigate(Screens.ADD_PRODUCT, { isEdit: true });
    };

    return {
        updateItem,
        removeItem,
        openDetails,
        openAddProductForm,
        products,
    };
}