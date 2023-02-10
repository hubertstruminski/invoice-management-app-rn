import React from 'react';

import { FlatList } from 'react-native';

import { 
    BasicView, 
    Header, 
} from '../../../core/components';
import globalStyles from '../../../core/styles/globalStyles';
import { DASHBOARD_TILES } from '../mocks';
import { strings } from '../../../core/internationalization/strings';
import { useDashboardScreen } from '../services';

const DashboardScreen = () => {
    const renderItem = useDashboardScreen();
    return (
        <BasicView
            containerStyle={globalStyles.alignCenter} 
            headerComponent={
                <Header 
                    withBackArrow={false} 
                    title={strings.headers.dashboard}
                />
            }
        >
            <FlatList 
                data={DASHBOARD_TILES}
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