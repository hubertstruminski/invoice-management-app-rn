import React from 'react';
import { View } from 'react-native';
import Share from 'react-native-share';
import * as Print from 'expo-print';

import { 
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
    GREEN,
    MAIN_GRAY, 
    RED, 
} from '../../../contants/colors';
import { languages } from '../../../internationalization/languages';
import styles from './previewStyle';
import { generateHTML } from '../../../tools';

const DocumentPreview = ({ 
    item,
}) => {

    const generatePdf = async () => {
        const { uri } = await Print.printToFileAsync({
            html: generateHTML(item),
          });

        const shareOptions = {
            title: languages.pdf.shareInvoice,
            failOnCancel: false,
            saveToFiles: true,
            urls: [uri],
        };
      
        try {
            await Share.open(shareOptions);
        } catch (error) {
            console.log(error);
        }
    }

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
                                fontStyle="boldSmallText"
                                color={MAIN_GRAY}
                                text={languages.labels.status + ": "}
                            />
                            <ResponsiveText 
                                fontStyle="boldSmallText"
                                color={item?.sentStatus ? GREEN : RED}
                                text={item?.sentStatus ? languages.labels.sent : languages.labels.notSent}
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