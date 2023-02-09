import React, { 
    useCallback,
} from 'react';

import { 
    FlatList, 
    View,
} from 'react-native';

import { 
    useDispatch, 
    useSelector, 
} from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { 
    BasicView, 
    Header, 
    Button,
    EntityItem,
} from '../../../core/components';
import globalStyles from '../../../core/styles/globalStyles';
import { ProductItem } from '../components';
import { 
    MAIN_GRAY, 
    TRANSPARENT, 
} from '../../../core/constants/colors';
import { strings } from '../../../core/internationalization/strings';
import { 
    setProductDetails,
    fetchProducts,
    removeProduct, 
} from '../../../core/redux/actions';
import { useInitData } from '../../../core/services';
import { hp } from '../../../core/tools';
import { removeProductById } from '../../../core/redux/requests';

const ProductsScreen = () => {
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
        navigate('AddProductScreen', { isEdit: false });
    }, []);

    const openDetails = (id) => {
        const chosenProduct = products.find(item => item.id === id);
        dispatch(setProductDetails(chosenProduct));
        navigate('ProductDetailsScreen');
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
        navigate('AddProductScreen', { isEdit: true });
    };

    return (
        <BasicView 
            headerComponent={
                <Header title={strings.dashboardTiles.products} />
            }
        >
            <FlatList
                ListHeaderComponent={
                    <Button 
                        color={MAIN_GRAY}
                        text={strings.addEntity.addProduct}
                        backgroundColor={TRANSPARENT}
                        isOutline
                        onPress={openAddProductForm}
                    />
                } 
                showsVerticalScrollIndicator={false}
                data={products
                    .sort((a, b) => a.name.localeCompare(b.name))
                }
                renderItem={({ item, index }) => (
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
                )}
                contentContainerStyle={[
                    globalStyles.alignCenter,
                    globalStyles.flatListContainer,
                ]}
                ListFooterComponent={<View />}
                ListFooterComponentStyle={globalStyles.largeSpace}
            />
        </BasicView>
    );
}

export default ProductsScreen;