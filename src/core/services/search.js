import React, { 
    useEffect, 
    useState, 
} from 'react';

import { useTheme } from '.';
import { SearchIcon } from '../../../assets';
import { Input } from '../components';
import { strings } from '../internationalization/strings';
import globalStyles from '../styles/globalStyles';

export function useSearchEntities(data, property) {
    const [searchValue, setSearchValue] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const { colors } = useTheme();

    useEffect(() => {
        data && property && setFilteredData(data?.filter(item => item?.[property]?.includes(searchValue)));
    }, [data, searchValue, property]);

    const renderSearchInput = () => (
        <Input 
            leftIcon={<SearchIcon color={colors.MAIN_ORANGE} />}
            containerStyle={globalStyles.zeroBottomMargin}
            placeholder={strings.placeholders.search}
            setValue={setSearchValue}
            value={searchValue}
        />
    );

    return {
        renderSearchInput,
        filteredData,
    };
}