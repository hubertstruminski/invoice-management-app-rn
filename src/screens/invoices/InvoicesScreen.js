import React from 'react';
import { 
    FlatList, 
    View,
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { 
    BasicView, 
    Header, 
    Button,
    EntityItem,
    globalStyles,
    InvoiceItem,
} from '../../components';
import { MAIN_GRAY } from '../../contants/colors';
import { INVOICES } from '../../mocks';
import { hp } from '../../tools';

const InvoicesScreen = ({
    navigation: {
        navigate,
    },
}) => {
    return (
        <BasicView 
            headerComponent={
                <Header title="Invoices" />
            }
        >
            <FlatList
                ListHeaderComponent={
                    <Button 
                        color={MAIN_GRAY}
                        text="Add invoice"
                        backgroundColor="transparent"
                        isOutline
                        onPress={() => navigate('AddInvoiceScreen')}
                    />
                } 
                showsVerticalScrollIndicator={false}
                data={INVOICES}
                renderItem={({ item, index }) => (
                    <EntityItem 
                        key={index}
                        height={hp(112)}
                        type="invoice"
                    >
                        <InvoiceItem 
                            number={item.number}
                            fullName={item.fullName}
                            deadline={item.deadline}
                        />
                    </EntityItem>
                )}
                style={globalStyles.flatListContainer}
                contentContainerStyle={[globalStyles.alignCenter, {flexGrow: 1}]}
                ListFooterComponent={<View />}
                ListFooterComponentStyle={globalStyles.largeSpace}
            />
        </BasicView>
    );
}

export default InvoicesScreen;