import React, { 
    useCallback, 
} from 'react';
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
import { setCompanyDetails } from '../../redux/actions';

const MyCompaniesScreen = ({
    navigation: {
        navigate,
    },
    companies,
    setCompanyDetails,
}) => {

    const openAddCompanyForm = useCallback(() => {
        setCompanyDetails({
            id: 0,
            name: '',
            street: '',
            postalCode: '',
            city: '',
            country: '',
        })
        navigate('AddCompanyScreen', { isEdit: false });
    }, []);

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

export default connect(mapStateToProps, { 
    setCompanyDetails,
})(MyCompaniesScreen);