import React from 'react';
import { 
    ScrollView, 
    TouchableWithoutFeedback, 
    Keyboard, 
    View,
} from 'react-native';

import { 
    BasicView, 
    Button, 
    globalStyles, 
    Header, 
    Input, 
} from '../../components';
import { WHITE } from '../../contants/colors';
import styles from '../authorization/authorizationStyle';

const AddCompanyScreen = ({
    navigation: {
        navigate,
    },
}) => {
    return (
        <BasicView 
            containerStyle={globalStyles.alignCenter}
            headerComponent={<Header title="Add company" />}
        >
            <ScrollView 
                style={[
                    globalStyles.flatListContainer,
                    globalStyles.addEntityScrollViewContainer,
                ]} 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={globalStyles.alignCenter}
            >
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View>
                        <Input 
                            leftTitle="Company name"
                            placeholder="Enter company name"
                            withWarning
                            errorText="Error text"
                            containerStyle={globalStyles.regularBottomSpace}
                        />
                        <Input 
                            leftTitle="Street"
                            placeholder="Enter street"
                            withWarning
                            errorText="Error text"
                            containerStyle={globalStyles.regularBottomSpace}
                        />
                        <Input 
                            leftTitle="Postalcode"
                            placeholder="Enter postalcode"
                            withWarning
                            errorText="Error text"
                            containerStyle={globalStyles.regularBottomSpace}
                        />
                        <Input 
                            leftTitle="City"
                            placeholder="Enter city"
                            withWarning
                            errorText="Error text"
                            containerStyle={globalStyles.regularBottomSpace}
                        />
                        <Input 
                            leftTitle="Country"
                            placeholder="Enter country"
                            withWarning
                            errorText="Error text"
                            containerStyle={styles.lastInputSpace}
                        />
                        <Button 
                            color={WHITE}
                            text="Save"
                            customStyle={globalStyles.largeBottomPadding}
                        />
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </BasicView>
    );
}

export default AddCompanyScreen;