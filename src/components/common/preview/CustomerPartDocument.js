import React from 'react';
import { View } from 'react-native';

import { 
    globalStyles,  
    ResponsiveText, 
} from '../..';
import { MAIN_GRAY } from '../../../contants/colors';

const CustomerPartDocument = () => {
    return (
        <View>
            <ResponsiveText 
                fontStyle="header"
                color={MAIN_GRAY}
                text="Customer"
                customStyle={globalStyles.regularBottomSpace}
            />
            <ResponsiveText 
                fontStyle="regularSmallText"
                color={MAIN_GRAY}
                text="Hubert Strumiński"
                customStyle={globalStyles.smallLabelSpace}
            />
            <ResponsiveText 
                fontStyle="boldSmallText"
                color={MAIN_GRAY}
                text="+48 607 002 131"
            />
        </View>
    );
}

export default CustomerPartDocument;