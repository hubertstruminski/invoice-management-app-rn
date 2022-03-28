import React from 'react';
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
    InvoiceItem,
} from '../../components';
import { 
    MAIN_GRAY, 
    TRANSPARENT, 
} from '../../contants/colors';
import { INVOICE_ENTITY } from '../../contants/constants';
import { languages } from '../../internationalization/languages';
import { hp } from '../../tools';

const InvoicesScreen = ({
    navigation: {
        navigate,
    },
    invoices,
}) => {
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
                        onPress={() => navigate('AddInvoiceScreen')}
                    />
                } 
                showsVerticalScrollIndicator={false}
                data={invoices}
                renderItem={({ item, index }) => (
                    <EntityItem 
                        key={index}
                        height={hp(112)}
                        type={INVOICE_ENTITY}
                        id={item.id}
                    >
                        <InvoiceItem 
                            number={item.number}
                            fullName={item.customer.fullName}
                            deadline={item.deadline}
                        />
                    </EntityItem>
                )}
                style={globalStyles.flatListContainer}
                contentContainerStyle={[
                    globalStyles.alignCenter,
                    globalStyles.flexGrow,
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

export default connect(mapStateToProps, { })(InvoicesScreen);