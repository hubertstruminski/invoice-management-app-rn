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
import { navigateFromTile } from '../../../tools';

const EntityTile = ({
    icon,
    title,
    customStyle,
    label,
}) => {
    const { navigate } = useNavigation();

    return (
        <View style={[globalStyles.shadow, customStyle]}>
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