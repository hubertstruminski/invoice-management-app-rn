import React from 'react';
import { View } from 'react-native';

import { 
    globalStyles,
    ResponsiveText, 
} from '../..';
import { MAIN_GRAY } from '../../../contants/colors';
import styles from './previewStyle';
import { PRODUCT_PREVIEW_ICONS } from '../../../mocks';

const ProductPreview = () => {
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
                        text="Banan"
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
                                text={"Price" + ": "}
                            />
                            <ResponsiveText 
                                fontStyle="regularSmallText"
                                color={MAIN_GRAY}
                                text={"0.76" + " $"}
                            />
                        </View>
                        <View style={globalStyles.rowCenter}>
                            <ResponsiveText 
                                fontStyle="boldSmallText"
                                color={MAIN_GRAY}
                                text={"Amount" + ": "}
                            />
                            <ResponsiveText 
                                fontStyle="regularSmallText"
                                color={MAIN_GRAY}
                                text="1"
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