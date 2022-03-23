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

const AddCompanyScreen = () => {
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
                <TouchableLayout>
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
                </TouchableLayout>
            </ScrollView>
        </BasicView>
    );
}

export default AddCompanyScreen;