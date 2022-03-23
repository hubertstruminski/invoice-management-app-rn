import React from 'react';
import { 
    TouchableWithoutFeedback, 
    View, 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { 
    globalStyles, 
    ResponsiveText,
    TouchableIcon, 
} from '../..';
import { 
    EditIcon, 
    TrashIcon, 
} from '../../../../assets';
import { MAIN_ORANGE } from '../../../contants/colors';
import { 
    COMPANY_ENTITY, 
    CUSTOMER_ENTITY, 
    INVOICE_ENTITY, 
    PRODUCT_ENTITY, 
    TAX_ENTITY, 
} from '../../../contants/constants';
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
            case COMPANY_ENTITY:
                navigate('MyCompanyDetailsScreen');
                break;
            case CUSTOMER_ENTITY:
                navigate('CustomerDetailsScreen');
                break;
            case INVOICE_ENTITY:
                navigate('InvoiceDetailsScreen');
                break;
            case PRODUCT_ENTITY:
                navigate('ProductDetailsScreen');
                break;
            case TAX_ENTITY:
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
                    <TouchableIcon containerStyle={styles.iconSpace}>
                        <EditIcon />
                    </TouchableIcon>
                    <TouchableIcon>
                        <TrashIcon />
                    </TouchableIcon>
                </View>
            </View>
        </View>
    );
}

export default EntityItem;