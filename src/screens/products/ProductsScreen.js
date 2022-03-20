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
import { MAIN_GRAY } from '../../contants/colors';
import { PRODUCTS } from '../../mocks';
import { hp } from '../../tools';

const ProductsScreen = () => {
    return (
        <BasicView 
            headerComponent={
                <Header title="Products" />
            }
        >
            <FlatList
                ListHeaderComponent={
                    <Button 
                        color={MAIN_GRAY}
                        text="Add product"
                        backgroundColor="transparent"
                        isOutline
                    />
                } 
                showsVerticalScrollIndicator={false}
                data={PRODUCTS}
                renderItem={({ item, index }) => (
                    <EntityItem 
                        key={index}
                        height={hp(128)}
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