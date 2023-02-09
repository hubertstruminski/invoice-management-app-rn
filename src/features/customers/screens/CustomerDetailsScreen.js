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
    Header, 
    ResponsiveText, 
} from '../../../core/components';
import { DocumentPreview } from '../components';
import globalStyles from '../../../core/styles/globalStyles';
import { MAIN_GRAY } from '../../../core/constants/colors';
import { languages } from '../../../core/internationalization/languages';
import { fetchInvoices } from '../../../core/redux/actions';
import { useInitData } from '../../../core/services';

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
    },
    invoices,
}) => {
    useInitData(fetchInvoices);
    const documents = invoices.filter(invoice => invoice.customer.id === id);

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
                            {phoneNumber !== '' &&
                                <React.Fragment>
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
                                </React.Fragment>
                            }
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
                            {description !== '' &&
                                <DescriptionSection 
                                    separatorStyle={globalStyles.regularBottomSpace}
                                    description={description}
                                />
                            }
                        </View>
                        {documents?.length !== 0 &&
                            <ResponsiveText 
                                fontStyle="smallDetailsTitle"
                                color={MAIN_GRAY}
                                text={languages.labels.documents}
                                customStyle={[
                                    globalStyles.textAlignCenter, 
                                    globalStyles.regularBottomSpace,
                                ]}
                            />
                        }
                    </View>
                )}
                data={documents}
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
    invoices: state.invoice.invoices,
});

export default connect(mapStateToProps, { })(CustomerDetailsScreen);