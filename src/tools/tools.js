import { Alert } from 'react-native';
import { languages } from '../internationalization/languages';

export const initFutureDate = () => {
    const futureDate = new Date();
    futureDate.setMonth(futureDate.getMonth() + 2);

    return futureDate;
};

export const showConfirmationDelete = (onSuccessCallback) => {
    Alert.alert(
        languages.alert.confirmationLabel, 
        languages.alert.areYouSureLabel,
        [
            {
                text: languages.alert.no,
                style: "cancel",
            },
            {
                text: languages.alert.yes,
                onPress: onSuccessCallback,
            }
        ]
    );
};