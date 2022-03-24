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
    InvoiceItem,
} from '../../components';
import { 
    MAIN_GRAY, 
    TRANSPARENT, 
} from '../../contants/colors';
import { INVOICE_ENTITY } from '../../contants/constants';
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
                        backgroundColor={TRANSPARENT}
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
                        type={INVOICE_ENTITY}
                        id={item.id}
                    >
                        <InvoiceItem 
                            number={item.number}
                            fullName={item.customer.fullName}
                            deadline={item.deadline}
                        />
                    </EntityItem>
                )}
                style={globalStyles.flatListContainer}
                contentContainerStyle={[
                    globalStyles.alignCenter,
                    globalStyles.flexGrow,
                ]}
                ListFooterComponent={<View />}
                ListFooterComponentStyle={globalStyles.largeSpace}
            />
        </BasicView>
    );
}

export default InvoicesScreen;