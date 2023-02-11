import React from 'react';

import { DASHBOARD_TILES } from '../mocks';
import { EntityTile } from '../components';

export function useDashboardScreen(colors) {
    const renderItem = ({ item, index }) => (
        <EntityTile 
            key={index}
            icon={item.icon}
            title={item.title}
            label={item.label}
            isLast={DASHBOARD_TILES(colors).length - 1 === index}
        />
    );

    return renderItem;
}