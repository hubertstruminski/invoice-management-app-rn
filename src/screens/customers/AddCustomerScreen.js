import React from 'react';
import { ScrollView } from 'react-native';

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
import styles from '../screenStyle';

const AddCustomerScreen = () => {
    return (
        <BasicView 
            containerStyle={[
                globalStyles.alignCenter, 
                globalStyles.flex,
            ]}
            headerComponent={<Header title={languages.addEntity.addCustomer} />}
        >
            <ScrollView 
                style={[
                    globalStyles.flatListContainer,
                    globalStyles.addEntityScrollViewContainer,
                ]} 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[globalStyles.alignCenter]}
            >
                <TouchableLayout>
                    <Input 
                        leftTitle={languages.labels.fullName}
                        placeholder={languages.placeholders.fullName}
                        errorText={languages.labels.errorText}
                        withWarning
                        containerStyle={globalStyles.regularBottomSpace}
                    />
                    <Input 
                        leftTitle={languages.labels.email}
                        placeholder={languages.placeholders.email}
                        errorText={languages.labels.errorText}
                        withWarning
                        containerStyle={globalStyles.regularBottomSpace}
                    />
                    <Input 
                        leftTitle={languages.labels.street}
                        placeholder={languages.placeholders.street}
                        errorText={languages.labels.errorText}
                        withWarning
                        containerStyle={globalStyles.regularBottomSpace}
                    />
                    <Input 
                        leftTitle={languages.labels.city}
                        placeholder={languages.placeholders.city}
                        errorText={languages.labels.errorText}
                        withWarning
                        containerStyle={globalStyles.regularBottomSpace}
                    />
                    <Input 
                        leftTitle={languages.labels.country}
                        placeholder={languages.placeholders.country}
                        containerStyle={globalStyles.regularBottomSpace}
                        rightTitle={languages.labels.optional}
                    />
                    <Input 
                        leftTitle={languages.labels.phoneNumber}
                        placeholder={languages.placeholders.phoneNumber}
                        containerStyle={globalStyles.regularBottomSpace}
                        rightTitle={languages.labels.optional}
                    />
                    <Input 
                        leftTitle={languages.labels.nip}
                        placeholder={languages.placeholders.nip}
                        errorText={languages.labels.errorText}
                        withWarning
                        containerStyle={globalStyles.regularBottomSpace}
                    />
                    <Input 
                        leftTitle={languages.labels.additionalInformations}
                        placeholder={languages.placeholders.additionalInformations}
                        containerStyle={styles.lastInputSpace}
                        rightTitle={languages.labels.optional}
                    />
                    <Button 
                        color={WHITE}
                        text={languages.buttons.save}
                        customStyle={globalStyles.largeBottomPadding}
                    />
                </TouchableLayout>
            </ScrollView>
        </BasicView>
    );
}

export default AddCustomerScreen;