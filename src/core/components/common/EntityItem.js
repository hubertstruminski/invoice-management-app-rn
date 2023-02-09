import React, { 
    useCallback, 
} from 'react';

import { 
    TouchableWithoutFeedback, 
    View, 
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';

import { 
    ResponsiveText,
    TouchableIcon, 
} from '..';
import globalStyles from '../../styles/globalStyles';
import { 
    EditIcon, 
    TrashIcon, 
} from '../../../../assets';
import { MAIN_ORANGE } from '../../constants/colors';
import { 
    COMPANY_ENTITY, 
    CUSTOMER_ENTITY, 
    INVOICE_ENTITY, 
    PRODUCT_ENTITY, 
    TAX_ENTITY, 
} from '../../constants/constants';
import { hp, showConfirmationDelete } from '../../tools';
import styles from '../../styles/entityItemStyle';
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
} from '../../redux/actions';
import { 
    removeCompanyById, removeCustomerById, removeInvoiceById, removeProductById, removeTaxById,
} from '../../redux/requests';
import { languages } from '../../internationalization/languages';

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
                showConfirmationDelete(async () => {
                   try {
                        const response = await removeCompanyById(id);
                        if(response.status === 200) {
                            removeCompany(id);
                        }
                    } catch(error) {
                        console.log(error);
                    }
                });
                break;
            case CUSTOMER_ENTITY:
                showConfirmationDelete(async () => {
                    try {
                        const response = await removeCustomerById(id);
                        if(response.status === 200) {
                            removeCustomer(id)
                        }
                    } catch(error) {
                        console.log(error);
                    }
                });
                break;
            case INVOICE_ENTITY:
                showConfirmationDelete(async () => {
                    try {
                        const response = await removeInvoiceById(id);
                        if(response.status === 200) {
                            removeInvoice(id);
                        }
                    } catch(error) {
                        console.log(error);
                    }
                });
                break;
            case PRODUCT_ENTITY:
                showConfirmationDelete(async () => {
                    try {
                        const response = await removeProductById(id);
                        if(response.status === 200) {
                            removeProduct(id);
                        }
                    } catch(error) {
                        console.log(error);
                    }
                });
                break;
            case TAX_ENTITY:
                showConfirmationDelete(async () => {
                    try {
                        const response = await removeTaxById(id);
                        if(response.status === 200) {
                            removeTax(id);
                        }
                    } catch(error) {
                       console.log(error);
                    }
                });
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