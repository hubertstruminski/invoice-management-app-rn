import React from 'react';

import { ResponsiveText } from '../..';
import globalStyles from '../../../styles/globalStyles';
import { MAIN_GRAY } from '../../../constants/colors';
import { strings } from '../../../internationalization/strings';

const DescriptionSection = ({ 
    separatorStyle, 
    fontStyle = 'smallDetailsTitle',
    descriptionLabel = strings.labels.description,
    description,
    descriptionLabelStyle = [globalStyles.regularBottomSpace, globalStyles.textAlignCenter],
}) => {
    return (
        <React.Fragment>
            <ResponsiveText 
                fontStyle={fontStyle}
                color={MAIN_GRAY}
                text={descriptionLabel}
                customStyle={descriptionLabelStyle}
            />
            <ResponsiveText 
                fontStyle='rightInputTitle'
                color={MAIN_GRAY}
                text={description}
                customStyle={separatorStyle}
            />
        </React.Fragment>
    );
}

export default DescriptionSection;