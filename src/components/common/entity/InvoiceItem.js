import React from 'react';
import { View } from 'react-native';
import moment from 'moment';

import { 
    globalStyles, 
    ResponsiveText, 
} from '../..';
import { MAIN_GRAY } from '../../../contants/colors';
import entityItemStyle from './entityItemStyle';

const InvoiceItem = ({
    number, 
    fullName,
    deadline,
}) => {
    return (
        <React.Fragment>
            <ResponsiveText 
                fontStyle="header"
                color={MAIN_GRAY}
                text={"#" + number}
                customStyle={entityItemStyle.smallBottomSpace}
            />
            <ResponsiveText 
                fontStyle="regularSmallText"
                color={MAIN_GRAY}
                text={fullName}
                customStyle={entityItemStyle.smallBottomSpace}
            />
            <View style={globalStyles.rowCenter}>
                <ResponsiveText 
                    fontStyle="boldSmallText"
                    color={MAIN_GRAY}
                    text={"Deadline" + ": "}
                />
                <ResponsiveText 
                    fontStyle="regularSmallText"
                    color={MAIN_GRAY}
                    text={moment(new Date(deadline)).format("DD.MM.YYYY")}
                />
            </View>
        </React.Fragment>
    );
}

export default InvoiceItem;