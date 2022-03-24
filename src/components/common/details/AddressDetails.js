import React from 'react';

import { 
    globalStyles, 
    ResponsiveText, 
} from '../..';
import { MAIN_GRAY } from '../../../contants/colors';

const AddressDetails = ({
    children,
    separatorStyle,
    street,
    city,
    country,
}) => {
    return (
        <React.Fragment>
            <ResponsiveText 
                fontStyle="labelDetails"
                color={MAIN_GRAY}
                text={"Street" + ":"} 
                customStyle={globalStyles.smallLabelSpace}
            />
            <ResponsiveText 
                fontStyle="rightInputTitle"
                color={MAIN_GRAY}
                text={street}
                customStyle={separatorStyle}
            />
            {children}
            <ResponsiveText 
                fontStyle="labelDetails"
                color={MAIN_GRAY}
                text={"City" + ":"} 
                customStyle={globalStyles.smallLabelSpace}
            />
            <ResponsiveText 
                fontStyle="rightInputTitle"
                color={MAIN_GRAY}
                text={city}
                customStyle={separatorStyle}
            />
            <ResponsiveText 
                fontStyle="labelDetails"
                color={MAIN_GRAY}
                text={"Country" + ":"} 
                customStyle={globalStyles.smallLabelSpace}
            />
            <ResponsiveText 
                fontStyle="rightInputTitle"
                color={MAIN_GRAY}
                text={country}
                customStyle={separatorStyle}
            />
        </React.Fragment>
    );
}

export default AddressDetails;