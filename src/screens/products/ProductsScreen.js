import React, { 
    useCallback, 
} from 'react';
import { 
    FlatList, 
    View,
} from 'react-native';
import { connect } from 'react-redux';

import { 
    BasicView, 
    Header, 
    Button,
    EntityItem,
    globalStyles,
    ProductItem,
} from '../../components';
import { 
    MAIN_GRAY, 
    TRANSPARENT, 
} from '../../contants/colors';
import { PRODUCT_ENTITY } from '../../contants/constants';
import { languages } from '../../internationalization/languages';
import { setProductDetails } from '../../redux/actions';
import { hp } from '../../tools';

const ProductsScreen = ({
    navigation: {
        navigate,
    },
    products,
    setProductDetails,
}) => {

    const openAddProductForm = useCallback(() => {
        setProductDetails({
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
        });
        navigate('AddProductScreen', { isEdit: false });
    }, []);

    return (
        <BasicView 
            headerComponent={
                <Header title={languages.dashboardTiles.products} />
            }
        >
            <FlatList
                ListHeaderComponent={
                    <Button 
                        color={MAIN_GRAY}
                        text={languages.addEntity.addProduct}
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
                        type={PRODUCT_ENTITY}
                        item={item}
                    >
                        <ProductItem 
                            name={item.name}
                            price={item.price}
                            amount={item.amount}
                        />
                    </EntityItem>
                )}
                style={globalStyles.flatListContainer}
                contentContainerStyle={globalStyles.alignCenter}
                ListFooterComponent={<View />}
                ListFooterComponentStyle={globalStyles.largeSpace}
            />
        </BasicView>
    );
}

const mapStateToProps = state => ({
    products: state.product.products,
}); 

export default connect(mapStateToProps, { 
    setProductDetails,
})(ProductsScreen);