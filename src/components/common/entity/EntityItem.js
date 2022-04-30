import React, { 
    useCallback, 
} from 'react';
import { 
    ImageEditor,
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
import { hp, showConfirmationDelete } from '../../../tools';
import styles from './entityItemStyle';
import { 
    setCompanyDetails, 
    setProductDetails, 
    setTaxDetails, 
    setInvoiceDetails,
    setCustomerDetails,
    removeCompany,
    removeCustomer,
    removeInvoice,
    removeProduct,
    removeTax,
} from '../../../redux/actions';
import { languages } from '../../../internationalization/languages';

const EntityItem = ({
    children,
    height = hp(64),
    type,
    setCompanyDetails,
    setTaxDetails,
    setProductDetails,
    setInvoiceDetails,
    setCustomerDetails,
    removeCompany,
    removeCustomer,
    removeProduct,
    removeInvoice,
    removeTax,
    companies,
    customers,
    invoices,
    products,
    taxes,
    item: {
        id,
    },
    item,
}) => {
    const { navigate } = useNavigation();

    const redirectToDetails = () => {
        switch(type) {
            case COMPANY_ENTITY:
                const chosenCompany = companies.find(item => item.id === id);
                setCompanyDetails(chosenCompany);

                navigate('MyCompanyDetailsScreen');
                break;
            case CUSTOMER_ENTITY:
                const chosenCustomer = customers.find(item => item.id === id);
                setCustomerDetails(chosenCustomer);

                navigate('CustomerDetailsScreen');
                break;
            case INVOICE_ENTITY:
                const chosenInvoice = invoices.find(item => item.id === id);
                setInvoiceDetails(chosenInvoice);

                navigate('InvoiceDetailsScreen');
                break;
            case PRODUCT_ENTITY:
                const chosenProduct = products.find(item => item.id === id);
                setProductDetails(chosenProduct);

                navigate('ProductDetailsScreen');
                break;
            case TAX_ENTITY:
                const chosenTax = taxes.find(item => item.id === id);
                setTaxDetails(chosenTax);

                navigate('TaxDetailsScreen');
                break;
            default: 
                break;
        }
    }

    const removeItem = useCallback(() => {
        switch(type) {
            case COMPANY_ENTITY:
                showConfirmationDelete(() => removeCompany(id));
                break;
            case CUSTOMER_ENTITY:
                showConfirmationDelete(() => removeCustomer(id));
                break;
            case INVOICE_ENTITY:
                showConfirmationDelete(() => removeInvoice(id));
                break;
            case PRODUCT_ENTITY:
                showConfirmationDelete(() => removeProduct(id));
                break;
            case TAX_ENTITY:
                showConfirmationDelete(() => removeTax(id));
                break;
            default: 
                break;
        }
    }, [id, type]);

    const updateItem = useCallback(() => {
        switch(type) {
            case COMPANY_ENTITY:
                const companyPayload = {
                    id: item.id,
                    name: item.name,
                    street: item.street,
                    postalCode: item.postalCode,
                    city: item.city,
                    country: item.country,
                };
                setCompanyDetails(companyPayload);
                navigate('AddCompanyScreen', { isEdit: true });
                break;
            case CUSTOMER_ENTITY:
                const customerPayload = {
                    id: item.id,
                    fullName: item.fullName,
                    email: item.email,
                    phoneNumber: item.phoneNumber,
                    nip: item.nip,
                    street: item.street,
                    city: item.city,
                    country: item.country,
                    description: item.description,
                };
                setCustomerDetails(customerPayload);
                navigate('AddCustomerScreen', { isEdit: true });
                break;
            case INVOICE_ENTITY:
                const invoicePayload = {
                    id: item.id,
                    number: item.number,
                    date: item.date,
                    deadline: item.deadline,
                    customer: item.customer,
                    description: item.description,
                    sentStatus: item.sentStatus,
                    products: item.products,
                };
                setInvoiceDetails(invoicePayload);
                navigate('AddInvoiceScreen', { isEdit: true });
                break;
            case PRODUCT_ENTITY:
                const productPayload = {
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    amount: item.amount,
                    discount: item.discount,
                    unit: item.unit,
                    invoice: item.invoice,
                    customer: item.customer,
                    tax: item.tax,
                    description: item.description,
                };
                setProductDetails(productPayload);
                navigate('AddProductScreen', { isEdit: true });
                break;
            case TAX_ENTITY:
                const taxPayload = {
                    id: item.id,
                    name: item.name,
                    amount: item.amount,
                    description: item.description,
                };
                setTaxDetails(taxPayload);
                navigate('AddTaxScreen', { isEdit: true });
                break;
            default: 
                break;
        }
    }, [type, item]);

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
                                text={languages.buttons.seeDetails}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={globalStyles.rowCenter}>
                    <TouchableIcon 
                        onPress={updateItem}
                        containerStyle={styles.iconSpace}
                    >
                        <EditIcon />
                    </TouchableIcon>
                    <TouchableIcon onPress={removeItem}>
                        <TrashIcon />
                    </TouchableIcon>
                </View>
            </View>
        </View>
    );
}

const mapStateToProps = state => ({
    companies: state.company.companies,
    customers: state.customer.customers,
    invoices: state.invoice.invoices,
    products: state.product.products,
    taxes: state.tax.taxes,
});

export default connect(mapStateToProps, {
    setCompanyDetails,
    setTaxDetails,
    setProductDetails,
    setInvoiceDetails,
    setCustomerDetails,
    removeCompany,
    removeCustomer,
    removeProduct,
    removeInvoice,
    removeTax,
})(EntityItem);