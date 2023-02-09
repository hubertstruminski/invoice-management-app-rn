import React, { 
    useCallback,
    useEffect,
    useState,
    useRef,
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
import { languages } from '../../../core/internationalization/languages';
import { 
    addCompany, 
    updateCompany, 
} from '../../../core/redux/actions';
import { 
    handleFormErrors, 
    validateNewCompanyForm, 
} from '../../../core/tools';
import { addCompanyRequest, updateCompanyRequest } from '../../../core/redux/requests';

const AddCompanyScreen = ({
    navigation: {
        goBack,
    },
    companyDetails,
    route: {
        params,
    },
    addCompany,
    updateCompany,
}) => {
    let scrollRef = useRef(null);

    const [companyName, setCompanyName] = useState('');
    const [street, setStreet] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    const [errors, setErrors] = useState([null, null, null, null, null]);

    useEffect(() => {
        setCompanyName(companyDetails?.name);
        setStreet(companyDetails?.street);
        setPostalCode(companyDetails?.postalCode);
        setCity(companyDetails?.city);
        setCountry(companyDetails?.country);
    }, [companyDetails]);

    const createCompany = useCallback(async () => {
        const errorObject = validateNewCompanyForm(companyName, street, postalCode, city, country);
        const isValidModel = handleFormErrors(errorObject, errors, setErrors);
    
        if(isValidModel) {
            let payload = {
                name: companyName,
                street,
                postalCode,
                city,
                country,
            };

            if(params?.isEdit) {
                const response = await updateCompanyRequest(companyDetails.id, payload);
                if(response.status === 200) {
                    payload = { ...payload, id: companyDetails.id };
                    updateCompany(payload);
                }
            } else {
                const response = await addCompanyRequest(payload);
                if(response.status === 201) {
                    payload = { ...payload, id: response.data?.id };
                    addCompany(payload);
                }
            }
            goBack();
        }
    }, [
        companyName,
        street,
        postalCode,
        city,
        country,
        errors,
    ]);

    const postalCodeMask = [/\d/, /\d/, '-', /\d/, /\d/, /\d/];

    return (
        <BasicView 
            containerStyle={globalStyles.alignCenter}
            headerComponent={<Header title={languages.addEntity.addCompany} />}
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
                <TouchableLayout>
                    <View>
                    <Input 
                        leftTitle={languages.labels.companyName}
                        placeholder={languages.placeholders.companyName}
                        value={companyName}
                        setValue={setCompanyName}
                        withWarning={errors[0] !== null}
                        errorText={errors[0]}
                        containerStyle={globalStyles.regularBottomSpace}
                    />
                    <Input 
                        leftTitle={languages.labels.street}
                        placeholder={languages.placeholders.street}
                        value={street}
                        setValue={setStreet}
                        withWarning={errors[1] !== null}
                        errorText={errors[1]}
                        containerStyle={globalStyles.regularBottomSpace}
                    />
                    <Input 
                        leftTitle={languages.labels.postalCode}
                        placeholder={languages.placeholders.postalCode}
                        value={postalCode}
                        setValue={setPostalCode}
                        withWarning={errors[2] !== null}
                        errorText={errors[2]}
                        containerStyle={globalStyles.regularBottomSpace}
                        mask={postalCodeMask}
                    />
                    <Input 
                        leftTitle={languages.labels.city}
                        placeholder={languages.placeholders.city}
                        value={city}
                        setValue={setCity}
                        withWarning={errors[3] !== null}
                        errorText={errors[3]}
                        containerStyle={globalStyles.regularBottomSpace}
                    />
                    <Input 
                        leftTitle={languages.labels.country}
                        placeholder={languages.placeholders.country}
                        value={country}
                        setValue={setCountry}
                        withWarning={errors[4] !== null}
                        errorText={errors[4]}
                        containerStyle={globalStyles.lastInputSpace}
                    />
                    </View>
                    <Button 
                        color={WHITE}
                        text={languages.buttons.save}
                        customStyle={globalStyles.largeBottomPadding}
                        onPress={createCompany}
                    />
                </TouchableLayout>
            </KeyboardAwareScrollView>
        </BasicView>
    );
}

const mapStateToProps = state => ({
    companyDetails: state.company.companyDetails,
});

export default connect(mapStateToProps, { 
    addCompany,
    updateCompany,
})(AddCompanyScreen);