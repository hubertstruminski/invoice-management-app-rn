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
    Header, 
    Input,
    TouchableLayout, 
} from '../../../core/components';
import globalStyles from '../../../core/styles/globalStyles';
import { WHITE } from '../../../core/constants/colors';
import { strings } from '../../../core/internationalization/strings';
import { 
    addCustomer, 
    updateCustomer, 
} from '../../../core/redux/actions';
import { 
    handleFormErrors, 
    validateNewCustomerForm, 
} from '../../../core/tools';
import { addCustomerRequest, updateCustomerRequest } from '../../../core/redux/requests';

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

    const createCustomer = useCallback(async () => {
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
                const response = await updateCustomerRequest(customerDetails.id, payload);
                if(response.status === 200) {
                    payload = { ...payload, id: customerDetails.id };
                    updateCustomer(payload);
                }
            } else {
                const response = await addCustomerRequest(payload);
                if(response.status === 201) {
                    payload = { ...payload, id: response.data?.id };
                    addCustomer(payload);
                }
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
        additionalInformations,
    ]);

    const phoneNumberMask = [/\+/, /\d/, /\d/, /\s/, /\d/, /\d/, /\d/, /\s/, /\d/, /\d/, /\d/, /\s/, /\d/, /\d/, /\d/];
    const nipMask = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];

    return (
        <BasicView 
            containerStyle={[
                globalStyles.alignCenter, 
                globalStyles.flex,
            ]}
            headerComponent={<Header title={strings.addEntity.addCustomer} />}
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
                        leftTitle={strings.labels.fullName}
                        placeholder={strings.placeholders.fullName}
                        withWarning={errors[0] !== null}
                        errorText={errors[0]}
                        containerStyle={globalStyles.regularBottomSpace}
                        value={fullName}
                        setValue={setFullName}
                    />
                    <Input 
                        leftTitle={strings.labels.email}
                        placeholder={strings.placeholders.email}
                        withWarning={errors[1] !== null}
                        errorText={errors[1]}
                        value={email}
                        setValue={setEmail}
                        containerStyle={globalStyles.regularBottomSpace}
                    />
                    <Input 
                        leftTitle={strings.labels.street}
                        placeholder={strings.placeholders.street}
                        withWarning={errors[2] !== null}
                        errorText={errors[2]}
                        value={street}
                        setValue={setStreet}
                        containerStyle={globalStyles.regularBottomSpace}
                    />
                    <Input 
                        leftTitle={strings.labels.city}
                        placeholder={strings.placeholders.city}
                        withWarning={errors[3] !== null}
                        errorText={errors[3]}
                        value={city}
                        setValue={setCity}
                        containerStyle={globalStyles.regularBottomSpace}
                    />
                    <Input 
                        leftTitle={strings.labels.country}
                        placeholder={strings.placeholders.country}
                        containerStyle={globalStyles.regularBottomSpace}
                        rightTitle={strings.labels.optional}
                        value={country}
                        setValue={setCountry}
                    />
                    <Input 
                        leftTitle={strings.labels.phoneNumber}
                        placeholder={strings.placeholders.phoneNumber}
                        containerStyle={globalStyles.regularBottomSpace}
                        rightTitle={strings.labels.optional}
                        value={phoneNumber}
                        setValue={setPhoneNumber}
                        mask={phoneNumberMask}
                    />
                    <Input 
                        leftTitle={strings.labels.nip}
                        placeholder={strings.placeholders.nip}
                        withWarning={errors[4] !== null}
                        errorText={errors[4]}
                        containerStyle={globalStyles.regularBottomSpace}
                        value={nip}
                        setValue={setNip}
                        mask={nipMask}
                    />
                    <Input 
                        leftTitle={strings.labels.additionalInformations}
                        placeholder={strings.placeholders.additionalInformations}
                        containerStyle={globalStyles.lastInputSpace}
                        rightTitle={strings.labels.optional}
                        value={additionalInformations}
                        setValue={setAdditionalInformations}
                    />
                    <Button 
                        color={WHITE}
                        text={strings.buttons.save}
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