import React from 'react';

import { 
    TouchableWithoutFeedback, 
    View, 
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { ResponsiveText } from '../../../core/components';
import globalStyles from '../../../core/styles/globalStyles';
import { MAIN_GRAY } from '../../../core/constants/colors';
import styles from '../style/entityTileStyle';
import { 
    hp, 
    navigateFromTile, 
} from '../../../core/tools';

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
                        fontStyle='header'
                        color={MAIN_GRAY}
                        text={title}
                    />
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

export default EntityTile;