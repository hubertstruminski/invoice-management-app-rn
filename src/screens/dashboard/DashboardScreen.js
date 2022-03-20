import React from 'react';
import { FlatList } from 'react-native';

import { 
    BasicView, 
    Header, 
    EntityTile,
    globalStyles,
} from '../../components';
import { DASHBOARD_TILES } from '../../mocks';

const DashboardScreen = () => {
    return (
        <BasicView
            containerStyle={globalStyles.alignCenter} 
            headerComponent={
                <Header 
                    withBackArrow={false} 
                    title="Dashboard" 
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
                    />
                )}
                bounces={false}
                numColumns={2}
                style={globalStyles.flatListContainer}
                columnWrapperStyle={globalStyles.spaceBetween}
            />
        </BasicView>
    );
}

export default DashboardScreen;