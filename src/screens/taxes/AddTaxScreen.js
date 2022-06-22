import React, {
    useCallback,
    useEffect,
    useState,
} from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { 
    BasicView, 
    Button, 
    globalStyles, 
    Header, 
    Input,
    TouchableLayout, 
} from '../../components';
import { WHITE } from '../../contants/colors';
import { languages } from '../../internationalization/languages';
import { 
    addTax, 
    updateTax, 
} from '../../redux/actions';
import { handleFormErrors } from '../../tools';
import { validateNewTaxForm } from '../../tools';
import { addTaxRequest, updateTaxRequest } from '../../redux/requests';

const AddTaxScreen = ({
    navigation: {
        goBack,
    },
    taxDetails,
    route: {
        params,
    },
    addTax,
    updateTax,
}) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');

    const [errors, setErrors] = useState([null, null]);

    useEffect(() => {
        setName(taxDetails?.name);
        setDescription(taxDetails?.description);
        setAmount(taxDetails?.amount?.toString());
    }, [taxDetails]);

    const createTax = useCallback(async () => {
        const errorObject = validateNewTaxForm(name, amount);
        const isValidModel = handleFormErrors(errorObject, errors, setErrors);
    
        if(isValidModel) {
            let payload = {
                name,
                amount,
                description,
            };

            if(params?.isEdit) {
                const response = await updateTaxRequest(taxDetails.id, payload);
                if(response.status === 200) {
                    payload = { ...payload, id: taxDetails.id };
                    updateTax(payload);
                }
            } else {
                const response = await addTaxRequest(payload);
                if(response.status === 201) {
                    payload = { ...payload, id: response.data?.id };
                    addTax(payload);
                }
            }
            goBack();
        }
    }, [
        name, 
        amount,
        errors,
        description,
    ]);

    return (
        <BasicView 
            containerStyle={[
                globalStyles.alignCenter, 
                globalStyles.flex,
            ]}
            headerComponent={<Header title={languages.addEntity.addTax} />}
        >
            <KeyboardAwareScrollView 
                extraHeight={150}
                style={[
                    globalStyles.flatListContainer,
                    globalStyles.addEntityScrollViewContainer,
                ]} 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[
                    globalStyles.alignCenter, 
                    globalStyles.spaceBetween, 
                    globalStyles.flex,
                ]}
            >
                <TouchableLayout>
                    <View style={globalStyles.flex}>
                        <Input 
                            leftTitle={languages.labels.name}
                            placeholder={languages.placeholders.name}
                            containerStyle={globalStyles.mediumBottomSpace}
                            withWarning={errors[0] !== null}
                            errorText={errors[0]}
                            value={name}
                            setValue={setName}
                        />
                        <Input 
                            leftTitle={languages.labels.description}
                            placeholder={languages.placeholders.description}
                            containerStyle={globalStyles.mediumBottomSpace}
                            rightTitle={languages.labels.optional}
                            value={description}
                            setValue={setDescription}
                        />
                        <Input 
                            leftTitle={languages.labels.amount}
                            placeholder={languages.placeholders.amount}
                            errorText={languages.labels.errorText}
                            value={amount}
                            setValue={setAmount}
                            withWarning={errors[1] !== null}
                            errorText={errors[1]}
                        />
                    </View>
                    <Button 
                        color={WHITE}
                        text={languages.buttons.save}
                        onPress={createTax}
                    />
                </TouchableLayout>
            </KeyboardAwareScrollView>
        </BasicView>
    );
}

const mapStateToProps = state => ({
    taxDetails: state.tax.taxDetails,
});

export default connect(mapStateToProps, { 
    addTax,
    updateTax,
})(AddTaxScreen);