import React from 'react';
import { View } from 'react-native';

import { ResponsiveText } from '../../../core/components';
import globalStyles from '../../../core/styles/globalStyles';
import { MAIN_GRAY } from '../../../core/constants/colors';

const TaxItem = ({
    name, 
    amount,
}) => {
    return (
        <React.Fragment>
            <View style={globalStyles.rowCenter}>
                <ResponsiveText 
                    fontStyle='header'
                    color={MAIN_GRAY}
                    text={name}
                />
                <ResponsiveText 
                    fontStyle='details'
                    color={MAIN_GRAY}
                    text=' - '
                />
                <ResponsiveText 
                    fontStyle='details'
                    color={MAIN_GRAY}
                    text={amount + '%'}
                />
            </View>
        </React.Fragment>
    );
}

export default TaxItem;