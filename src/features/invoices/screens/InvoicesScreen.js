import React from 'react';

import { 
    FlatList, 
    View,
} from 'react-native';

import { BasicView } from '../../../core/components';
import globalStyles from '../../../core/styles/globalStyles';
import { strings } from '../../../core/internationalization/strings';
import { useInvoicesScreen } from '../services';
import { useTheme } from '../../../core/services';

const InvoicesScreen = () => {
    const { colors } = useTheme();
    const {
        invoices,
        renderItem,
        renderHeader,
    } = useInvoicesScreen(colors);

    return (
        <BasicView title={strings.dashboardTiles.invoices}>
            <FlatList
                ListHeaderComponent={renderHeader} 
                showsVerticalScrollIndicator={false}
                data={invoices
                    .sort((a, b) => new Date(b.deadline) - new Date(a.deadline))
                }
                renderItem={renderItem}
                contentContainerStyle={[
                    globalStyles.alignCenter,
                    globalStyles.flexGrow,
                    globalStyles.flatListContainer,
                ]}
                ListFooterComponent={<View />}
                ListFooterComponentStyle={globalStyles.largeSpace}
            />
        </BasicView>
    );
}

export default InvoicesScreen;