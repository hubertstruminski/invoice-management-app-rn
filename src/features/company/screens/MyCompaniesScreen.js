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
import { useMyCompaniesScreen } from '../services';

const MyCompaniesScreen = () => {
    const {
        companies,
        renderItem,
        renderHeader,
    } = useMyCompaniesScreen();

    return (
        <BasicView 
            headerComponent={
                <Header title={strings.dashboardTiles.companies} />
            }
        >
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