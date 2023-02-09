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
import globalStyles from '../../../core/styles/globalStyles';
import { TaxItem } from '../components';
import { 
    MAIN_GRAY, 
    TRANSPARENT, 
} from '../../../core/constants/colors';
import { TAX_ENTITY } from '../../../core/constants/constants';
import { languages } from '../../../core/internationalization/languages';
import { setTaxDetails } from '../../../core/redux/actions';
import { fetchTaxes } from '../../../core/redux/actions/taxActions';
import { useInitData } from '../../../core/services';
import { hp } from '../../../core/tools';

const TaxesScreen = ({
    navigation: {
        navigate,
    },
    taxes,
    setTaxDetails,
}) => {
    useInitData(fetchTaxes);

    const openAddTaxForm = useCallback(() => {
        setTaxDetails({
            id: 0,
            name: '',
            amount: '',
            description: '',
        });
        navigate('AddTaxScreen', { isEdit: false });
    }, []);

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
                        type={TAX_ENTITY}
                        item={item}
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

const mapStateToProps = state => ({
    taxes: state.tax.taxes,
});

export default connect(mapStateToProps, { 
    setTaxDetails,
})(TaxesScreen);