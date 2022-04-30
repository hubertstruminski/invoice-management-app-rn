import React from 'react';
import { 
    TouchableWithoutFeedback, 
    View, 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { 
    globalStyles, 
    ResponsiveText, 
} from '../..';
import { MAIN_GRAY } from '../../../contants/colors';
import styles from './entityTileStyle';
import { 
    hp, 
    navigateFromTile, 
} from '../../../tools';

const EntityTile = ({
    icon,
    title,
    customStyle,
    label,
    isLast,
}) => {
    const { navigate } = useNavigation();

    return (
        <View 
            style={[
                globalStyles.shadow, 
                customStyle, {
                    marginBottom: isLast ? hp(24) : 0
                }
            ]}
        >
            <TouchableWithoutFeedback 
                onPress={() => navigateFromTile(label, navigate)}
            >
                <View style={styles.container}>
                    {icon}
                    <ResponsiveText 
                        fontStyle="header"
                        color={MAIN_GRAY}
                        text={title}
                    />
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

export default EntityTile;