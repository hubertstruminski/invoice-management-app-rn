import React from 'react';

import { 
    FlatList, 
    View, 
} from 'react-native';

import { BasicView } from '../../../core/components';
import globalStyles from '../../../core/styles/globalStyles';
import { strings } from '../../../core/internationalization/strings';
import { useMyCompaniesScreen } from '../services';
import { useTheme } from '../../../core/services';

const MyCompaniesScreen = () => {
    const { colors } = useTheme();
    const {
        companies,
        renderItem,
        renderHeader,
    } = useMyCompaniesScreen(colors);

    return (
        <BasicView title={strings.dashboardTiles.companies}>
            <FlatList
                ListHeaderComponent={renderHeader} 
                showsVerticalScrollIndicator={false}
                data={companies
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


export default MyCompaniesScreen;