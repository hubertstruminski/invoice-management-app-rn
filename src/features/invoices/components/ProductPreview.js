import React from 'react';
import { View } from 'react-native';

import { ResponsiveText } from '../../../core/components';
import globalStyles from '../../../core/styles/globalStyles';
import { MAIN_GRAY } from '../../../core/constants/colors';
import styles from '../../../core/styles/previewStyle';
import { PRODUCT_PREVIEW_ICONS } from '../mocks';
import { strings } from '../../../core/internationalization/strings';

const ProductPreview = ({
    item,
}) => {
    const icon = PRODUCT_PREVIEW_ICONS[Math.floor(Math.random() * PRODUCT_PREVIEW_ICONS.length)];
    
    return (
        <View 
            style={[
                globalStyles.shadow, 
                styles.shadowSpace,
            ]}
        >
            <View style={styles.productContainer}>
                <View style={styles.columnContainer}>
                    <ResponsiveText 
                        fontStyle="header"
                        color={MAIN_GRAY}
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
                                fontStyle="boldSmallText"
                                color={MAIN_GRAY}
                                text={strings.labels.price + ": "}
                            />
                            <ResponsiveText 
                                fontStyle="regularSmallText"
                                color={MAIN_GRAY}
                                text={item?.price + " $"}
                            />
                        </View>
                        <View style={globalStyles.rowCenter}>
                            <ResponsiveText 
                                fontStyle="boldSmallText"
                                color={MAIN_GRAY}
                                text={strings.labels.amount + ": "}
                            />
                            <ResponsiveText 
                                fontStyle="regularSmallText"
                                color={MAIN_GRAY}
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