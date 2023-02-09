import React, { 
    useCallback, 
} from 'react';

import { 
    FlatList, 
    View, 
} from 'react-native';

import { 
    useDispatch, 
    useSelector, 
} from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { 
    BasicView, 
    Header, 
    Button,
    EntityItem,
    ResponsiveText,
} from '../../../core/components';
import globalStyles from '../../../core/styles/globalStyles';
import { 
    MAIN_GRAY, 
    TRANSPARENT, 
} from '../../../core/constants/colors';
import { strings } from '../../../core/internationalization/strings';
import { 
    fetchCompanies, 
    removeCompany, 
} from '../../../core/redux/actions';
import { removeCompanyById } from '../../../core/redux/requests';
import { useInitData } from '../../../core/services';
import { Screens } from '../../../core/constants/navigator';

const MyCompaniesScreen = () => {
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

    return (
        <BasicView 
            headerComponent={
                <Header title={strings.dashboardTiles.companies} />
            }
        >
            <FlatList
                ListHeaderComponent={
                    // companies?.length < 1 &&
                    <Button 
                        color={MAIN_GRAY}
                        text={strings.addEntity.addCompany}
                        backgroundColor={TRANSPARENT}
                        isOutline
                        customStyle={globalStyles.mediumToSpace}
                        onPress={openAddCompanyForm}
                    />
                } 
                showsVerticalScrollIndicator={false}
                data={companies
                    .sort((a, b) => a.name.localeCompare(b.name))
                }
                renderItem={({ item, index }) => (
                    <EntityItem 
                        key={index}
                        item={item}
                        openDetails={redirectToDetails}
                        removeItem={removeItem}
                        updateItem={updateItem}
                    >
                        <ResponsiveText 
                            fontStyle='header'
                            color={MAIN_GRAY}
                            text={item.name}
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


export default MyCompaniesScreen;