import React from 'react';

import { 
    TouchableWithoutFeedback, 
    View, 
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { ResponsiveText } from '../../../core/components';
import globalStyles from '../../../core/styles/globalStyles';
import styles from '../style/entityTileStyle';
import { 
    hp, 
    navigateFromTile, 
} from '../../../core/tools';
import { useTheme } from '../../../core/services';

const EntityTile = ({
    icon,
    title,
    customStyle,
    label,
    isLast,
}) => {
    const { colors } = useTheme();
    const { navigate } = useNavigation();

    return (
        <View 
            style={[
                globalStyles.shadow(colors), 
                customStyle, {
                    marginBottom: isLast ? hp(24) : 0
                }
            ]}
        >
            <TouchableWithoutFeedback 
                onPress={() => navigateFromTile(label, navigate)}
            >
                <View style={styles.container(colors)}>
                    {icon}
                    <ResponsiveText 
                        fontStyle='header'
                        color={colors.MAIN_GRAY}
                        text={title}
                    />
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

export default EntityTile;