import React from 'react';
import { 
    ScrollView, 
    View,
} from 'react-native';
import { connect } from 'react-redux';

import { CompanyDetailsIcon } from '../../../../assets';
import { 
    AddressDetails,
    BasicView, 
    Header, 
    ResponsiveText, 
} from '../../../core/components';
import globalStyles from '../../../core/styles/globalStyles';
import { MAIN_GRAY } from '../../../core/constants/colors';
import { strings } from '../../../core/internationalization/strings';

const MyCompanyDetailsScreen = ({
    companyDetails: {
        name,
        street,
        postalCode,
        city,
        country,
    }
}) => {
    return (
        <BasicView 
            containerStyle={globalStyles.alignCenter}
            headerComponent={<Header title={strings.details.company} />}
        >
            <ScrollView 
                style={globalStyles.addEntityScrollViewContainer} 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[globalStyles.alignCenter, globalStyles.flex]}
            >
                <ResponsiveText 
                    fontStyle="headerDetails"
                    color={MAIN_GRAY}
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
                            fontStyle="labelDetails"
                            color={MAIN_GRAY}
                            text={strings.labels.postalCode + ":"} 
                            customStyle={globalStyles.smallLabelSpace}
                        />
                        <ResponsiveText 
                            fontStyle="rightInputTitle"
                            color={MAIN_GRAY}
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

const mapStateToProps = state => ({
    companyDetails: state.company.companyDetails,
});

export default connect(mapStateToProps, { })(MyCompanyDetailsScreen);