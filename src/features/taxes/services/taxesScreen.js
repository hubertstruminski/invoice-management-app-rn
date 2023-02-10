import { 
    useCallback, 
    useMemo, 
} from 'react';

import { 
    useSelector, 
    useDispatch, 
} from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { setTaxDetails } from '../../../core/redux/actions';
import { 
    fetchTaxes, 
    removeTax, 
} from '../../../core/redux/actions/taxActions';
import { useInitData } from '../../../core/services';
import { removeTaxById } from '../../../core/redux/requests';
import { Screens } from '../../../core/constants/navigator';
import { Button, EntityItem } from '../../../core/components';
import { MAIN_GRAY, TRANSPARENT } from '../../../core/constants/colors';
import { strings } from '../../../core/internationalization/strings';
import { hp } from '../../../core/tools';
import { TaxItem } from '../components';

export function useTaxesScreen() {
    const taxes = useSelector(state => state.tax.taxes);

    const { navigate } = useNavigation();
    const dispatch = useDispatch();

    useInitData(fetchTaxes);

    const openAddTaxForm = useCallback(() => {
        dispatch(setTaxDetails({
            id: 0,
            name: '',
            amount: '',
            description: '',
        }));
        navigate(Screens.ADD_TAX, { isEdit: false });
    }, []);


    const openDetails = (id) => {
        const chosenTax = taxes.find(item => item.id === id);
        dispatch(setTaxDetails(chosenTax));
        navigate(Screens.TAX_DETAILS);
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
        navigate(Screens.ADD_TAX, { isEdit: true });
    };

    const renderItem = ({ item, index }) => (
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
    );
    
    const renderHeader = useMemo(() => (
        <Button 
            color={MAIN_GRAY}
            text={strings.addEntity.addTax}
            backgroundColor={TRANSPARENT}
            isOutline
            onPress={openAddTaxForm}
        />
    ), [openAddTaxForm]);

    return {
        taxes,
        renderHeader,
        renderItem,
    }
}