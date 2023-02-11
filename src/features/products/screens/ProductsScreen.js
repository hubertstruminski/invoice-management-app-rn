import React from 'react';

import { 
    FlatList, 
    View,
} from 'react-native';

import { BasicView } from '../../../core/components';
import globalStyles from '../../../core/styles/globalStyles';
import { strings } from '../../../core/internationalization/strings';
import { useProductsScreen } from '../services';
import { useTheme } from '../../../core/services';

const ProductsScreen = () => {
    const { colors } = useTheme();
    const {
        products,
        renderHeader,
        renderItem,
    } = useProductsScreen(colors);

    return (
        <BasicView title={strings.dashboardTiles.products}>
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