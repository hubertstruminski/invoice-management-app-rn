import React, { 
    useCallback, 
    useMemo, 
} from 'react';

import { 
    useDispatch, 
    useSelector, 
} from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { 
    fetchCustomers, 
    removeCustomer, 
    setCustomerDetails, 
} from '../../../core/redux/actions';
import { 
    useInitData, 
    useSearchEntities, 
    useTheme, 
} from '../../../core/services';
import { removeCustomerById } from '../../../core/redux/requests';
import { Screens } from '../../../core/constants/navigator';
import { 
    EntityItem, 
    Button, 
} from '../../../core/components';
import { hp } from '../../../core/tools';
import { CustomerItem } from '../components';
import globalStyles from '../../../core/styles/globalStyles';
import { strings } from '../../../core/internationalization/strings';

export function useCustomersScreen() {
    const customers = useSelector(state => state.customer.customers);
    const {
        filteredData,
        renderSearchInput
    } = useSearchEntities(customers, "fullName");

    const { navigate } = useNavigation();
    const dispatch = useDispatch();

    useInitData(fetchCustomers);

    const { colors } = useTheme();

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
        navigate(Screens.ADD_CUSTOMER, { isEdit: false })
    }, []);

    const openDetails = (id) => {
        const chosenCustomer = customers.find(item => item.id === id);
        dispatch(setCustomerDetails(chosenCustomer));
        navigate(Screens.CUSTOMER_DETAILS);
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
        navigate(Screens.ADD_CUSTOMER, { isEdit: true });
    };

    const renderItem = ({ item, index }) => (
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
    );

    const renderHeader = useMemo(() => (
        <React.Fragment>
            <Button 
                color={colors.MAIN_GRAY}
                text={strings.addEntity.addCustomer}
                backgroundColor={colors.TRANSPARENT}
                isOutline
                customStyle={globalStyles.mediumToSpace}
                onPress={openAddCustomerForm}
            />
            {renderSearchInput()}
        </React.Fragment>
    ), [openAddCustomerForm, colors, renderSearchInput]);

    return {
        customers: filteredData,
        renderItem,
        renderHeader,
    };
}