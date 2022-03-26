import React from 'react';
import { 
    ScrollView, 
    View, 
} from 'react-native';

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

const AddTaxScreen = () => {
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
                            errorText={languages.labels.errorText}
                            withWarning
                            containerStyle={globalStyles.mediumBottomSpace}
                        />
                        <Input 
                            leftTitle={languages.labels.description}
                            placeholder={languages.placeholders.description}
                            containerStyle={globalStyles.mediumBottomSpace}
                            rightTitle={languages.labels.optional}
                        />
                        <Input 
                            leftTitle={languages.labels.amount}
                            placeholder={languages.placeholders.amount}
                            errorText={languages.labels.errorText}
                            withWarning
                        />
                    </View>
                    <Button 
                        color={WHITE}
                        text={languages.buttons.save}
                    />
                </TouchableLayout>
            </ScrollView>
        </BasicView>
    );
}

export default AddTaxScreen;