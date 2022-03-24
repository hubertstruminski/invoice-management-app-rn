import React from 'react';
import { 
    ScrollView, 
    View,
} from 'react-native';
import { connect } from 'react-redux';

import { TaxDetailsIcon } from '../../../assets';
import { 
    BasicView, 
    DescriptionSection, 
    globalStyles, 
    Header, 
    ResponsiveText, 
} from '../../components';
import { MAIN_GRAY } from '../../contants/colors';

const TaxDetailsScreen = ({
    taxDetails: {
        name,
        amount,
        description,
    },
}) => {
    return (
        <BasicView 
            containerStyle={globalStyles.alignCenter}
            headerComponent={<Header title="Tax details" />}
        >
            <ScrollView 
                style={globalStyles.addEntityScrollViewContainer} 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[
                    globalStyles.alignCenter, 
                    globalStyles.flex,
                ]}
            >
                <ResponsiveText 
                    fontStyle="headerDetails"
                    color={MAIN_GRAY}
                    text={name}
                    customStyle={globalStyles.largeSpace}
                />
                <View style={globalStyles.detailsContainer}>
                    <ResponsiveText 
                        fontStyle="labelDetails"
                        color={MAIN_GRAY}
                        text={"Amount" + ":"} 
                        customStyle={globalStyles.smallLabelSpace}
                    />
                    <ResponsiveText 
                        fontStyle="rightInputTitle"
                        color={MAIN_GRAY}
                        text={amount + "%"}
                        customStyle={globalStyles.mediumBottomSpace}
                    />
                    <DescriptionSection 
                        fontStyle="labelDetails"
                        descriptionLabel={"Description" + ":"} 
                        descriptionLabelStyle={globalStyles.smallLabelSpace}
                        description={description}
                    />
                </View>
                <View style={globalStyles.bottomIconDetailsContainer}>
                    <TaxDetailsIcon />
                </View>
            </ScrollView>
        </BasicView>
    );
}

const mapStateToProps = state => ({
    taxDetails: state.tax.taxDetails,
});

export default connect(mapStateToProps, { })(TaxDetailsScreen);