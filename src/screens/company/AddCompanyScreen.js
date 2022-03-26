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

const AddCompanyScreen = () => {
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
                        leftTitle={languages.labels.postalCode}
                        placeholder={languages.placeholders.postalCode}
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
                        errorText={languages.labels.errorText}
                        withWarning
                        containerStyle={styles.lastInputSpace}
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

export default AddCompanyScreen;