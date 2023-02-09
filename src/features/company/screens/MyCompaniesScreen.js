import React, { 
    useCallback, 
    useEffect, 
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
} from '../../../core/components';
import globalStyles from '../../../core/styles/globalStyles';
import { 
    MAIN_GRAY, 
    TRANSPARENT, 
} from '../../../core/constants/colors';
import { COMPANY_ENTITY } from '../../../core/constants/constants';
import { languages } from '../../../core/internationalization/languages';
import { 
    fetchCompanies, 
    setCompanyDetails, 
} from '../../../core/redux/actions';
import { useInitData } from '../../../core/services';

const MyCompaniesScreen = ({
    navigation: {
        navigate,
    },
    companies,
    setCompanyDetails,
}) => {
    useInitData(fetchCompanies);

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
                    // companies?.length < 1 &&
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

const mapStateToProps = state => ({
    companies: state.company.companies,
});

export default connect(mapStateToProps, { 
    setCompanyDetails,
})(MyCompaniesScreen);