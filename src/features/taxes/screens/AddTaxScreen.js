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
    Header, 
    Input,
    TouchableLayout, 
} from '../../../core/components';
import globalStyles from '../../../core/styles/globalStyles';
import { WHITE } from '../../../core/constants/colors';
import { strings } from '../../../core/internationalization/strings';
import { 
    addTax, 
    updateTax, 
} from '../../../core/redux/actions';
import { handleFormErrors, validateNewTaxForm } from '../../../core/tools';
import { addTaxRequest, updateTaxRequest } from '../../../core/redux/requests';

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
            headerComponent={<Header title={strings.addEntity.addTax} />}
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
                            leftTitle={strings.labels.name}
                            placeholder={strings.placeholders.name}
                            containerStyle={globalStyles.mediumBottomSpace}
                            withWarning={errors[0] !== null}
                            errorText={errors[0]}
                            value={name}
                            setValue={setName}
                        />
                        <Input 
                            leftTitle={strings.labels.description}
                            placeholder={strings.placeholders.description}
                            containerStyle={globalStyles.mediumBottomSpace}
                            rightTitle={strings.labels.optional}
                            value={description}
                            setValue={setDescription}
                        />
                        <Input 
                            leftTitle={strings.labels.amount}
                            placeholder={strings.placeholders.amount}
                            errorText={strings.labels.errorText}
                            value={amount}
                            setValue={setAmount}
                            withWarning={errors[1] !== null}
                            errorText={errors[1]}
                        />
                    </View>
                    <Button 
                        color={WHITE}
                        text={strings.buttons.save}
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