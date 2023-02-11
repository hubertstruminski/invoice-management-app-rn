import React from 'react';

import { 
    ScrollView, 
    View,
} from 'react-native';

import { useSelector } from 'react-redux';

import { CompanyDetailsIcon } from '../../../../assets';
import { 
    AddressDetails,
    BasicView, 
    ResponsiveText, 
} from '../../../core/components';
import globalStyles from '../../../core/styles/globalStyles';
import { strings } from '../../../core/internationalization/strings';
import { useTheme } from '../../../core/services';

const MyCompanyDetailsScreen = () => {
    const { colors } = useTheme();
    const {
        name,
        street,
        postalCode,
        city,
        country,
    } = useSelector(state => state.company.companyDetails);

    return (
        <BasicView 
            containerStyle={globalStyles.alignCenter}
            title={strings.details.company}
        >
            <ScrollView 
                style={globalStyles.addEntityScrollViewContainer} 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[globalStyles.alignCenter, globalStyles.flex]}
            >
                <ResponsiveText 
                    fontStyle='headerDetails'
                    color={colors.MAIN_GRAY}
                    text={name}
                    customStyle={globalStyles.largeSpace}
                />
                <View style={globalStyles.detailsContainer}>
                    <AddressDetails 
                        separatorStyle={globalStyles.mediumBottomSpace}
                        street={street}
                        city={city}
                        country={country}
                    >
                        <ResponsiveText 
                            fontStyle='labelDetails'
                            color={colors.MAIN_GRAY}
                            text={strings.labels.postalCode + ':'} 
                            customStyle={globalStyles.smallLabelSpace}
                        />
                        <ResponsiveText 
                            fontStyle='rightInputTitle'
                            color={colors.MAIN_GRAY}
                            text={postalCode}
                            customStyle={globalStyles.mediumBottomSpace}
                        />
                    </AddressDetails>
                </View>
                <View style={globalStyles.bottomIconDetailsContainer}>
                    <CompanyDetailsIcon />
                </View>
            </ScrollView>
        </BasicView>
    );
}

export default MyCompanyDetailsScreen;