import React from 'react';
import { 
    FlatList,
    View,
} from 'react-native';
import { connect } from 'react-redux';

import { 
    AddressDetails,
    BasicView, 
    DescriptionSection, 
    DocumentPreview, 
    globalStyles, 
    Header, 
    ResponsiveText, 
} from '../../components';
import { MAIN_GRAY } from '../../contants/colors';
import { languages } from '../../internationalization/languages';
import { INVOICES } from '../../mocks';

const CustomerDetailsScreen = ({
    customerDetails: {
        id,
        fullName,
        email,
        phoneNumber,
        nip,
        street,
        city,
        country,
        description,
    }
}) => {
    return (
        <BasicView 
            containerStyle={globalStyles.alignCenter}
            headerComponent={<Header title={languages.details.customer} />}
        >
            <FlatList
                showsVerticalScrollIndicator={false}
                style={globalStyles.addEntityScrollViewContainer} 
                contentContainerStyle={[globalStyles.alignCenter, globalStyles.bigBottomPadding]} 
                ListHeaderComponent={() => (
                    <View style={globalStyles.alignCenter}>
                        <ResponsiveText 
                            fontStyle="headerDetails"
                            color={MAIN_GRAY}
                            text={fullName}
                            customStyle={globalStyles.largeSpace}
                        />
                        <View 
                            style={[
                                globalStyles.detailsContainer, 
                                globalStyles.regularBottomSpace,
                            ]}
                        >
                            <ResponsiveText 
                                fontStyle="labelDetails"
                                color={MAIN_GRAY}
                                text={languages.labels.email + ":"} 
                                customStyle={globalStyles.smallLabelSpace}
                            />
                            <ResponsiveText 
                                fontStyle="rightInputTitle"
                                color={MAIN_GRAY}
                                text={email}
                                customStyle={globalStyles.regularBottomSpace}
                            />
                            <ResponsiveText 
                                fontStyle="labelDetails"
                                color={MAIN_GRAY}
                                text={languages.labels.phoneNumber + ":"} 
                                customStyle={globalStyles.smallLabelSpace}
                            />
                            <ResponsiveText 
                                fontStyle="rightInputTitle"
                                color={MAIN_GRAY}
                                text={phoneNumber}
                                customStyle={globalStyles.regularBottomSpace}
                            />
                            <ResponsiveText 
                                fontStyle="labelDetails"
                                color={MAIN_GRAY}
                                text={languages.labels.nip + ":"} 
                                customStyle={globalStyles.smallLabelSpace}
                            />
                            <ResponsiveText 
                                fontStyle="rightInputTitle"
                                color={MAIN_GRAY}
                                text={nip}
                                customStyle={globalStyles.regularBottomSpace}
                            />
                            <AddressDetails 
                                separatorStyle={globalStyles.regularBottomSpace}
                                street={street}
                                city={city}
                                country={country}
                            />
                            <DescriptionSection 
                                separatorStyle={globalStyles.regularBottomSpace}
                                description={description}
                            />
                        </View>
                        <ResponsiveText 
                            fontStyle="smallDetailsTitle"
                            color={MAIN_GRAY}
                            text={languages.labels.documents}
                            customStyle={[
                                globalStyles.textAlignCenter, 
                                globalStyles.regularBottomSpace,
                            ]}
                        />
                    </View>
                )}
                data={INVOICES.filter(invoice => invoice.customer.id === id)}
                renderItem={({ item, index }) => (
                    <DocumentPreview 
                        key={index} 
                        item={item}
                    />
                )}
            />
        </BasicView>
    );
}

const mapStateToProps = state => ({
    customerDetails: state.customer.customerDetails,
});

export default connect(mapStateToProps, { })(CustomerDetailsScreen);