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
import { CustomerItem } from '../components';
import globalStyles from '../../../core/styles/globalStyles';
import { 
    MAIN_GRAY, 
    TRANSPARENT, 
} from '../../../core/constants/colors';
import { strings } from '../../../core/internationalization/strings';
import { hp } from '../../../core/tools';
import { useCustomersScreen } from '../services';

const CustomersScreen = () => {
    const {  
        customers,
        openAddCustomerForm,
        openDetails,
        removeItem,
        updateItem,
    } = useCustomersScreen();
    
    return (
        <BasicView 
            headerComponent={
                <Header title={strings.dashboardTiles.customers} />
            }
        >
            <FlatList
                ListHeaderComponent={
                    <Button 
                        color={MAIN_GRAY}
                        text={strings.addEntity.addCustomer}
                        backgroundColor={TRANSPARENT}
                        isOutline
                        customStyle={globalStyles.mediumToSpace}
                        onPress={openAddCustomerForm}
                    />
                } 
                showsVerticalScrollIndicator={false}
                data={customers.
                    sort((a, b) => a.fullName.localeCompare(b.fullName))
                }
                renderItem={({ item, index }) => (
                    <EntityItem 
                        key={index}
                        height={hp(96)}
                        item={item}
                        openDetails={openDetails}
                        removeItem={removeItem}
                        updateItem={updateItem}
                    >
                        <CustomerItem 
                            fullName={item.fullName}
                            email={item.email}
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

export default CustomersScreen;