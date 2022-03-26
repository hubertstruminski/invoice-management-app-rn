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
import { 
    MAIN_GRAY, 
    TRANSPARENT, 
} from '../../contants/colors';
import { TAX_ENTITY } from '../../contants/constants';
import { languages } from '../../internationalization/languages';
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
                <Header title={languages.dashboardTiles.taxes} />
            }
        >
            <FlatList
                ListHeaderComponent={
                    <Button 
                        color={MAIN_GRAY}
                        text={languages.addEntity.addTax}
                        backgroundColor={TRANSPARENT}
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
                        type={TAX_ENTITY}
                        id={item.id}
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