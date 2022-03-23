import React from 'react';
import { 
    View, 
    TouchableWithoutFeedback, 
} from 'react-native';

const TouchableIcon = ({
    children,
    containerStyle,
    onPress,
}) => {
    return (
        <View style={containerStyle}>
            <TouchableWithoutFeedback onPress={onPress}>
                <View>
                    {children}
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

export default TouchableIcon;