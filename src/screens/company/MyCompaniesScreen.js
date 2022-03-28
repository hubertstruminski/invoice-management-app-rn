import React from 'react';
import { 
    FlatList, 
    View, 
} from 'react-native';
import { connect } from 'react-redux';

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
import { languages } from '../../internationalization/languages';

const MyCompaniesScreen = ({
    navigation: {
        navigate,
    },
    companies,
}) => {
    return (
        <BasicView 
            headerComponent={
                <Header title={languages.dashboardTiles.companies} />
            }
        >
            <FlatList
                ListHeaderComponent={
                    <Button 
                        color={MAIN_GRAY}
                        text={languages.addEntity.addCompany}
                        backgroundColor={TRANSPARENT}
                        isOutline
                        customStyle={globalStyles.mediumToSpace}
                        onPress={() => navigate('AddCompanyScreen')}
                    />
                } 
                showsVerticalScrollIndicator={false}
                data={companies}
                renderItem={({ item, index }) => (
                    <EntityItem 
                        key={index}
                        id={item.id}
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

const mapStateToProps = state => ({
    companies: state.company.companies,
});

export default connect(mapStateToProps, { })(MyCompaniesScreen);