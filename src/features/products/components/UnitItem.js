import React from 'react';

import { 
    View, 
    TouchableOpacity, 
} from 'react-native';

import { ConfirmIcon } from '../../../../assets';
import { ResponsiveText } from '../../../core/components';
import { useTheme } from '../../../core/services';
import { useUnitItem } from '../services';
import styles from '../styles/unitItemStyles';

const UnitItem = ({ 
    item, 
    index, 
}) => {
    const { 
        chosenIndex,
        onPress, 
    } = useUnitItem(index);
    const { colors } = useTheme();

    return (
        <TouchableOpacity onPress={onPress}>
            <View 
                style={[
                    styles.container(colors), {
                        backgroundColor: chosenIndex === index ? colors.MAIN_ORANGE : colors.TRANSPARENT,
                    }
                ]}
            >
                <ResponsiveText 
                    fontStyle='inputText'
                    color={colors.MAIN_GRAY}
                    text={item}
                />
                {chosenIndex === index ? <ConfirmIcon /> : null}
            </View>
        </TouchableOpacity>
    );
}

export default UnitItem;