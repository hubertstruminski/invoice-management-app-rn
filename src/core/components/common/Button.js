import React from 'react';
import { 
    TouchableWithoutFeedback, 
    View,
} from 'react-native';

import { ResponsiveText } from '..';
import { 
    MAIN_GRAY, 
    MAIN_ORANGE, 
} from '../../constants/colors'
import styles from '../../styles/buttonStyle';

const Button = ({
    text,
    color,
    backgroundColor = MAIN_ORANGE,
    isOutline,
    onPress,
    customStyle,
}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}> 
            <View 
                style={[
                    styles.container,
                    customStyle, {
                        backgroundColor: backgroundColor,
                        borderWidth: isOutline ? 2 : 0,
                        borderColor: isOutline && MAIN_GRAY,
                    }
                ]}
            >
                <ResponsiveText 
                    fontStyle='button'
                    color={color}
                    text={text}
                />
            </View>
        </TouchableWithoutFeedback>
    );
}

export default Button;
