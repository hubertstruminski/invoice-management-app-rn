import React from 'react';

import { View } from 'react-native';

import moment from 'moment';

import { ResponsiveText } from '../../../core/components';
import globalStyles from '../../../core/styles/globalStyles';
import { strings } from '../../../core/internationalization/strings';
import { useTheme } from '../../../core/services';

const InvoicePartDocument = ({
    item,
}) => {
    const { colors } = useTheme();

    return (
        <View>
            <ResponsiveText 
                fontStyle='header'
                color={colors.MAIN_GRAY}
                text={strings.labels.invoice}
                customStyle={globalStyles.regularBottomSpace}
            />
            <View style={[globalStyles.rowCenter, globalStyles.smallLabelSpace]}>
                <ResponsiveText 
                    fontStyle='boldSmallText'
                    color={colors.MAIN_GRAY}
                    text={strings.labels.number + ': '}
                />
                <ResponsiveText 
                    fontStyle='regularSmallText'
                    color={colors.MAIN_GRAY}
                    text={'#' + item?.number}
                />
            </View>
            <View style={[globalStyles.rowCenter, globalStyles.smallLabelSpace]}>
                <ResponsiveText 
                    fontStyle='boldSmallText'
                    color={colors.MAIN_GRAY}
                    text={strings.labels.date + ': '}
                />
                <ResponsiveText 
                    fontStyle='regularSmallText'
                    color={colors.MAIN_GRAY}
                    text={moment(new Date(item?.date)).format('DD.MM.YYYY')}
                />
            </View>
            <View style={globalStyles.rowCenter}>
                <ResponsiveText 
                    fontStyle='boldSmallText'
                    color={colors.MAIN_GRAY}
                    text={strings.labels.deadline + ': '}
                />
                <ResponsiveText 
                    fontStyle='regularSmallText'
                    color={colors.MAIN_GRAY}
                    text={moment(new Date(item?.deadline)).format('DD.MM.YYYY')}
                />
            </View>
        </View>
    );
}

export default InvoicePartDocument;