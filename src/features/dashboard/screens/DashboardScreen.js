import React from 'react';

import { FlatList } from 'react-native';

import { BasicView } from '../../../core/components';
import globalStyles from '../../../core/styles/globalStyles';
import { DASHBOARD_TILES } from '../mocks';
import { strings } from '../../../core/internationalization/strings';
import { useDashboardScreen } from '../services';
import { useTheme } from '../../../core/services';

const DashboardScreen = () => {
    const { colors } = useTheme();
    const renderItem = useDashboardScreen(colors);
    
    return (
        <BasicView
            containerStyle={globalStyles.alignCenter} 
            title={strings.headers.dashboard}
        >
            <FlatList 
                data={DASHBOARD_TILES(colors)}
                renderItem={renderItem}
                numColumns={2}
                style={[
                    globalStyles.flatListContainer, 
                    globalStyles.zeroPaddingHorizontal
                ]}
                columnWrapperStyle={[
                    globalStyles.spaceBetween, 
                    globalStyles.fullWidthWithSmallPadding
                ]}
            />
        </BasicView>
    );
}

export default DashboardScreen;