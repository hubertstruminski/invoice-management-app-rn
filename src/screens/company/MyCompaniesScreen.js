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
    globalStyles,
} from '../../components';
import { 
    MAIN_GRAY, 
    TRANSPARENT, 
} from '../../contants/colors';
import { COMPANY_ENTITY } from '../../contants/constants';
import { COMPANIES } from '../../mocks';

const MyCompaniesScreen = ({
    navigation: {
        navigate,
    },
}) => {
    return (
        <BasicView 
            headerComponent={
                <Header title="My companies" />
            }
        >
            <FlatList
                ListHeaderComponent={
                    <Button 
                        color={MAIN_GRAY}
                        text="Add company"
                        backgroundColor={TRANSPARENT}
                        isOutline
                        customStyle={globalStyles.mediumToSpace}
                        onPress={() => navigate('AddCompanyScreen')}
                    />
                } 
                showsVerticalScrollIndicator={false}
                data={COMPANIES}
                renderItem={({ item, index }) => (
                    <EntityItem 
                        key={index}
                        type={COMPANY_ENTITY}
                    >
                        <ResponsiveText 
                            fontStyle="header"
                            color={MAIN_GRAY}
                            text={item.name}
                        />
                    </EntityItem>
                )}
                style={globalStyles.flatListContainer}
                contentContainerStyle={globalStyles.alignCenter}
                ListFooterComponent={<View />}
                ListFooterComponentStyle={globalStyles.largeSpace}
            />
        </BasicView>
    );
}

export default MyCompaniesScreen;