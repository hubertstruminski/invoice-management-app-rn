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
import { MAIN_ORANGE } from '../../constants/colors';
import { 
    hp, 
    showConfirmationDelete, 
} from '../../tools';
import styles from '../../styles/entityItemStyle';
import { strings } from '../../internationalization/strings';

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
    const onRemove = () => {
        showConfirmationDelete(() => removeItem?.(id));
    }

    return (
        <View style={globalStyles.shadow}>
            <View 
                style={[
                    styles.container, {
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
                                fontStyle="details"
                                color={MAIN_ORANGE}
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
                        <EditIcon />
                    </TouchableIcon>
                    <TouchableIcon onPress={onRemove}>
                        <TrashIcon />
                    </TouchableIcon>
                </View>
            </View>
        </View>
    );
}

export default EntityItem;