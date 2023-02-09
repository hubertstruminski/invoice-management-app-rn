import React, { 
    useCallback, 
    useEffect, 
} from 'react';

import { 
    FlatList,
    View, 
} from 'react-native';
import { connect } from 'react-redux';

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
import { CUSTOMER_ENTITY } from '../../../core/constants/constants';
import { languages } from '../../../core/internationalization/languages';
import { 
    fetchCustomers, 
    setCustomerDetails, 
} from '../../../core/redux/actions';
import { useInitData } from '../../../core/services';
import { hp } from '../../../core/tools';

const CustomersScreen = ({
    navigation: {
        navigate,
    },
    customers,
    setCustomerDetails,
}) => {
    useInitData(fetchCustomers);

    const openAddCustomerForm = useCallback(() => {
        setCustomerDetails({
            id: 0,
            fullName: '',
            email: '',
            phoneNumber: '',
            nip: '',
            street: '',
            city: '',
            country: '',
            description: '',
        });
        navigate('AddCustomerScreen', { isEdit: false })
    }, []);

    return (
        <BasicView 
            headerComponent={
                <Header title={languages.dashboardTiles.customers} />
            }
        >
            <FlatList
                ListHeaderComponent={
                    <Button 
                        color={MAIN_GRAY}
                        text={languages.addEntity.addCustomer}
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
                        type={CUSTOMER_ENTITY}
                        item={item}
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

const mapStateToProps = state => ({
    customers: state.customer.customers,
});

export default connect(mapStateToProps, { 
    setCustomerDetails,
})(CustomersScreen);