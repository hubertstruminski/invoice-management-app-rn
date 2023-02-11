import React from 'react';

import { View } from 'react-native';

import moment from 'moment';

import { ResponsiveText } from '../../../core/components';
import globalStyles from '../../../core/styles/globalStyles';
import entityItemStyle from '../../../core/styles/entityItemStyle';
import { strings } from '../../../core/internationalization/strings';
import { useTheme } from '../../../core/services';

const InvoiceItem = ({
    number, 
    fullName,
    deadline,
}) => {
    const { colors } = useTheme();
    
    return (
        <React.Fragment>
            <ResponsiveText 
                fontStyle='header'
                color={colors.MAIN_GRAY}
                text={'#' + number}
                customStyle={entityItemStyle.smallBottomSpace}
            />
            <ResponsiveText 
                fontStyle='regularSmallText'
                color={colors.MAIN_GRAY}
                text={fullName}
                customStyle={entityItemStyle.smallBottomSpace}
            />
            <View style={globalStyles.rowCenter}>
                <ResponsiveText 
                    fontStyle='boldSmallText'
                    color={colors.MAIN_GRAY}
                    text={strings.labels.deadline + ': '}
                />
                <ResponsiveText 
                    fontStyle='regularSmallText'
                    color={colors.MAIN_GRAY}
                    text={moment(new Date(deadline)).format('DD.MM.YYYY')}
                />
            </View>
        </React.Fragment>
    );
}

export default InvoiceItem;