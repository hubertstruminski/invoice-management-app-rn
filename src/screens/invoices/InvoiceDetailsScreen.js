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
import { languages } from '../../internationalization/languages';

const InvoiceDetailsScreen = ({
    invoiceDetails: {
        number,
        date,
        deadline,
        customer,
        description,
    },
    products,
}) => {
    return (
        <BasicView 
            containerStyle={[globalStyles.alignCenter, globalStyles.flex]}
            headerComponent={<Header title={languages.details.invoice} />}
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
                                text={languages.labels.invoiceNumber + ": "}
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
                                text={languages.labels.products}
                                customStyle={[globalStyles.textAlignCenter, globalStyles.regularBottomSpace]}
                            /> 
                        </View>
                    </View>
                )}
                data={products.filter(product => product.customer?.id === customer?.id)}
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
    products: state.product.products,
});

export default connect(mapStateToProps, { })(InvoiceDetailsScreen);