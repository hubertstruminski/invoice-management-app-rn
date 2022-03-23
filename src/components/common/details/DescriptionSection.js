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
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo turpis diam feugiat quis euismod id neque a eleifend. In massa pretium sit odio amet. Ullamcorper ut convallis sit sed urna. Dictum mi adipiscing at turpis cras hac urna, commodo."
                customStyle={separatorStyle}
            />
        </React.Fragment>
    );
}

export default DescriptionSection;