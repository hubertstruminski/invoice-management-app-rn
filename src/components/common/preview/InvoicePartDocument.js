import React from 'react';
import { View } from 'react-native';

import { 
    globalStyles, 
    ResponsiveText, 
} from '../..';
import { MAIN_GRAY } from '../../../contants/colors';

const InvoicePartDocument = () => {
    return (
        <View>
            <ResponsiveText 
                fontStyle="header"
                color={MAIN_GRAY}
                text="Invoice"
                customStyle={globalStyles.regularBottomSpace}
            />
            <View style={[globalStyles.rowCenter, globalStyles.smallLabelSpace]}>
                <ResponsiveText 
                    fontStyle="boldSmallText"
                    color={MAIN_GRAY}
                    text={"Number" + ": "}
                />
                <ResponsiveText 
                    fontStyle="regularSmallText"
                    color={MAIN_GRAY}
                    text="100678"
                />
            </View>
            <View style={[globalStyles.rowCenter, globalStyles.smallLabelSpace]}>
                <ResponsiveText 
                    fontStyle="boldSmallText"
                    color={MAIN_GRAY}
                    text={"Date" + ": "}
                />
                <ResponsiveText 
                    fontStyle="regularSmallText"
                    color={MAIN_GRAY}
                    text="21.02.2022"
                />
            </View>
            <View style={globalStyles.rowCenter}>
                <ResponsiveText 
                    fontStyle="boldSmallText"
                    color={MAIN_GRAY}
                    text={"Deadline" + ": "}
                />
                <ResponsiveText 
                    fontStyle="regularSmallText"
                    color={MAIN_GRAY}
                    text="27.02.2022"
                />
            </View>
        </View>
    );
}

export default InvoicePartDocument;