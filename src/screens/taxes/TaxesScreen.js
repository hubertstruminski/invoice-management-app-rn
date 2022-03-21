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
    TaxItem,
} from '../../components';
import { MAIN_GRAY } from '../../contants/colors';
import { TAXES } from '../../mocks';
import { hp } from '../../tools';

const TaxesScreen = ({
    navigation: {
        navigate,
    },
}) => {
    return (
        <BasicView 
            headerComponent={
                <Header title="Taxes" />
            }
        >
            <FlatList
                ListHeaderComponent={
                    <Button 
                        color={MAIN_GRAY}
                        text="Add tax"
                        backgroundColor="transparent"
                        isOutline
                        onPress={() => navigate('AddTaxScreen')}
                    />
                } 
                showsVerticalScrollIndicator={false}
                data={TAXES}
                renderItem={({ item, index }) => (
                    <EntityItem 
                        key={index}
                        height={hp(64)}
                    >
                        <TaxItem 
                            name={item.name}
                            amount={item.amount}
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

export default TaxesScreen;