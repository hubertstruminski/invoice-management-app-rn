import React from 'react';
import { 
    TouchableWithoutFeedback, 
    View,
} from 'react-native';

import { ResponsiveText } from '../..';
import { 
    MAIN_GRAY, 
    MAIN_ORANGE, 
} from '../../../contants/colors';
import styles from './buttonStyle';

const Button = ({
    text,
    color,
    backgroundColor = MAIN_ORANGE,
    isOutline,
    onPress,
}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}> 
            <View 
                style={[
                    styles.container, {
                        backgroundColor: backgroundColor,
                        borderWidth: isOutline ? 2 : 0,
                        borderColor: isOutline && MAIN_GRAY,
                    }
                ]}
            >
                <ResponsiveText 
                    fontStyle="button"
                    color={color}
                    text={text}
                />
            </View>
        </TouchableWithoutFeedback>
    );
}

export default Button;
