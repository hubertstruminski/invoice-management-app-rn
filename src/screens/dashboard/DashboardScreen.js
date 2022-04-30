import React from 'react';
import { FlatList } from 'react-native';

import { 
    BasicView, 
    Header, 
    EntityTile,
    globalStyles,
} from '../../components';
import { languages } from '../../internationalization/languages';
import { DASHBOARD_TILES } from '../../mocks';

const DashboardScreen = () => {
    return (
        <BasicView
            containerStyle={globalStyles.alignCenter} 
            headerComponent={
                <Header 
                    withBackArrow={false} 
                    title={languages.headers.dashboard}
                />
            }
        >
            <FlatList 
                data={DASHBOARD_TILES}
                renderItem={({ item, index }) => (
                    <EntityTile 
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        label={item.label}
                        isLast={DASHBOARD_TILES.length - 1 === index}
                    />
                )}
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