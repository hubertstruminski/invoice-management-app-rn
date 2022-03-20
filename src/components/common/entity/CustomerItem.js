import React from 'react';

import { ResponsiveText } from '../..';
import { MAIN_GRAY } from '../../../contants/colors';
import entityItemStyle from './entityItemStyle';

const CustomerItem = ({
    fullName,
    email,
}) => {
    return (
        <React.Fragment>
            <ResponsiveText 
                fontStyle="header"
                color={MAIN_GRAY}
                text={fullName}
                customStyle={entityItemStyle.smallBottomSpace}
            />
            <ResponsiveText 
                fontStyle="regularSmallText"
                color={MAIN_GRAY}
                text={email}
            />
        </React.Fragment>
    );
}

export default CustomerItem;