import React from 'react';

import { View } from 'react-native';

import { ResponsiveText } from '../../../core/components';
import globalStyles from '../../../core/styles/globalStyles';
import { strings } from '../../../core/internationalization/strings';
import entityItemStyle from '../../../core/styles/entityItemStyle';
import { useTheme } from '../../../core/services';

const ProductItem = ({
    name, 
    price,
    amount,
}) => {
    const { colors } = useTheme();
    return (
        <React.Fragment>
            <ResponsiveText 
                fontStyle='header'
                color={colors.MAIN_GRAY}
                text={name}
                customStyle={entityItemStyle.mediumBottomSpace}
            />
            <View 
                style={[
                    globalStyles.rowCenter, 
                    entityItemStyle.smallBottomSpace
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
                    text={price + ' $'}
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
                    text={amount}
                />
            </View>
        </React.Fragment>
    );
}

export default ProductItem;