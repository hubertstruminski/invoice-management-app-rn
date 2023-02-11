import React from 'react';

import { 
    FlatList,
    View,
} from 'react-native';

import { useSelector } from 'react-redux';

import { InvoiceCalendarIcon } from '../../../../assets';
import { 
    BasicView, 
    CustomerDetails, 
    DescriptionSection, 
    InvoiceDatePeriod, 
    ResponsiveText, 
} from '../../../core/components';
import { ProductPreview } from '../components';
import globalStyles from '../../../core/styles/globalStyles';
import { strings } from '../../../core/internationalization/strings';
import { useTheme } from '../../../core/services';

const InvoiceDetailsScreen = () => {
    const { colors } = useTheme();
    const {
        number,
        date,
        deadline,
        customer,
        description,
        products,
    } = useSelector(state => state.invoice.invoiceDetails);
    
    return (
        <BasicView 
            containerStyle={[globalStyles.alignCenter, globalStyles.flex]}
            title={strings.details.invoice}
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
                                fontStyle='headerDetails'
                                color={colors.MAIN_GRAY}
                                text={strings.labels.invoiceNumber + ': '}
                            />
                            <ResponsiveText 
                                fontStyle='regularHeaderDetails'
                                color={colors.MAIN_GRAY}
                                text={'#' + number}
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
                                fontStyle='smallDetailsTitle'
                                color={colors.MAIN_GRAY}
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

export default InvoiceDetailsScreen;