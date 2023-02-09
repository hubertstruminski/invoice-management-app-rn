import { Alert } from 'react-native';

import Share from 'react-native-share';
import * as Print from 'expo-print';

import { strings } from '../../../core/internationalization/strings';
import { generateHTML } from '../../../core/tools';

export function usePDF(item, companies) {
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

    return generatePdf;
}