import React from 'react';
import { View } from 'react-native';

import { ResponsiveText } from '../../../core/components';
import globalStyles from '../../../core/styles/globalStyles';
import { useTheme } from '../../../core/services';

const TaxItem = ({
    name, 
    amount,
}) => {
    const { colors } = useTheme();
    
    return (
        <React.Fragment>
            <View style={globalStyles.rowCenter}>
                <ResponsiveText 
                    fontStyle='header'
                    color={colors.MAIN_GRAY}
                    text={name}
                />
                <ResponsiveText 
                    fontStyle='details'
                    color={colors.MAIN_GRAY}
                    text=' - '
                />
                <ResponsiveText 
                    fontStyle='details'
                    color={colors.MAIN_GRAY}
                    text={amount + '%'}
                />
            </View>
        </React.Fragment>
    );
}

export default TaxItem;