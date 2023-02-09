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
} from '../../../core/components';
import globalStyles from '../../../core/styles/globalStyles';
import { ProductItem } from '../components';
import { 
    MAIN_GRAY, 
    TRANSPARENT, 
} from '../../../core/constants/colors';
import { strings } from '../../../core/internationalization/strings';
import { hp } from '../../../core/tools';
import { useProductsScreen } from '../services';

const ProductsScreen = () => {
    const {
        openAddProductForm,
        openDetails,
        products,
        removeItem,
        updateItem,
    } = useProductsScreen();

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