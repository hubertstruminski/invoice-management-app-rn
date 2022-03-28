import React, {
    useCallback,
    useRef,
    useState,
} from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';

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
    handleFormErrors, 
    validateNewProductForm, 
} from '../../tools';
import styles from '../screenStyle';

const AddProductScreen = ({
    navigation: {
        goBack,
    },
    taxes,
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

    const closeDropdown = useCallback(() => {
        taxRef.current.isOpen && taxRef.current.closeDropdown();
    }, [taxRef]);

    const createProduct = useCallback(() => {
        const errorObject = validateNewProductForm(name, price, amount, unit);
        const isValidModel = handleFormErrors(errorObject, errors, setErrors);
    
        if(isValidModel) {
            const foundTax  = taxes.find(item => item.id === taxId);
            console.log("id: " + foundTax?.id + ", name: " + foundTax?.name);
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
            <ScrollView 
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
                    />
                    <Button 
                        color={WHITE}
                        text={languages.buttons.save}
                        customStyle={globalStyles.largeBottomPadding}
                        onPress={createProduct}
                    />
                </TouchableLayout>
            </ScrollView>
        </BasicView>
    );
}

const mapStateToProps = state => ({
    taxes: state.tax.taxes,
});

export default connect(mapStateToProps, { })(AddProductScreen);