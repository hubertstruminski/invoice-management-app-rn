import { Alert } from 'react-native';

import { strings } from '../internationalization/strings';

export const initFutureDate = () => {
    const futureDate = new Date();
    futureDate.setMonth(futureDate.getMonth() + 2);

    return futureDate;
};

export const showConfirmationDelete = (onSuccessCallback) => {
    Alert.alert(
        strings.alert.confirmationLabel, 
        strings.alert.areYouSureLabel,
        [
            {
                text: strings.alert.no,
                style: 'cancel',
            },
            {
                text: strings.alert.yes,
                onPress: onSuccessCallback,
            }
        ]
    );
};