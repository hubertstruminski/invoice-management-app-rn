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
} from '../../../core/components';
import globalStyles from '../../../core/styles/globalStyles';
import { TaxItem } from '../components';
import { 
    MAIN_GRAY, 
    TRANSPARENT, 
} from '../../../core/constants/colors';
import { strings } from '../../../core/internationalization/strings';
import { hp } from '../../../core/tools';
import { useTaxesScreen } from '../services';

const TaxesScreen = () => {
    const {  
        openAddTaxForm,
        openDetails,
        removeItem,
        taxes,
        updateItem,
    } = useTaxesScreen();

    return (
        <BasicView 
            headerComponent={
                <Header title={strings.dashboardTiles.taxes} />
            }
        >
            <FlatList
                ListHeaderComponent={
                    <Button 
                        color={MAIN_GRAY}
                        text={strings.addEntity.addTax}
                        backgroundColor={TRANSPARENT}
                        isOutline
                        onPress={openAddTaxForm}
                    />
                } 
                showsVerticalScrollIndicator={false}
                data={taxes
                    .sort((a, b) => a.name.localeCompare(b.name))
                }
                renderItem={({ item, index }) => (
                    <EntityItem 
                        key={index}
                        height={hp(64)}
                        item={item}
                        openDetails={openDetails}
                        updateItem={updateItem}
                        removeItem={removeItem}
                    >
                        <TaxItem 
                            name={item.name}
                            amount={item.amount}
                        />
                    </EntityItem>
                )}
                contentContainerStyle={[
                    globalStyles.alignCenter,
                    globalStyles.flatListContainer,
                ]}
                ListFooterComponent={<View />}
                ListFooterComponentStyle={globalStyles.largeSpace}
            />
        </BasicView>
    );
}

export default TaxesScreen;