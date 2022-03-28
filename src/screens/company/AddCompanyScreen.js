import React, { 
    useCallback,
    useEffect,
    useState,
} from 'react';
import { ScrollView } from 'react-native';
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
import { 
    handleFormErrors, 
    validateNewCompanyForm, 
} from '../../tools';
import styles from '../screenStyle';

const AddCompanyScreen = ({
    navigation: {
        goBack,
    },
    companyDetails,
    route: {
        params,
    },
}) => {
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

    const createCompany = useCallback(() => {
        const errorObject = validateNewCompanyForm(companyName, street, postalCode, city, country);
        const isValidModel = handleFormErrors(errorObject, errors, setErrors);
    
        if(isValidModel) {
            if(params?.isEdit) {
                
            }
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
            <ScrollView 
                style={[
                    globalStyles.flatListContainer,
                    globalStyles.addEntityScrollViewContainer,
                ]} 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={globalStyles.alignCenter}
            >
                <TouchableLayout>
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
                        containerStyle={styles.lastInputSpace}
                    />
                    <Button 
                        color={WHITE}
                        text={languages.buttons.save}
                        customStyle={globalStyles.largeBottomPadding}
                        onPress={createCompany}
                    />
                </TouchableLayout>
            </ScrollView>
        </BasicView>
    );
}

const mapStateToProps = state => ({
    companyDetails: state.company.companyDetails,
});

export default connect(mapStateToProps, { })(AddCompanyScreen);