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
    Header, 
    Input,
    TouchableLayout, 
} from '../../../core/components';
import globalStyles from '../../../core/styles/globalStyles';
import { WHITE } from '../../../core/constants/colors';
import { languages } from '../../../core/internationalization/languages';
import { 
    addProduct, 
    fetchTaxes, 
    updateProduct, 
} from '../../../core/redux/actions';
import { 
    handleFormErrors, 
    validateNewProductForm, 
} from '../../../core/tools';
import {
    addProductRequest, 
    updateProductRequest, 
} from '../../../core/redux/requests';
import { useInitData } from '../../../core/services';

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

    const [errors, setErrors] = useState([null, null, null, null, null, null]);

    let taxRef = useRef(null);

    useInitData(fetchTaxes);

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

    const createProduct = useCallback(async () => {
        const errorObject = validateNewProductForm(name, price, amount, unit, discount, taxId);
        const isValidModel = handleFormErrors(errorObject, errors, setErrors);
    
        if(isValidModel) {
            let payload = {
                name,
                price: Number(price),
                amount,
                discount,
                unit,
                taxId: taxId,
                description,
            };

            if(params?.isEdit) {
                const response = await updateProductRequest(productDetails.id, payload);
                if(response.status === 200) {
                    payload = { ...payload, id: productDetails.id };
                    updateProduct(payload);
                }
            } else {
                const response = await addProductRequest(payload);
                if(response.status === 201) {
                    payload = { ...payload, id: response.data?.id };
                    addProduct(payload);
                }
            }
            goBack();
        }
    }, [
        name, 
        price,
        amount,
        discount,
        unit,
        taxId,
        description,
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
                        withWarning={errors[4] !== null}
                        errorText={errors[4]}
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
                        containerStyle={globalStyles.lastInputSpace}
                        data={taxes}
                        ref={taxRef}
                        setId={setTaxId}
                        id={taxId}
                        chosenEntityName={productDetails?.tax?.name}
                        errorText={errors[5]}
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