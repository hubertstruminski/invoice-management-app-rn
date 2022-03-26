import React from 'react';
import { View } from 'react-native';
import moment from 'moment';

import { 
    globalStyles, 
    ResponsiveText, 
} from '../..';
import { MAIN_GRAY } from '../../../contants/colors';
import { languages } from '../../../internationalization/languages';

const InvoicePartDocument = ({
    item,
}) => {
    return (
        <View>
            <ResponsiveText 
                fontStyle="header"
                color={MAIN_GRAY}
                text={languages.labels.invoice}
                customStyle={globalStyles.regularBottomSpace}
            />
            <View style={[globalStyles.rowCenter, globalStyles.smallLabelSpace]}>
                <ResponsiveText 
                    fontStyle="boldSmallText"
                    color={MAIN_GRAY}
                    text={languages.labels.number + ": "}
                />
                <ResponsiveText 
                    fontStyle="regularSmallText"
                    color={MAIN_GRAY}
                    text={"#" + item?.number}
                />
            </View>
            <View style={[globalStyles.rowCenter, globalStyles.smallLabelSpace]}>
                <ResponsiveText 
                    fontStyle="boldSmallText"
                    color={MAIN_GRAY}
                    text={languages.labels.date + ": "}
                />
                <ResponsiveText 
                    fontStyle="regularSmallText"
                    color={MAIN_GRAY}
                    text={moment(new Date(item?.date)).format("DD.MM.YYYY")}
                />
            </View>
            <View style={globalStyles.rowCenter}>
                <ResponsiveText 
                    fontStyle="boldSmallText"
                    color={MAIN_GRAY}
                    text={languages.labels.deadline + ": "}
                />
                <ResponsiveText 
                    fontStyle="regularSmallText"
                    color={MAIN_GRAY}
                    text={moment(new Date(item?.deadline)).format("DD.MM.YYYY")}
                />
            </View>
        </View>
    );
}

export default InvoicePartDocument;