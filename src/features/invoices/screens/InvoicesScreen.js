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
import { InvoiceItem } from '../components';
import globalStyles from '../../../core/styles/globalStyles';
import { 
    MAIN_GRAY, 
    TRANSPARENT, 
} from '../../../core/constants/colors';
import { INVOICE_ENTITY } from '../../../core/constants/constants';
import { languages } from '../../../core/internationalization/languages';
import { 
    setInvoiceDetails, 
    fetchInvoices, 
} from '../../../core/redux/actions';
import { useInitData } from '../../../core/services';
import { 
    hp, 
    initFutureDate, 
} from '../../../core/tools';

const InvoicesScreen = ({
    navigation: {
        navigate,
    },
    invoices,
    setInvoiceDetails,
}) => {
    useInitData(fetchInvoices);

    const openAddInvoiceForm = useCallback(() => {
        setInvoiceDetails({
            id: 0,
            number: '',
            date: new Date(),
            deadline: initFutureDate(),
            customer: null,
            description: '',
            sentStatus: false,
        });
        navigate('AddInvoiceScreen', { isEdit: false });
    }, []);

    return (
        <BasicView 
            headerComponent={
                <Header title={languages.dashboardTiles.invoices} />
            }
        >
            <FlatList
                ListHeaderComponent={
                    <Button 
                        color={MAIN_GRAY}
                        text={languages.addEntity.addInvoice}
                        backgroundColor={TRANSPARENT}
                        isOutline
                        onPress={openAddInvoiceForm}
                    />
                } 
                showsVerticalScrollIndicator={false}
                data={invoices
                    .sort((a, b) => new Date(b.deadline) - new Date(a.deadline))
                }
                renderItem={({ item, index }) => (
                    <EntityItem 
                        key={index}
                        height={hp(112)}
                        type={INVOICE_ENTITY}
                        item={item}
                    >
                        <InvoiceItem 
                            number={item.number}
                            fullName={item.customer.fullName}
                            deadline={item.deadline}
                        />
                    </EntityItem>
                )}
                contentContainerStyle={[
                    globalStyles.alignCenter,
                    globalStyles.flexGrow,
                    globalStyles.flatListContainer,
                ]}
                ListFooterComponent={<View />}
                ListFooterComponentStyle={globalStyles.largeSpace}
            />
        </BasicView>
    );
}

const mapStateToProps = state => ({
    invoices: state.invoice.invoices,
});

export default connect(mapStateToProps, { 
    setInvoiceDetails,
})(InvoicesScreen);