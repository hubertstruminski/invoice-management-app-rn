import React from 'react';

import { View } from 'react-native';

import { useSelector } from 'react-redux';

import {  
    ResponsiveText, 
    TouchableIcon, 
} from '../../../core/components';
import { InvoicePartDocument } from '.';
import globalStyles from '../../../core/styles/globalStyles';
import { 
    MessageIcon, 
    PdfIcon, 
} from '../../../../assets';
import { strings } from '../../../core/internationalization/strings';
import styles from '../../../core/styles/previewStyle';
import { usePDF } from '../services';
import { useTheme } from '../../../core/services';

const DocumentPreview = ({ item }) => {
    const { colors } = useTheme();
    const companies = useSelector(state => state.company.companies);
    const generatePdf = usePDF(item, companies);

    return (
        <View style={styles.documentShadow(colors)}>
            <View style={styles.documentContainer(colors)}>
                <View 
                    style={[
                        globalStyles.row, 
                        globalStyles.spaceBetween,
                        styles.horizontalSpace
                    ]}
                >
                    <InvoicePartDocument item={item} />
                    <View style={styles.statusContainer}>
                        <View 
                            style={[
                                globalStyles.rowCenter, 
                                globalStyles.regularBottomSpace,
                            ]}
                        >
                            <ResponsiveText 
                                fontStyle='boldSmallText'
                                color={colors.MAIN_GRAY}
                                text={strings.labels.status + ': '}
                            />
                            <ResponsiveText 
                                fontStyle='boldSmallText'
                                color={item?.sentStatus ? colors.GREEN : colors.RED}
                                text={item?.sentStatus ? strings.labels.sent : strings.labels.notSent}
                            />
                        </View>
                        <View style={globalStyles.rowCenter}>
                            <TouchableIcon 
                                containerStyle={globalStyles.mediumRightSpace}
                            >
                                <MessageIcon color={colors.MAIN_ORANGE} />
                            </TouchableIcon>
                            <TouchableIcon onPress={generatePdf}>
                                <PdfIcon color={colors.MAIN_ORANGE} />
                            </TouchableIcon>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default DocumentPreview;