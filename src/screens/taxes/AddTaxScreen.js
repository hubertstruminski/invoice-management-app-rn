import React, {
    useCallback,
    useEffect,
    useState,
} from 'react';
import { 
    ScrollView, 
    View, 
} from 'react-native';
import { connect } from 'react-redux';

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
import { handleFormErrors } from '../../tools';
import { validateNewTaxForm } from '../../tools';

const AddTaxScreen = ({
    navigation: {
        goBack,
    },
    taxDetails,
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

    const createTax = useCallback(() => {
        const errorObject = validateNewTaxForm(name, amount);
        const isValidModel = handleFormErrors(errorObject, errors, setErrors);
    
        if(isValidModel) {
            goBack();
        }
    }, [
        name, 
        amount,
        errors,
    ]);

    return (
        <BasicView 
            containerStyle={[
                globalStyles.alignCenter, 
                globalStyles.flex,
            ]}
            headerComponent={<Header title={languages.addEntity.addTax} />}
        >
            <ScrollView 
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
            </ScrollView>
        </BasicView>
    );
}

const mapStateToProps = state => ({
    taxDetails: state.tax.taxDetails,
});

export default connect(mapStateToProps, { })(AddTaxScreen);