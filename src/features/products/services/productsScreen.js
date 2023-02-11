import React, { 
    useCallback, 
    useMemo, 
} from 'react';

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
import { useInitData, useSearchEntities } from '../../../core/services';
import { removeProductById } from '../../../core/redux/requests';
import { Screens } from '../../../core/constants/navigator';
import { 
    Button, 
    EntityItem, 
} from '../../../core/components';
import { hp } from '../../../core/tools';
import { ProductItem } from '../components';
import { strings } from '../../../core/internationalization/strings';

export function useProductsScreen(colors) {
    const products = useSelector(state => state.product.products);
    const {
        filteredData,
        renderSearchInput
    } = useSearchEntities(products, "name");

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

    const renderItem = ({ item, index }) => (
        <EntityItem 
            key={index}
            height={hp(128)}
            item={item}
            openDetails={openDetails}
            removeItem={removeItem}
            updateItem={updateItem}
        >
            <ProductItem 
                name={item.name}
                price={item.price}
                amount={item.amount}
            />
        </EntityItem>
    );

    const renderHeader = useMemo(() => (
        <React.Fragment>
            <Button 
                color={colors.MAIN_GRAY}
                text={strings.addEntity.addProduct}
                backgroundColor={colors.TRANSPARENT}
                isOutline
                onPress={openAddProductForm}
            />
            {renderSearchInput()}
        </React.Fragment>
    ), [openAddProductForm, colors, renderSearchInput]);

    return {
        products: filteredData,
        renderHeader,
        renderItem,
    };
}