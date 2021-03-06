import React from 'react';
import { View } from 'react-native';

import { 
    globalStyles, 
    ResponsiveText, 
} from '../..';
import { MAIN_GRAY } from '../../../contants/colors';
import { languages } from '../../../internationalization/languages';
import entityItemStyle from './entityItemStyle';

const ProductItem = ({
    name, 
    price,
    amount,
}) => {
    return (
        <React.Fragment>
            <ResponsiveText 
                fontStyle="header"
                color={MAIN_GRAY}
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
                    fontStyle="boldSmallText"
                    color={MAIN_GRAY}
                    text={languages.labels.price + ": "}
                />
                <ResponsiveText 
                    fontStyle="regularSmallText"
                    color={MAIN_GRAY}
                    text={price + " $"}
                />
            </View>
            <View style={globalStyles.rowCenter}>
                <ResponsiveText 
                    fontStyle="boldSmallText"
                    color={MAIN_GRAY}
                    text={languages.labels.amount + ": "}
                />
                <ResponsiveText 
                    fontStyle="regularSmallText"
                    color={MAIN_GRAY}
                    text={amount}
                />
            </View>
        </React.Fragment>
    );
}

export default ProductItem;