import React from 'react';
import { 
    FlatList,
    View, 
} from 'react-native';

import { 
    BasicView, 
    Header, 
    Button,
    EntityItem,
    globalStyles,
    CustomerItem,
} from '../../components';
import { MAIN_GRAY } from '../../contants/colors';
import { CUSTOMERS } from '../../mocks';
import { hp } from '../../tools';

const CustomersScreen = ({
    navigation: {
        navigate,
    },
}) => {
    return (
        <BasicView 
            headerComponent={
                <Header title="Customers" />
            }
        >
            <FlatList
                ListHeaderComponent={
                    <Button 
                        color={MAIN_GRAY}
                        text="Add customer"
                        backgroundColor="transparent"
                        isOutline
                        customStyle={globalStyles.mediumToSpace}
                        onPress={() => navigate('AddCustomerScreen')}
                    />
                } 
                showsVerticalScrollIndicator={false}
                data={CUSTOMERS}
                renderItem={({ item, index }) => (
                    <EntityItem 
                        key={index}
                        height={hp(96)}
                        type="customer"
                    >
                        <CustomerItem 
                            fullName={item.fullName}
                            email={item.email}
                        />
                    </EntityItem>
                )}
                style={globalStyles.flatListContainer}
                contentContainerStyle={globalStyles.alignCenter}
                ListFooterComponent={<View />}
                ListFooterComponentStyle={globalStyles.largeSpace}
            />
        </BasicView>
    );
}

export default CustomersScreen;