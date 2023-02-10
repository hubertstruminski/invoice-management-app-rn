import { useCallback } from 'react';

import { 
    useDispatch, 
    useSelector, 
} from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { 
    fetchCompanies, 
    removeCompany, 
} from '../../../core/redux/actions';
import { removeCompanyById } from '../../../core/redux/requests';
import { useInitData } from '../../../core/services';
import { Screens } from '../../../core/constants/navigator';

export function useMyCompaniesScreen() {
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

    return {
        companies,
        openAddCompanyForm,
        redirectToDetails,
        removeItem,
        updateItem,
    };
}