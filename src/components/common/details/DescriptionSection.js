import React from 'react';

import { 
    globalStyles,
    ResponsiveText, 
} from '../..';
import { MAIN_GRAY } from '../../../contants/colors';

const DescriptionSection = ({ 
    separatorStyle, 
    fontStyle = "smallDetailsTitle",
    descriptionLabel = "Description",
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
                fontStyle="rightInputTitle"
                color={MAIN_GRAY}
                text={description}
                customStyle={separatorStyle}
            />
        </React.Fragment>
    );
}

export default DescriptionSection;