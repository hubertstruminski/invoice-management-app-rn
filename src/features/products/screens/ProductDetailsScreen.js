import React from 'react';

import { 
    ScrollView, 
    View,
} from 'react-native';

import { useSelector } from 'react-redux';

import { 
    CoinIcon, 
    PlantIcon, 
} from '../../../../assets';
import { 
    BasicView, 
    DescriptionSection, 
    ResponsiveText, 
} from '../../../core/components';
import globalStyles from '../../../core/styles/globalStyles';
import { strings } from '../../../core/internationalization/strings';
import { useTheme } from '../../../core/services';

const ProductDetailsScreen = () => {
    const { colors } = useTheme();
    const {
        name,
        price,
        amount,
        discount,
        unit,
        tax,
        description,
    } = useSelector(state => state.product.productDetails);

    return (
        <BasicView 
            containerStyle={[globalStyles.alignCenter, globalStyles.flex]}
            title={strings.details.product}
        >
            <ScrollView 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={globalStyles.alignCenter}
            >
                <ResponsiveText 
                    fontStyle='headerDetails'
                    color={colors.MAIN_GRAY}
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
                                fontStyle='labelDetails'
                                color={colors.MAIN_GRAY}
                                text={strings.labels.price + ':'} 
                                customStyle={globalStyles.smallLabelSpace}
                            />
                            <ResponsiveText 
                                fontStyle='rightInputTitle'
                                color={colors.MAIN_GRAY}
                                text={price + ' $'}
                                customStyle={globalStyles.regularBottomSpace}
                            />
                            <ResponsiveText 
                                fontStyle='labelDetails'
                                color={colors.MAIN_GRAY}
                                text={strings.labels.amount + ':'} 
                                customStyle={globalStyles.smallLabelSpace}
                            />
                            <ResponsiveText 
                                fontStyle='rightInputTitle'
                                color={colors.MAIN_GRAY}
                                text={amount}
                                customStyle={globalStyles.regularBottomSpace}
                            />
                            <ResponsiveText 
                                fontStyle='labelDetails'
                                color={colors.MAIN_GRAY}
                                text={strings.labels.discount + ':'} 
                                customStyle={globalStyles.smallLabelSpace}
                            />
                            <ResponsiveText 
                                fontStyle='rightInputTitle'
                                color={colors.MAIN_GRAY}
                                text={discount + '%'}
                                customStyle={globalStyles.regularBottomSpace}
                            />
                            <ResponsiveText 
                                fontStyle='labelDetails'
                                color={colors.MAIN_GRAY}
                                text={strings.labels.unit + ':'} 
                                customStyle={globalStyles.smallLabelSpace}
                            />
                            <ResponsiveText 
                                fontStyle='rightInputTitle'
                                color={colors.MAIN_GRAY}
                                text={unit}
                            />
                        </View>
                        <View>
                            <PlantIcon />
                        </View>
                    </View>
                    <ResponsiveText 
                        fontStyle='smallDetailsTitle'
                        color={colors.MAIN_GRAY}
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
                                fontStyle='labelDetails'
                                color={colors.MAIN_GRAY}
                                text={strings.labels.name + ':'} 
                                customStyle={globalStyles.smallLabelSpace}
                            />
                            <ResponsiveText 
                                fontStyle='rightInputTitle'
                                color={colors.MAIN_GRAY}
                                text={tax?.name}
                                customStyle={globalStyles.regularBottomSpace}
                            />
                            <ResponsiveText 
                                fontStyle='labelDetails'
                                color={colors.MAIN_GRAY}
                                text={strings.labels.amount + ':'} 
                                customStyle={globalStyles.smallLabelSpace}
                            />
                            <ResponsiveText 
                                fontStyle='rightInputTitle'
                                color={colors.MAIN_GRAY}
                                text={tax?.amount + '%'}
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

export default ProductDetailsScreen;