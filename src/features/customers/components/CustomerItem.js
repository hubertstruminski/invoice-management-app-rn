import React from 'react';

import { ResponsiveText } from '../../../core/components';
import { MAIN_GRAY } from '../../../core/constants/colors';
import entityItemStyle from '../../../core/styles/entityItemStyle';

const CustomerItem = ({
    fullName,
    email,
}) => {
    return (
        <React.Fragment>
            <ResponsiveText 
                fontStyle='header'
                color={MAIN_GRAY}
                text={fullName}
                customStyle={entityItemStyle.smallBottomSpace}
            />
            <ResponsiveText 
                fontStyle='regularSmallText'
                color={MAIN_GRAY}
                text={email}
            />
        </React.Fragment>
    );
}

export default CustomerItem;