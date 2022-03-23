import React from 'react';
import { View } from 'react-native';

import { 
    CustomerPartDocument,
    globalStyles, 
    InvoicePartDocument, 
    ResponsiveText, 
    TouchableIcon, 
} from '../..';
import { 
    MessageIcon, 
    PdfIcon, 
} from '../../../../assets';
import { 
    MAIN_GRAY, 
    RED, 
} from '../../../contants/colors';
import styles from './previewStyle';

const DocumentPreview = () => {
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
                    <InvoicePartDocument />
                    <CustomerPartDocument />
                </View>
                <View style={styles.horizontalLineContainer} />
                <View 
                    style={[
                        globalStyles.row, 
                        globalStyles.spaceBetween,
                        styles.horizontalSpace,
                    ]}
                >
                    <View style={globalStyles.rowCenter}>
                        <ResponsiveText 
                            fontStyle="boldSmallText"
                            color={MAIN_GRAY}
                            text={"Status" + ": "}
                        />
                        <ResponsiveText 
                            fontStyle="boldSmallText"
                            color={RED}
                            text="not sent"
                        />
                    </View>
                    <View style={globalStyles.rowCenter}>
                        <TouchableIcon 
                            containerStyle={globalStyles.mediumRightSpace}
                        >
                            <MessageIcon />
                        </TouchableIcon>
                        <TouchableIcon>
                            <PdfIcon />
                        </TouchableIcon>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default DocumentPreview;