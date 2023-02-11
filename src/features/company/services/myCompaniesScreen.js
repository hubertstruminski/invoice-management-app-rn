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
    EntityItem, 
    ResponsiveText, 
    Button,
} from '../../../core/components';
import { 
    fetchCompanies, 
    removeCompany,
    setCompanyDetails, 
} from '../../../core/redux/actions';
import { removeCompanyById } from '../../../core/redux/requests';
import { useInitData } from '../../../core/services';
import { Screens } from '../../../core/constants/navigator';
import { 
    MAIN_GRAY, 
    TRANSPARENT, 
} from '../../../core/constants/colors';
import { strings } from '../../../core/internationalization/strings';
import globalStyles from '../../../core/styles/globalStyles';

export function useMyCompaniesScreen(colors) {
    const companies = useSelector(state => state.company.companies);

    useInitData(fetchCompanies);
    const dispatch = useDispatch();
    const { navigate } = useNavigation();

    const openAddCompanyForm = useCallback(() => {
        dispatch(setCompanyDetails({
            id: 0,
            name: '',
            street: '',
            postalCode: '',
            city: '',
            country: '',
        }));
        navigate(Screens.ADD_COMPANY, { isEdit: false });
    }, []);

    const redirectToDetails = (id) => {
        const chosenCompany = companies.find(item => item.id === id);
        dispatch(setCompanyDetails(chosenCompany));
        navigate(Screens.MY_COMPANY_DETAILS);
    }

    const removeItem = async (id) => {
        try {
            const response = await removeCompanyById(id);
            if(response.status === 200) {
                dispatch(removeCompany(id));
            }
        } catch(error) {
            console.log(error);
        }
    };

    const updateItem = (item) => {
        const companyPayload = {
            id: item.id,
            name: item.name,
            street: item.street,
            postalCode: item.postalCode,
            city: item.city,
            country: item.country,
        };
        dispatch(setCompanyDetails(companyPayload));
        navigate(Screens.ADD_COMPANY, { isEdit: true });
    };

    const renderItem = ({ item, index }) => (
        <EntityItem 
            key={index}
            item={item}
            openDetails={redirectToDetails}
            removeItem={removeItem}
            updateItem={updateItem}
        >
            <ResponsiveText 
                fontStyle='header'
                color={colors.MAIN_GRAY}
                text={item.name}
            />
        </EntityItem>
    );

    const renderHeader = useMemo(() => (
        <Button 
            color={colors.MAIN_GRAY}
            text={strings.addEntity.addCompany}
            backgroundColor={colors.TRANSPARENT}
            isOutline
            customStyle={globalStyles.mediumToSpace}
            onPress={openAddCompanyForm}
        />
    ), [openAddCompanyForm, colors]);

    return {
        companies,
        renderItem,
        renderHeader,
    };
}