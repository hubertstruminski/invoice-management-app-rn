import React from 'react';

import { View } from 'react-native';

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
import { useAddTaxScreen } from '../services';

const AddTaxScreen = ({
    route: {
        params,
    },
}) => {
    const {
        createTax,
        name, 
        setName,
        description, 
        setDescription,
        amount, 
        setAmount,
        errors, 
    } = useAddTaxScreen(params);

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

export default AddTaxScreen;