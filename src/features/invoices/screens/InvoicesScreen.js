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
import { useInvoicesScreen } from '../services';

const InvoicesScreen = () => {
    const {
        invoices,
        renderItem,
        renderHeader,
    } = useInvoicesScreen();

    return (
        <BasicView 
            headerComponent={
                <Header title={strings.dashboardTiles.invoices} />
            }
        >
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