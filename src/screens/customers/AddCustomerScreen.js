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
import styles from '../screenStyle';

const AddCustomerScreen = () => {
    return (
        <BasicView 
            containerStyle={[
                globalStyles.alignCenter, 
                globalStyles.flex,
            ]}
            headerComponent={<Header title="Add customer" />}
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
                        leftTitle="Full name"
                        placeholder="Enter full name"
                        withWarning
                        errorText="Error text"
                        containerStyle={globalStyles.regularBottomSpace}
                    />
                    <Input 
                        leftTitle="Email"
                        placeholder="Enter email"
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
                        leftTitle="City"
                        placeholder="Enter city"
                        withWarning
                        errorText="Error text"
                        containerStyle={globalStyles.regularBottomSpace}
                    />
                    <Input 
                        leftTitle="Country"
                        placeholder="Enter country"
                        containerStyle={globalStyles.regularBottomSpace}
                        rightTitle="Optional"
                    />
                    <Input 
                        leftTitle="Phone number"
                        placeholder="Enter phone number"
                        containerStyle={globalStyles.regularBottomSpace}
                        rightTitle="Optional"
                    />
                    <Input 
                        leftTitle="NIP"
                        placeholder="Enter NIP"
                        withWarning
                        errorText="Error text"
                        containerStyle={globalStyles.regularBottomSpace}
                    />
                    <Input 
                        leftTitle="Additional informations"
                        placeholder="Enter additional informations"
                        containerStyle={styles.lastInputSpace}
                        rightTitle="Optional"
                    />
                    <Button 
                        color={WHITE}
                        text="Save"
                        customStyle={globalStyles.largeBottomPadding}
                    />
                </TouchableLayout>
            </ScrollView>
        </BasicView>
    );
}

export default AddCustomerScreen;