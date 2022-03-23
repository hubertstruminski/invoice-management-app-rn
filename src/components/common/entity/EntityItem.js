import React from 'react';
import { 
    TouchableWithoutFeedback, 
    View, 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { 
    globalStyles, 
    ResponsiveText, 
} from '../..';
import { 
    EditIcon, 
    TrashIcon, 
} from '../../../../assets';
import { MAIN_ORANGE } from '../../../contants/colors';
import { hp } from '../../../tools';
import styles from './entityItemStyle';

const EntityItem = ({
    children,
    height = hp(64),
    type,
}) => {
    const { navigate } = useNavigation();

    const redirectToDetails = () => {
        switch(type) {
            case "company":
                navigate('MyCompanyDetailsScreen');
                break;
            case "customer":
                break;
            case "invoice":
                navigate('InvoiceDetailsScreen');
                break;
            case "product":
                navigate('ProductDetailsScreen');
                break;
            case "tax":
                navigate('TaxDetailsScreen');
                break;
            default: 
                break;
        }
    }

    return (
        <View style={globalStyles.shadow}>
            <View 
                style={[
                    styles.container, {
                        height: height,
                    }
                ]}
            >
                <View style={styles.columnStretchContainer}>
                    <View style={styles.columnContainer}>
                        {children}
                    </View>
                    <TouchableWithoutFeedback onPress={redirectToDetails}>
                        <View>
                            <ResponsiveText 
                                fontStyle="details"
                                color={MAIN_ORANGE}
                                text="See details"
                            />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={globalStyles.rowCenter}>
                    <TouchableWithoutFeedback>
                        <View style={styles.iconSpace}>
                            <EditIcon />
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback>
                        <View>
                            <TrashIcon />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </View>
    );
}

export default EntityItem;