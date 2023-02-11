import React from 'react';

import { View } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { 
    BasicView, 
    Button, 
    Input,
    TouchableLayout, 
} from '../../../core/components';
import globalStyles from '../../../core/styles/globalStyles';
import { strings } from '../../../core/internationalization/strings';
import { 
    useAddCompanyScreen, 
    postalCodeMask, 
} from '../services';
import { hp } from '../../../core/tools';
import { useTheme } from '../../../core/services';

const AddCompanyScreen = ({
    route: {
        params,
    },
}) => {
    const { colors } = useTheme();
    const {  
        createCompany,
        companyName, 
        setCompanyName,
        street, 
        setStreet,
        postalCode, 
        setPostalCode,
        city, 
        setCity,
        country, 
        setCountry,
        errors, 
    } = useAddCompanyScreen(params);

    return (
        <BasicView 
            containerStyle={globalStyles.alignCenter}
            title={strings.addEntity.addCompany}
        >
            <KeyboardAwareScrollView 
                extraHeight={hp(150)}
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
                        leftTitle={strings.labels.companyName}
                        placeholder={strings.placeholders.companyName}
                        value={companyName}
                        setValue={setCompanyName}
                        withWarning={errors[0] !== null}
                        errorText={errors[0]}
                        containerStyle={globalStyles.regularBottomSpace}
                    />
                    <Input 
                        leftTitle={strings.labels.street}
                        placeholder={strings.placeholders.street}
                        value={street}
                        setValue={setStreet}
                        withWarning={errors[1] !== null}
                        errorText={errors[1]}
                        containerStyle={globalStyles.regularBottomSpace}
                    />
                    <Input 
                        leftTitle={strings.labels.postalCode}
                        placeholder={strings.placeholders.postalCode}
                        value={postalCode}
                        setValue={setPostalCode}
                        withWarning={errors[2] !== null}
                        errorText={errors[2]}
                        containerStyle={globalStyles.regularBottomSpace}
                        mask={postalCodeMask}
                    />
                    <Input 
                        leftTitle={strings.labels.city}
                        placeholder={strings.placeholders.city}
                        value={city}
                        setValue={setCity}
                        withWarning={errors[3] !== null}
                        errorText={errors[3]}
                        containerStyle={globalStyles.regularBottomSpace}
                    />
                    <Input 
                        leftTitle={strings.labels.country}
                        placeholder={strings.placeholders.country}
                        value={country}
                        setValue={setCountry}
                        withWarning={errors[4] !== null}
                        errorText={errors[4]}
                        containerStyle={globalStyles.lastInputSpace}
                    />
                    </View>
                    <Button 
                        color={colors.WHITE}
                        text={strings.buttons.save}
                        customStyle={globalStyles.largeBottomPadding}
                        onPress={createCompany}
                    />
                </TouchableLayout>
            </KeyboardAwareScrollView>
        </BasicView>
    );
}

export default AddCompanyScreen;