import React, {
    useCallback,
    useEffect,
    useState,
} from 'react';
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
    addCustomer, 
    updateCustomer, 
} from '../../redux/actions';
import { 
    handleFormErrors, 
    validateNewCustomerForm, 
} from '../../tools';
import styles from '../screenStyle';

const AddCustomerScreen = ({
    navigation: {
        goBack,
    },
    customerDetails,
    addCustomer,
    updateCustomer,
    route: {
        params,
    }
}) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [nip, setNip] = useState('');
    const [additionalInformations, setAdditionalInformations] = useState('');

    const [errors, setErrors] = useState([null, null, null, null, null]);

    useEffect(() => {
        setFullName(customerDetails?.fullName);
        setEmail(customerDetails?.email);
        setStreet(customerDetails?.street);
        setCity(customerDetails?.city);
        setCountry(customerDetails?.country);
        setPhoneNumber(customerDetails?.phoneNumber);
        setNip(customerDetails?.nip);
        setAdditionalInformations(customerDetails?.description);
    }, [customerDetails]);

    const createCustomer = useCallback(() => {
        const errorObject = validateNewCustomerForm(fullName, email, street, city, nip);
        const isValidModel = handleFormErrors(errorObject, errors, setErrors);
    
        if(isValidModel) {
            let payload = {
                fullName,
                email,
                phoneNumber,
                nip,
                street,
                city,
                country,
                description: additionalInformations,
            };

            if(params?.isEdit) {
                payload = { ...payload, id: customerDetails.id };
                updateCustomer(payload);
            } else {
                payload = { ...payload, id: (new Date()).getTime() };
                addCustomer(payload);
            }
            goBack();
        }
    }, [
        fullName,
        email,
        street,
        city,
        nip,
        errors,
    ]);

    const phoneNumberMask = [/\+/, /\d/, /\d/, /\s/, /\d/, /\d/, /\d/, /\s/, /\d/, /\d/, /\d/, /\s/, /\d/, /\d/, /\d/];
    const nipMask = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];

    return (
        <BasicView 
            containerStyle={[
                globalStyles.alignCenter, 
                globalStyles.flex,
            ]}
            headerComponent={<Header title={languages.addEntity.addCustomer} />}
        >

            <KeyboardAwareScrollView 
                extraHeight={150}
                contentContainerStyle={globalStyles.alignCenter}
                style={[
                    globalStyles.flatListContainer,
                    globalStyles.addEntityScrollViewContainer,
                ]} 
                showsVerticalScrollIndicator={false}
            >
                <TouchableLayout>
                    <Input 
                        leftTitle={languages.labels.fullName}
                        placeholder={languages.placeholders.fullName}
                        withWarning={errors[0] !== null}
                        errorText={errors[0]}
                        containerStyle={globalStyles.regularBottomSpace}
                        value={fullName}
                        setValue={setFullName}
                    />
                    <Input 
                        leftTitle={languages.labels.email}
                        placeholder={languages.placeholders.email}
                        withWarning={errors[1] !== null}
                        errorText={errors[1]}
                        value={email}
                        setValue={setEmail}
                        containerStyle={globalStyles.regularBottomSpace}
                    />
                    <Input 
                        leftTitle={languages.labels.street}
                        placeholder={languages.placeholders.street}
                        withWarning={errors[2] !== null}
                        errorText={errors[2]}
                        value={street}
                        setValue={setStreet}
                        containerStyle={globalStyles.regularBottomSpace}
                    />
                    <Input 
                        leftTitle={languages.labels.city}
                        placeholder={languages.placeholders.city}
                        withWarning={errors[3] !== null}
                        errorText={errors[3]}
                        value={city}
                        setValue={setCity}
                        containerStyle={globalStyles.regularBottomSpace}
                    />
                    <Input 
                        leftTitle={languages.labels.country}
                        placeholder={languages.placeholders.country}
                        containerStyle={globalStyles.regularBottomSpace}
                        rightTitle={languages.labels.optional}
                        value={country}
                        setValue={setCountry}
                    />
                    <Input 
                        leftTitle={languages.labels.phoneNumber}
                        placeholder={languages.placeholders.phoneNumber}
                        containerStyle={globalStyles.regularBottomSpace}
                        rightTitle={languages.labels.optional}
                        value={phoneNumber}
                        setValue={setPhoneNumber}
                        mask={phoneNumberMask}
                    />
                    <Input 
                        leftTitle={languages.labels.nip}
                        placeholder={languages.placeholders.nip}
                        withWarning={errors[4] !== null}
                        errorText={errors[4]}
                        containerStyle={globalStyles.regularBottomSpace}
                        value={nip}
                        setValue={setNip}
                        mask={nipMask}
                    />
                    <Input 
                        leftTitle={languages.labels.additionalInformations}
                        placeholder={languages.placeholders.additionalInformations}
                        containerStyle={styles.lastInputSpace}
                        rightTitle={languages.labels.optional}
                        value={additionalInformations}
                        setValue={setAdditionalInformations}
                    />
                    <Button 
                        color={WHITE}
                        text={languages.buttons.save}
                        onPress={createCustomer}
                        customStyle={globalStyles.largeBottomPadding}
                    />
                </TouchableLayout>
            </KeyboardAwareScrollView>
        </BasicView>
    );
}

const mapStateToProps = state => ({
    customerDetails: state.customer.customerDetails,
});

export default connect(mapStateToProps, { 
    addCustomer,
    updateCustomer,
})(AddCustomerScreen);