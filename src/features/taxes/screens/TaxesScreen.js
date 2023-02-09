import React, {
    useCallback,
} from 'react';

import { 
    FlatList, 
    View,
} from 'react-native';

import { 
    useSelector, 
    useDispatch, 
} from 'react-redux';
import { useNavigation } from '@react-navigation/native';

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
import { setTaxDetails } from '../../../core/redux/actions';
import { 
    fetchTaxes, 
    removeTax, 
} from '../../../core/redux/actions/taxActions';
import { useInitData } from '../../../core/services';
import { hp } from '../../../core/tools';
import { removeTaxById } from '../../../core/redux/requests';

const TaxesScreen = () => {
    const taxes = useSelector(state => state.tax.taxes);

    const { navigate } = useNavigation();
    const dispatch = useDispatch();

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


    const openDetails = (id) => {
        const chosenTax = taxes.find(item => item.id === id);
        dispatch(setTaxDetails(chosenTax));
        navigate('TaxDetailsScreen');
    }

    const removeItem = async (id) => {
        try {
            const response = await removeTaxById(id);
            if(response.status === 200) {
                dispatch(removeTax(id));
            }
        } catch(error) {
            console.log(error);
        }
    };

    const updateItem = (item) => {
        const taxPayload = {
            id: item.id,
            name: item.name,
            amount: item.amount,
            description: item.description,
        };
        dispatch(setTaxDetails(taxPayload));
        navigate('AddTaxScreen', { isEdit: true });
    };

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

export default TaxesScreen