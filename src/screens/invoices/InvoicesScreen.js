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
import { MAIN_GRAY } from '../../contants/colors';
import { INVOICES } from '../../mocks';
import { hp } from '../../tools';

const InvoicesScreen = () => {
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
                    />
                } 
                showsVerticalScrollIndicator={false}
                data={INVOICES}
                renderItem={({ item, index }) => (
                    <EntityItem 
                        key={index}
                        height={hp(112)}
                    >
                        <InvoiceItem 
                            number={item.number}
                            fullName={item.fullName}
                            deadline={item.deadline}
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

export default InvoicesScreen;