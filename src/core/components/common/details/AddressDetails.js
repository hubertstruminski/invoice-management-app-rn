import React from 'react';

import { ResponsiveText } from '../..';
import globalStyles from '../../../styles/globalStyles';
import { strings } from '../../../internationalization/strings';
import { useTheme } from '../../../services';

const AddressDetails = ({
    children,
    separatorStyle,
    street,
    city,
    country,
}) => {
    const { colors } = useTheme();
    return (
        <React.Fragment>
            <ResponsiveText 
                fontStyle='labelDetails'
                color={colors.MAIN_GRAY}
                text={strings.labels.street + ':'} 
                customStyle={globalStyles.smallLabelSpace}
            />
            <ResponsiveText 
                fontStyle='rightInputTitle'
                color={colors.MAIN_GRAY}
                text={street}
                customStyle={separatorStyle}
            />
            {children}
            <ResponsiveText 
                fontStyle='labelDetails'
                color={colors.MAIN_GRAY}
                text={strings.labels.city + ':'} 
                customStyle={globalStyles.smallLabelSpace}
            />
            <ResponsiveText 
                fontStyle='rightInputTitle'
                color={colors.MAIN_GRAY}
                text={city}
                customStyle={separatorStyle}
            />
            {country !== '' &&
                <React.Fragment> 
                    <ResponsiveText 
                        fontStyle='labelDetails'
                        color={colors.MAIN_GRAY}
                        text={strings.labels.country + ':'} 
                        customStyle={globalStyles.smallLabelSpace}
                    />
                    <ResponsiveText 
                        fontStyle='rightInputTitle'
                        color={colors.MAIN_GRAY}
                        text={country}
                        customStyle={separatorStyle}
                    />
                </React.Fragment>
            }
        </React.Fragment>
    );
}

export default AddressDetails;