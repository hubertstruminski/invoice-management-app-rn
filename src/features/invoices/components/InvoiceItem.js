import React from 'react';
import { View } from 'react-native';
import moment from 'moment';

import { ResponsiveText } from '../../../core/components';
import globalStyles from '../../../core/styles/globalStyles';
import entityItemStyle from '../../../core/styles/entityItemStyle';
import { strings } from '../../../core/internationalization/strings';
import { MAIN_GRAY } from '../../../core/constants/colors';

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
                    text={strings.labels.deadline + ": "}
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