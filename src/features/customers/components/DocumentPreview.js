import React from 'react';
import { 
    Alert, 
    View, 
} from 'react-native';
import Share from 'react-native-share';
import * as Print from 'expo-print';
import { connect } from 'react-redux';

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
import { generateHTML } from '../../../core/tools';

const DocumentPreview = ({ 
    item,
    companies,
}) => {

    const generatePdf = async () => {
        if(companies?.length < 1) {
            Alert.alert('Error', 'You must have added company!');
            return;
        }

        const { uri } = await Print.printToFileAsync({
            html: generateHTML(item, companies),
          });

        const shareOptions = {
            title: strings.pdf.shareInvoice,
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
                                text={strings.labels.status + ": "}
                            />
                            <ResponsiveText 
                                fontStyle="boldSmallText"
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

const mapStateToProps = state => ({
    companies: state.company.companies,
});

export default connect(mapStateToProps, { })(DocumentPreview);