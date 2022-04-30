import React, { 
    useCallback, 
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
    globalStyles,
    CustomerItem,
} from '../../components';
import { 
    MAIN_GRAY, 
    TRANSPARENT, 
} from '../../contants/colors';
import { CUSTOMER_ENTITY } from '../../contants/constants';
import { languages } from '../../internationalization/languages';
import { setCustomerDetails } from '../../redux/actions';
import { hp } from '../../tools';

const CustomersScreen = ({
    navigation: {
        navigate,
    },
    customers,
    setCustomerDetails,
}) => {

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