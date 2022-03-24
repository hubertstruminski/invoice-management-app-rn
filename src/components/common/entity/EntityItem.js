import React from 'react';
import { 
    TouchableWithoutFeedback, 
    View, 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';

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
import { 
    COMPANIES, 
    CUSTOMERS, 
    INVOICES, 
    PRODUCTS, 
    TAXES, 
} from '../../../mocks';
import { 
    setCompanyDetails, 
    setProductDetails, 
    setTaxDetails, 
    setInvoiceDetails,
    setCustomerDetails,
} from '../../../redux/actions';

const EntityItem = ({
    children,
    height = hp(64),
    type,
    id,
    setCompanyDetails,
    setTaxDetails,
    setProductDetails,
    setInvoiceDetails,
    setCustomerDetails,
}) => {
    const { navigate } = useNavigation();

    const redirectToDetails = () => {
        switch(type) {
            case COMPANY_ENTITY:
                const chosenCompany = COMPANIES.find(item => item.id === id);
                setCompanyDetails(chosenCompany);

                navigate('MyCompanyDetailsScreen');
                break;
            case CUSTOMER_ENTITY:
                const chosenCustomer = CUSTOMERS.find(item => item.id === id);
                setCustomerDetails(chosenCustomer);

                navigate('CustomerDetailsScreen');
                break;
            case INVOICE_ENTITY:
                const chosenInvoice = INVOICES.find(item => item.id === id);
                setInvoiceDetails(chosenInvoice);

                navigate('InvoiceDetailsScreen');
                break;
            case PRODUCT_ENTITY:
                const chosenProduct = PRODUCTS.find(item => item.id === id);
                setProductDetails(chosenProduct);

                navigate('ProductDetailsScreen');
                break;
            case TAX_ENTITY:
                const chosenTax = TAXES.find(item => item.id === id);
                setTaxDetails(chosenTax);

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

export default connect(() => ({}), {
    setCompanyDetails,
    setTaxDetails,
    setProductDetails,
    setInvoiceDetails,
    setCustomerDetails,
})(EntityItem);