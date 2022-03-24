import React from 'react';
import { 
    FlatList,
    View,
} from 'react-native';
import { connect } from 'react-redux';

import { InvoiceCalendarIcon } from '../../../assets';
import { 
    BasicView, 
    CustomerDetails, 
    DescriptionSection, 
    globalStyles, 
    Header, 
    InvoiceDatePeriod, 
    ProductPreview, 
    ResponsiveText, 
} from '../../components';
import { MAIN_GRAY } from '../../contants/colors';
import { PRODUCTS } from '../../mocks';

const InvoiceDetailsScreen = ({
    invoiceDetails: {
        number,
        date,
        deadline,
        customer,
        description,
    },
}) => {
    return (
        <BasicView 
            containerStyle={[globalStyles.alignCenter, globalStyles.flex]}
            headerComponent={<Header title="Invoice details" />}
        >
            <FlatList 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={globalStyles.alignCenter}
                ListHeaderComponent={() => (
                    <View style={globalStyles.alignCenter}>
                        <View 
                            style={[
                                globalStyles.rowCenter, 
                                globalStyles.smallMediumDetailsSpace,
                            ]}
                        >
                            <ResponsiveText 
                                fontStyle="headerDetails"
                                color={MAIN_GRAY}
                                text={"Invoice number" + ": "}
                            />
                            <ResponsiveText 
                                fontStyle="regularHeaderDetails"
                                color={MAIN_GRAY}
                                text={"#" + number}
                            />
                        </View>
                        <View style={globalStyles.detailsContainer}>
                            <View 
                                style={[
                                    globalStyles.rowCenter, 
                                    globalStyles.spaceBetween,
                                    globalStyles.regularBottomSpace,
                                ]}
                            >
                                <View>
                                    <InvoiceDatePeriod 
                                        date={date}
                                        deadline={deadline}
                                    />
                                </View>
                                <View>
                                    <InvoiceCalendarIcon /> 
                                </View>
                            </View>
                            <CustomerDetails 
                                item={customer}
                            />
                            <DescriptionSection 
                                separatorStyle={globalStyles.regularBottomSpace} 
                                description={description}
                            />
                            <ResponsiveText 
                                fontStyle="smallDetailsTitle"
                                color={MAIN_GRAY}
                                text="Products"
                                customStyle={[globalStyles.textAlignCenter, globalStyles.regularBottomSpace]}
                            /> 
                        </View>
                    </View>
                )}
                data={PRODUCTS.filter(product => product.customer?.id === customer?.id)}
                renderItem={({ item, index }) => (
                    <ProductPreview 
                        key={index}
                        item={item}
                    />
                )}
            />
        </BasicView>
    );
}

const mapStateToProps = state => ({
    invoiceDetails: state.invoice.invoiceDetails,
});

export default connect(mapStateToProps, { })(InvoiceDetailsScreen);