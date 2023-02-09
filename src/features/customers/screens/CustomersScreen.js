import React, { 
    useCallback,  
} from 'react';

import { 
    FlatList,
    View, 
} from 'react-native';

import { 
    useDispatch, 
    useSelector, 
} from 'react-redux';
import { useNavigation } from '@react-navigation/native';

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
import { 
    fetchCustomers, 
    removeCustomer, 
    setCustomerDetails, 
} from '../../../core/redux/actions';
import { useInitData } from '../../../core/services';
import { hp } from '../../../core/tools';
import { removeCustomerById } from '../../../core/redux/requests';

const CustomersScreen = () => {
    const customers = useSelector(state => state.customer.customers);

    const { navigate } = useNavigation();
    const dispatch = useDispatch();

    useInitData(fetchCustomers);

    const openAddCustomerForm = useCallback(() => {
        dispatch(setCustomerDetails({
            id: 0,
            fullName: '',
            email: '',
            phoneNumber: '',
            nip: '',
            street: '',
            city: '',
            country: '',
            description: '',
        }));
        navigate('AddCustomerScreen', { isEdit: false })
    }, []);

    const openDetails = (id) => {
        const chosenCustomer = customers.find(item => item.id === id);
        dispatch(setCustomerDetails(chosenCustomer));
        navigate('CustomerDetailsScreen');
    }

    const removeItem = async (id) => {
        try {
            const response = await removeCustomerById(id);
            if(response.status === 200) {
                dispatch(removeCustomer(id));
            }
        } catch(error) {
            console.log(error);
        }
    };

    const updateItem = (item) => {
        const customerPayload = {
            id: item.id,
            fullName: item.fullName,
            email: item.email,
            phoneNumber: item.phoneNumber,
            nip: item.nip,
            street: item.street,
            city: item.city,
            country: item.country,
            description: item.description,
        };
        dispatch(setCustomerDetails(customerPayload));
        navigate('AddCustomerScreen', { isEdit: true });
    };

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