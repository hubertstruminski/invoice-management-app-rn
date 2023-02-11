import React from 'react';

import { 
    FlatList,
    View, 
} from 'react-native';

import { BasicView } from '../../../core/components';
import globalStyles from '../../../core/styles/globalStyles';
import { strings } from '../../../core/internationalization/strings';
import { useCustomersScreen } from '../services';

const CustomersScreen = () => {
    const {  
        customers,
        renderItem,
        renderHeader,
    } = useCustomersScreen();
    
    return (
        <BasicView title={strings.dashboardTiles.customers}>
            <FlatList
                ListHeaderComponent={renderHeader} 
                showsVerticalScrollIndicator={false}
                data={customers.
                    sort((a, b) => a.fullName.localeCompare(b.fullName))
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

export default CustomersScreen;