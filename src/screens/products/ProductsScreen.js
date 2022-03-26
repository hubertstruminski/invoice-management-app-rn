import React from 'react';
import { 
    FlatList, 
    View,
} from 'react-native';

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
import { PRODUCTS } from '../../mocks';
import { hp } from '../../tools';

const ProductsScreen = ({
    navigation: {
        navigate,
    },
}) => {
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
                        onPress={() => navigate('AddProductScreen')}
                    />
                } 
                showsVerticalScrollIndicator={false}
                data={PRODUCTS}
                renderItem={({ item, index }) => (
                    <EntityItem 
                        key={index}
                        height={hp(128)}
                        type={PRODUCT_ENTITY}
                        id={item.id}
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

export default ProductsScreen;