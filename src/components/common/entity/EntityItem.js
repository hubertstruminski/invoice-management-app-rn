import React from 'react';
import { 
    TouchableWithoutFeedback, 
    View, 
} from 'react-native';

import { 
    globalStyles, 
    ResponsiveText, 
} from '../..';
import { 
    EditIcon, 
    TrashIcon, 
} from '../../../../assets';
import { MAIN_ORANGE } from '../../../contants/colors';
import { hp } from '../../../tools';
import styles from './entityItemStyle';

const EntityItem = ({
    children,
    height = hp(64),
}) => {
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
                    <ResponsiveText 
                        fontStyle="details"
                        color={MAIN_ORANGE}
                        text="See details"
                    />
                </View>
                <View style={globalStyles.rowCenter}>
                    <TouchableWithoutFeedback>
                        <View style={styles.iconSpace}>
                            <EditIcon />
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback>
                        <View>
                            <TrashIcon />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </View>
    );
}

export default EntityItem;