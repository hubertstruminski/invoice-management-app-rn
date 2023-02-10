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
    ResponsiveText,
} from '../../../core/components';
import globalStyles from '../../../core/styles/globalStyles';
import { 
    MAIN_GRAY, 
    TRANSPARENT, 
} from '../../../core/constants/colors';
import { strings } from '../../../core/internationalization/strings';
import { useMyCompaniesScreen } from '../services';

const MyCompaniesScreen = () => {
    const {
        companies,
        openAddCompanyForm,
        redirectToDetails,
        removeItem,
        updateItem,
    } = useMyCompaniesScreen();

    return (
        <BasicView 
            headerComponent={
                <Header title={strings.dashboardTiles.companies} />
            }
        >
            <FlatList
                ListHeaderComponent={
                    // companies?.length < 1 &&
                    <Button 
                        color={MAIN_GRAY}
                        text={strings.addEntity.addCompany}
                        backgroundColor={TRANSPARENT}
                        isOutline
                        customStyle={globalStyles.mediumToSpace}
                        onPress={openAddCompanyForm}
                    />
                } 
                showsVerticalScrollIndicator={false}
                data={companies
                    .sort((a, b) => a.name.localeCompare(b.name))
                }
                renderItem={({ item, index }) => (
                    <EntityItem 
                        key={index}
                        item={item}
                        openDetails={redirectToDetails}
                        removeItem={removeItem}
                        updateItem={updateItem}
                    >
                        <ResponsiveText 
                            fontStyle='header'
                            color={MAIN_GRAY}
                            text={item.name}
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


export default MyCompaniesScreen;