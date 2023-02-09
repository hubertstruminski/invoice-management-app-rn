import React from 'react';

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
import { useAddCustomerScreen } from '../services';

const AddCustomerScreen = ({
    route: {
        params,
    }
}) => {
    const {
        createCustomer,
        fullName,
        setFullName,
        email,
        setEmail,
        street, 
        setStreet,
        city, 
        setCity,
        country, 
        setCountry,
        phoneNumber, 
        setPhoneNumber,
        nip, 
        setNip,
        additionalInformations, 
        setAdditionalInformations,
        errors,
    } = useAddCustomerScreen(params);

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

export default AddCustomerScreen;