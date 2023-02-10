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
import { useTaxesScreen } from '../services';

const TaxesScreen = () => {
    const {  
        taxes,
        renderHeader,
        renderItem,
    } = useTaxesScreen();

    return (
        <BasicView 
            headerComponent={
                <Header title={strings.dashboardTiles.taxes} />
            }
        >
            <FlatList
                ListHeaderComponent={renderHeader} 
                showsVerticalScrollIndicator={false}
                data={taxes
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

export default TaxesScreen;