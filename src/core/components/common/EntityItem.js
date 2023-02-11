import React from 'react';

import { 
    TouchableWithoutFeedback, 
    View, 
} from 'react-native';

import { 
    ResponsiveText,
    TouchableIcon, 
} from '..';
import globalStyles from '../../styles/globalStyles';
import { 
    EditIcon, 
    TrashIcon, 
} from '../../../../assets';
import { 
    hp, 
    showConfirmationDelete, 
} from '../../tools';
import styles from '../../styles/entityItemStyle';
import { strings } from '../../internationalization/strings';
import { useTheme } from '../../services';

const EntityItem = ({
    children,
    height = hp(64),
    item: {
        id,
    },
    item,
    openDetails,
    removeItem,
    updateItem,
}) => {
    const { colors } = useTheme();
    const onRemove = () => {
        showConfirmationDelete(() => removeItem?.(id));
    }

    return (
        <View style={globalStyles.shadow(colors)}>
            <View 
                style={[
                    styles.container(colors), {
                        height: height,
                    }
                ]}
            >
                <View style={styles.columnStretchContainer}>
                    <View style={styles.columnContainer}>
                        {children}
                    </View>
                    <TouchableWithoutFeedback onPress={() => openDetails?.(id)}>
                        <View>
                            <ResponsiveText 
                                fontStyle='details'
                                color={colors.MAIN_ORANGE}
                                text={strings.buttons.seeDetails}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={globalStyles.rowCenter}>
                    <TouchableIcon 
                        onPress={() => updateItem?.(item)}
                        containerStyle={styles.iconSpace}
                    >
                        <EditIcon color={colors.MAIN_ORANGE} />
                    </TouchableIcon>
                    <TouchableIcon onPress={onRemove}>
                        <TrashIcon color={colors.MAIN_ORANGE} />
                    </TouchableIcon>
                </View>
            </View>
        </View>
    );
}

export default EntityItem;