import React from 'react';

import { ResponsiveText } from '../../../core/components';
import { useTheme } from '../../../core/services';
import entityItemStyle from '../../../core/styles/entityItemStyle';

const CustomerItem = ({
    fullName,
    email,
}) => {
    const { colors } = useTheme();

    return (
        <React.Fragment>
            <ResponsiveText 
                fontStyle='header'
                color={colors.MAIN_GRAY}
                text={fullName}
                customStyle={entityItemStyle.smallBottomSpace}
            />
            <ResponsiveText 
                fontStyle='regularSmallText'
                color={colors.MAIN_GRAY}
                text={email}
            />
        </React.Fragment>
    );
}

export default CustomerItem;