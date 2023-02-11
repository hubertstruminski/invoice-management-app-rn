import React from 'react';

import { View } from 'react-native';

import { ResponsiveText } from '../../../core/components';
import globalStyles from '../../../core/styles/globalStyles';
import styles from '../../../core/styles/previewStyle';
import { PRODUCT_PREVIEW_ICONS } from '../mocks';
import { strings } from '../../../core/internationalization/strings';
import { useTheme } from '../../../core/services';

const ProductPreview = ({
    item,
}) => {
    const { colors } = useTheme();
    const icon = PRODUCT_PREVIEW_ICONS[Math.floor(Math.random() * PRODUCT_PREVIEW_ICONS.length)];
    
    return (
        <View 
            style={[
                globalStyles.shadow(colors), 
                styles.shadowSpace,
            ]}
        >
            <View style={styles.productContainer(colors)}>
                <View style={styles.columnContainer}>
                    <ResponsiveText 
                        fontStyle='header'
                        color={colors.MAIN_GRAY}
                        text={item?.name}
                    />
                    <View>
                        <View 
                            style={[
                                globalStyles.rowCenter, 
                                globalStyles.smallLabelSpace,
                            ]}
                        >
                            <ResponsiveText 
                                fontStyle='boldSmallText'
                                color={colors.MAIN_GRAY}
                                text={strings.labels.price + ': '}
                            />
                            <ResponsiveText 
                                fontStyle='regularSmallText'
                                color={colors.MAIN_GRAY}
                                text={item?.price + ' $'}
                            />
                        </View>
                        <View style={globalStyles.rowCenter}>
                            <ResponsiveText 
                                fontStyle='boldSmallText'
                                color={colors.MAIN_GRAY}
                                text={strings.labels.amount + ': '}
                            />
                            <ResponsiveText 
                                fontStyle='regularSmallText'
                                color={colors.MAIN_GRAY}
                                text={item?.amount}
                            />
                        </View>
                    </View>
                </View>
                {icon}
            </View>
        </View>
    );
}

export default ProductPreview;