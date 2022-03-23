import React, {
    useCallback,
    useRef,
} from 'react';
import { ScrollView } from 'react-native';

import { 
    BasicView, 
    Button, 
    Dropdown, 
    globalStyles, 
    Header, 
    Input,
    TouchableLayout, 
} from '../../components';
import { WHITE } from '../../contants/colors';
import { TAXES } from '../../mocks';
import styles from '../screenStyle';

const AddProductScreen = () => {
    let taxRef = useRef(null);

    const closeDropdown = useCallback(() => {
        taxRef.current.isOpen && taxRef.current.closeDropdown();
    }, [taxRef]);

    return (
        <BasicView 
            containerStyle={[
                globalStyles.alignCenter, 
                globalStyles.flex,
            ]}
            headerComponent={<Header title="Add product" />}
        >
            <ScrollView 
                style={[
                    globalStyles.flatListContainer,
                    globalStyles.addEntityScrollViewContainer,
                ]} 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={globalStyles.alignCenter}
            >
                <TouchableLayout callback={closeDropdown}>
                    <Input 
                        leftTitle="Name"
                        placeholder="Enter name"
                        withWarning
                        errorText="Error text"
                        containerStyle={globalStyles.regularBottomSpace}
                    />
                    <Input 
                        leftTitle="Description"
                        rightTitle="Optional"
                        placeholder="Enter description"
                        containerStyle={globalStyles.regularBottomSpace}
                    />
                    <Input 
                        leftTitle="Price"
                        placeholder="Enter price"
                        withWarning
                        errorText="Error text"
                        containerStyle={globalStyles.regularBottomSpace}
                    />
                    <Input 
                        leftTitle="Amount"
                        placeholder="Enter amount"
                        withWarning
                        errorText="Error text"
                        containerStyle={globalStyles.regularBottomSpace}
                    />
                    <Input 
                        leftTitle="Discount"
                        rightTitle="Optional"
                        containerStyle={globalStyles.regularBottomSpace}
                    />
                    <Input 
                        leftTitle="Unit"
                        placeholder="TIME"
                        withWarning
                        errorText="Error text"
                        containerStyle={globalStyles.regularBottomSpace}
                    />
                    <Dropdown 
                        leftTitle="Tax"
                        placeholder="Choose tax"
                        containerStyle={styles.lastInputSpace}
                        data={TAXES}
                        ref={taxRef}
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

export default AddProductScreen;