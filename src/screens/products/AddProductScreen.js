import React, {
    useCallback,
    useRef,
    useState,
    useEffect,
} from 'react';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { 
    BasicView, 
    Button, 
    Dropdown, 
    globalStyles, 
    Header, 
    Input,
    TouchableLayout, 
} from '../../components';
import { WHITE } from '../../contants/colors';
import { languages } from '../../internationalization/languages';
import { 
    addProduct, 
    updateProduct, 
} from '../../redux/actions';
import { 
    handleFormErrors, 
    validateNewProductForm, 
} from '../../tools';
import styles from '../screenStyle';

const AddProductScreen = ({
    navigation: {
        goBack,
    },
    taxes,
    customers,
    invoices,
    productDetails,
    addProduct,
    updateProduct,
    route: {
        params,
    },
}) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [amount, setAmount] = useState('');
    const [discount, setDiscount] = useState('');
    const [unit, setUnit] = useState('');
    const [taxId, setTaxId] = useState(null);

    const [errors, setErrors] = useState([null, null, null, null]);

    let taxRef = useRef(null);

    useEffect(() => {
        setName(productDetails?.name);
        setDescription(productDetails?.description);
        setPrice(productDetails?.price?.toString());
        setAmount(productDetails?.amount?.toString());
        setDiscount(productDetails?.discount?.toString());
        setUnit(productDetails?.unit);
        setTaxId(productDetails?.tax?.id);
    }, [productDetails]);

    const closeDropdown = useCallback(() => {
        taxRef.current.isOpen && taxRef.current.closeDropdown();
    }, [taxRef]);

    const createProduct = useCallback(() => {
        const errorObject = validateNewProductForm(name, price, amount, unit);
        const isValidModel = handleFormErrors(errorObject, errors, setErrors);
    
        if(isValidModel) {
            let payload = {
                name,
                price,
                amount,
                discount,
                unit,
                tax: taxes.find(item => item.id === taxId),
                description,
            };

            if(params?.isEdit) {
                payload = { 
                    ...payload, id: 
                    productDetails.id,
                    customer: customers.find(item => item.id === productDetails?.customer?.id),
                    invoice: invoices.find(item => item.id === productDetails?.invoice?.id),
                };
                updateProduct(payload);
            } else {
                payload = { ...payload, id: (new Date()).getTime() };
                addProduct(payload);
            }
            goBack();
        }
    }, [
        name, 
        price,
        amount,
        unit,
        taxes,
        taxId,
        errors,
    ]);

    return (
        <BasicView 
            containerStyle={[
                globalStyles.alignCenter, 
                globalStyles.flex,
            ]}
            headerComponent={<Header title={languages.addEntity.addProduct} />}
        >
            <KeyboardAwareScrollView 
                extraHeight={150}
                style={[
                    globalStyles.flatListContainer,
                    globalStyles.addEntityScrollViewContainer,
                ]} 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={globalStyles.alignCenter}
            >
                <TouchableLayout callback={closeDropdown}>
                    <Input 
                        leftTitle={languages.labels.name}
                        placeholder={languages.placeholders.name}
                        withWarning={errors[0] !== null}
                        errorText={errors[0]}
                        containerStyle={globalStyles.regularBottomSpace}
                        value={name}
                        setValue={setName}
                    />
                    <Input 
                        leftTitle={languages.labels.description}
                        rightTitle={languages.labels.optional}
                        placeholder={languages.placeholders.description}
                        containerStyle={globalStyles.regularBottomSpace}
                        value={description}
                        setValue={setDescription}
                    />
                    <Input 
                        leftTitle={languages.labels.price}
                        placeholder={languages.placeholders.price}
                        withWarning={errors[1] !== null}
                        errorText={errors[1]}
                        containerStyle={globalStyles.regularBottomSpace}
                        value={price}
                        setValue={setPrice}
                    />
                    <Input 
                        leftTitle={languages.labels.amount}
                        placeholder={languages.placeholders.amount}
                        withWarning={errors[2] !== null}
                        errorText={errors[2]}
                        containerStyle={globalStyles.regularBottomSpace}
                        value={amount}
                        setValue={setAmount}
                    />
                    <Input 
                        leftTitle={languages.labels.discount}
                        rightTitle={languages.labels.optional}
                        containerStyle={globalStyles.regularBottomSpace}
                        value={discount}
                        setValue={setDiscount}
                    />
                    <Input 
                        leftTitle={languages.labels.unit}
                        placeholder={languages.placeholders.time}
                        withWarning={errors[3] !== null}
                        errorText={errors[3]}
                        containerStyle={globalStyles.regularBottomSpace}
                        value={unit}
                        setValue={setUnit}
                    />
                    <Dropdown 
                        leftTitle={languages.labels.tax}
                        placeholder={languages.placeholders.tax}
                        containerStyle={styles.lastInputSpace}
                        data={taxes}
                        ref={taxRef}
                        setId={setTaxId}
                        chosenEntityName={productDetails?.tax?.name}
                    />
                    <Button 
                        color={WHITE}
                        text={languages.buttons.save}
                        customStyle={globalStyles.largeBottomPadding}
                        onPress={createProduct}
                    />
                </TouchableLayout>
            </KeyboardAwareScrollView>
        </BasicView>
    );
}

const mapStateToProps = state => ({
    taxes: state.tax.taxes,
    productDetails: state.product.productDetails,
    customers: state.customer.customers,
    invoices: state.invoice.invoices,
});

export default connect(mapStateToProps, { 
    addProduct,
    updateProduct,
})(AddProductScreen);