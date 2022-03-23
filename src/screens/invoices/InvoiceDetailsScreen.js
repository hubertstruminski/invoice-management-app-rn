import React from 'react';
import { 
    FlatList,
    View,
} from 'react-native';

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

const InvoiceDetailsScreen = () => {
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
                                text="#023481"
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
                                    <InvoiceDatePeriod />
                                </View>
                                <View>
                                    <InvoiceCalendarIcon /> 
                                </View>
                            </View>
                            <CustomerDetails />
                            <DescriptionSection 
                                separatorStyle={globalStyles.regularBottomSpace} 
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
                data={PRODUCTS}
                renderItem={({ item, index }) => (
                    <ProductPreview 
                        key={index}
                    />
                )}
            />
        </BasicView>
    );
}

export default InvoiceDetailsScreen;