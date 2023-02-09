import React from 'react';
import { 
    FlatList,
    View,
} from 'react-native';
import { connect } from 'react-redux';

import { InvoiceCalendarIcon } from '../../../../assets';
import { 
    BasicView, 
    CustomerDetails, 
    DescriptionSection, 
    Header, 
    InvoiceDatePeriod, 
    ResponsiveText, 
} from '../../../core/components';
import { ProductPreview } from '../components';
import globalStyles from '../../../core/styles/globalStyles';
import { MAIN_GRAY } from '../../../core/constants/colors';
import { strings } from '../../../core/internationalization/strings';

const InvoiceDetailsScreen = ({
    invoiceDetails: {
        number,
        date,
        deadline,
        customer,
        description,
        products,
    },
}) => {
    return (
        <BasicView 
            containerStyle={[globalStyles.alignCenter, globalStyles.flex]}
            headerComponent={<Header title={strings.details.invoice} />}
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
                                text={strings.labels.invoiceNumber + ": "}
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
                            <CustomerDetails item={customer} />
                            {description !== '' &&
                                <DescriptionSection 
                                    separatorStyle={globalStyles.regularBottomSpace} 
                                    description={description}
                                />
                            }
                            <ResponsiveText 
                                fontStyle="smallDetailsTitle"
                                color={MAIN_GRAY}
                                text={strings.labels.products}
                                customStyle={[globalStyles.textAlignCenter, globalStyles.regularBottomSpace]}
                            /> 
                        </View>
                    </View>
                )}
                data={products}
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