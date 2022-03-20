import React from 'react';
import { FlatList } from 'react-native';

import { 
    BasicView, 
    Header, 
    Button,
    EntityItem,
    ResponsiveText,
    globalStyles,
} from '../../components';
import { MAIN_GRAY } from '../../contants/colors';
import { COMPANIES } from '../../mocks';
import { wp } from '../../tools';
import styles from '../authorization/authorizationStyle';

const MyCompaniesScreen = props => {
    return (
        <BasicView 
            headerComponent={<Header title="My companies" />}
        >
            <FlatList
                ListHeaderComponent={<Button 
                    color={MAIN_GRAY}
                    text="Add company"
                    backgroundColor="transparent"
                    isOutline
                    customStyle={globalStyles.mediumToSpace}
                />} 
                showsVerticalScrollIndicator={false}
                data={COMPANIES}
                renderItem={({ item, index }) => (
                    <EntityItem key={index}>
                        <ResponsiveText 
                            fontStyle="header"
                            color={MAIN_GRAY}
                            text={item.name}
                        />
                    </EntityItem>
                )}
                style={globalStyles.flatListContainer}
            />
        </BasicView>
    );
}

export default MyCompaniesScreen;