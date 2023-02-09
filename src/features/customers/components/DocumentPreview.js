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
import { 
    GREEN,
    MAIN_GRAY, 
    RED, 
} from '../../../core/constants/colors';
import { strings } from '../../../core/internationalization/strings';
import styles from '../../../core/styles/previewStyle';
import { usePDF } from '../services';

const DocumentPreview = ({ item }) => {
    const companies = useSelector(state => state.company.companies);
    const generatePdf = usePDF(item, companies);

    return (
        <View style={styles.documentShadow}>
            <View style={styles.documentContainer}>
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
                                color={MAIN_GRAY}
                                text={strings.labels.status + ': '}
                            />
                            <ResponsiveText 
                                fontStyle='boldSmallText'
                                color={item?.sentStatus ? GREEN : RED}
                                text={item?.sentStatus ? strings.labels.sent : strings.labels.notSent}
                            />
                        </View>
                        <View style={globalStyles.rowCenter}>
                            <TouchableIcon 
                                containerStyle={globalStyles.mediumRightSpace}
                            >
                                <MessageIcon />
                            </TouchableIcon>
                            <TouchableIcon onPress={generatePdf}>
                                <PdfIcon />
                            </TouchableIcon>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default DocumentPreview;