import React from 'react';
import { 
    ScrollView, 
    View,
} from 'react-native';
import { connect } from 'react-redux';

import { 
    ChartIcon, 
    CoinIcon, 
    PlantIcon, 
} from '../../../../assets';
import { 
    BasicView, 
    CustomerDetails, 
    DescriptionSection, 
    Header, 
    InvoiceDatePeriod, 
    ResponsiveText, 
} from '../../../core/components';
import globalStyles from '../../../core/styles/globalStyles';
import { MAIN_GRAY } from '../../../core/constants/colors';
import { strings } from '../../../core/internationalization/strings';

const ProductDetailsScreen = ({
    productDetails: {
        name,
        price,
        amount,
        discount,
        unit,
        invoice,
        customer,
        tax,
        description,
    }
}) => {
    return (
        <BasicView 
            containerStyle={[globalStyles.alignCenter, globalStyles.flex]}
            headerComponent={<Header title={strings.details.product} />}
        >
            <ScrollView 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[globalStyles.alignCenter]}
            >
                <ResponsiveText 
                    fontStyle="headerDetails"
                    color={MAIN_GRAY}
                    text={name}
                    customStyle={globalStyles.smallMediumDetailsSpace}
                />
                <View style={[globalStyles.detailsContainer, globalStyles.mediumBottomPadding]}>
                    <View 
                        style={[
                            globalStyles.rowCenter, 
                            globalStyles.spaceBetween,
                            globalStyles.regularBottomSpace,
                        ]}
                    >
                        <View>
                            <ResponsiveText 
                                fontStyle="labelDetails"
                                color={MAIN_GRAY}
                                text={strings.labels.price + ":"} 
                                customStyle={globalStyles.smallLabelSpace}
                            />
                            <ResponsiveText 
                                fontStyle="rightInputTitle"
                                color={MAIN_GRAY}
                                text={price + " $"}
                                customStyle={globalStyles.regularBottomSpace}
                            />
                            <ResponsiveText 
                                fontStyle="labelDetails"
                                color={MAIN_GRAY}
                                text={strings.labels.amount + ":"} 
                                customStyle={globalStyles.smallLabelSpace}
                            />
                            <ResponsiveText 
                                fontStyle="rightInputTitle"
                                color={MAIN_GRAY}
                                text={amount}
                                customStyle={globalStyles.regularBottomSpace}
                            />
                            <ResponsiveText 
                                fontStyle="labelDetails"
                                color={MAIN_GRAY}
                                text={strings.labels.discount + ":"} 
                                customStyle={globalStyles.smallLabelSpace}
                            />
                            <ResponsiveText 
                                fontStyle="rightInputTitle"
                                color={MAIN_GRAY}
                                text={discount + "%"}
                                customStyle={globalStyles.regularBottomSpace}
                            />
                            <ResponsiveText 
                                fontStyle="labelDetails"
                                color={MAIN_GRAY}
                                text={strings.labels.unit + ":"} 
                                customStyle={globalStyles.smallLabelSpace}
                            />
                            <ResponsiveText 
                                fontStyle="rightInputTitle"
                                color={MAIN_GRAY}
                                text={unit}
                            />
                        </View>
                        <View>
                            <PlantIcon />
                        </View>
                    </View>
                    {/* <ResponsiveText 
                        fontStyle="smallDetailsTitle"
                        color={MAIN_GRAY}
                        text={strings.labels.invoice}
                        customStyle={[globalStyles.regularBottomSpace, globalStyles.textAlignCenter]}
                    />
                    <View 
                        style={[
                            globalStyles.rowCenter, 
                            globalStyles.spaceBetween,
                            globalStyles.regularBottomSpace,
                        ]}
                    >
                        <View>
                            <ResponsiveText 
                                fontStyle="labelDetails"
                                color={MAIN_GRAY}
                                text={strings.labels.number + ":"} 
                                customStyle={globalStyles.smallLabelSpace}
                            />
                            <ResponsiveText 
                                fontStyle="rightInputTitle"
                                color={MAIN_GRAY}
                                text={"#" + invoice?.number}
                                customStyle={globalStyles.regularBottomSpace}
                            />
                            <InvoiceDatePeriod 
                                date={invoice?.date}
                                deadline={invoice?.deadline}
                            />
                        </View>
                        <View>
                            <ChartIcon />
                        </View>
                    </View>
                    <CustomerDetails item={customer} /> */}
                    <ResponsiveText 
                        fontStyle="smallDetailsTitle"
                        color={MAIN_GRAY}
                        text={strings.labels.tax}
                        customStyle={[globalStyles.regularBottomSpace, globalStyles.textAlignCenter]}
                    />
                    <View 
                        style={[
                            globalStyles.rowCenter, 
                            globalStyles.spaceBetween,
                            globalStyles.regularBottomSpace,
                        ]}
                    >
                        <View>
                            <ResponsiveText 
                                fontStyle="labelDetails"
                                color={MAIN_GRAY}
                                text={strings.labels.name + ":"} 
                                customStyle={globalStyles.smallLabelSpace}
                            />
                            <ResponsiveText 
                                fontStyle="rightInputTitle"
                                color={MAIN_GRAY}
                                text={tax?.name}
                                customStyle={globalStyles.regularBottomSpace}
                            />
                            <ResponsiveText 
                                fontStyle="labelDetails"
                                color={MAIN_GRAY}
                                text={strings.labels.amount + ":"} 
                                customStyle={globalStyles.smallLabelSpace}
                            />
                            <ResponsiveText 
                                fontStyle="rightInputTitle"
                                color={MAIN_GRAY}
                                text={tax?.amount + "%"}
                                customStyle={globalStyles.regularBottomSpace}
                            />
                        </View>
                        <View>
                            <CoinIcon />
                        </View>
                    </View>
                    {description !== '' && 
                        <DescriptionSection 
                            description={description}
                        />
                    }
                </View>
            </ScrollView>
        </BasicView>
    );
}

const mapStateToProps = state => ({
    productDetails: state.product.productDetails,
});

export default connect(mapStateToProps, { })(ProductDetailsScreen);