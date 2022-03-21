import React from 'react';
import { 
    ScrollView, 
    View, 
    TouchableWithoutFeedback, 
    Keyboard, 
} from 'react-native';

import { 
    BasicView, 
    Button, 
    globalStyles, 
    Header, 
    Input, 
} from '../../components';
import { WHITE } from '../../contants/colors';

const AddTaxScreen = ({
    navigation: {
        navigate,
    },
}) => {
    return (
        <BasicView 
            containerStyle={[globalStyles.alignCenter, globalStyles.flex]}
            headerComponent={<Header title="Add tax" />}
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
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View>
                        <View style={globalStyles.flex}>
                            <Input 
                                leftTitle="Name"
                                placeholder="Enter name"
                                withWarning
                                errorText="Error text"
                                containerStyle={globalStyles.mediumBottomSpace}
                            />
                            <Input 
                                leftTitle="Description"
                                placeholder="Enter description"
                                containerStyle={globalStyles.mediumBottomSpace}
                                rightTitle="Optional"
                            />
                            <Input 
                                leftTitle="Amount"
                                placeholder="Enter amount"
                                withWarning
                                errorText="Error text"
                            />
                        </View>
                        <Button 
                            color={WHITE}
                            text="Save" 
                        />
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </BasicView>
    );
}

export default AddTaxScreen;