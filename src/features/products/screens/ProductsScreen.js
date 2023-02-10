import React from 'react';

import { 
    FlatList, 
    View,
} from 'react-native';

import { 
    BasicView, 
    Header, 
} from '../../../core/components';
import globalStyles from '../../../core/styles/globalStyles';
import { strings } from '../../../core/internationalization/strings';
import { useProductsScreen } from '../services';

const ProductsScreen = () => {
    const {
        products,
        renderHeader,
        renderItem,
    } = useProductsScreen();

    return (
        <BasicView 
            headerComponent={
                <Header title={strings.dashboardTiles.products} />
            }
        >
            <FlatList
                ListHeaderComponent={renderHeader} 
                showsVerticalScrollIndicator={false}
                data={products
                    .sort((a, b) => a.name.localeCompare(b.name))
                }
                renderItem={renderItem}
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