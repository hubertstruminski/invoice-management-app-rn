import React from 'react';

import { ResponsiveText } from '../..';
import globalStyles from '../../../styles/globalStyles';
import { MAIN_GRAY } from '../../../constants/colors';
import { strings } from '../../../internationalization/strings';

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
                text={strings.labels.street + ":"} 
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
                text={strings.labels.city + ":"} 
                customStyle={globalStyles.smallLabelSpace}
            />
            <ResponsiveText 
                fontStyle="rightInputTitle"
                color={MAIN_GRAY}
                text={city}
                customStyle={separatorStyle}
            />
            {country !== '' &&
                <React.Fragment> 
                    <ResponsiveText 
                        fontStyle="labelDetails"
                        color={MAIN_GRAY}
                        text={strings.labels.country + ":"} 
                        customStyle={globalStyles.smallLabelSpace}
                    />
                    <ResponsiveText 
                        fontStyle="rightInputTitle"
                        color={MAIN_GRAY}
                        text={country}
                        customStyle={separatorStyle}
                    />
                </React.Fragment>
            }
        </React.Fragment>
    );
}

export default AddressDetails;