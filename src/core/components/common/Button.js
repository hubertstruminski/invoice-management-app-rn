import React from 'react';

import { 
    TouchableWithoutFeedback, 
    View,
} from 'react-native';

import { ResponsiveText } from '..';
import { useTheme } from '../../services';
import styles from '../../styles/buttonStyle';

const Button = ({
    text,
    color,
    backgroundColor,
    isOutline,
    onPress,
    customStyle,
}) => {
    const { colors } = useTheme();
    return (
        <TouchableWithoutFeedback onPress={onPress}> 
            <View 
                style={[
                    styles.container,
                    customStyle, {
                        backgroundColor: backgroundColor ? backgroundColor : colors.MAIN_ORANGE,
                        borderWidth: isOutline ? 2 : 0,
                        borderColor: isOutline && colors.MAIN_GRAY,
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
