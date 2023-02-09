import React from 'react';
import { 
    View, 
    TouchableWithoutFeedback, 
} from 'react-native';

const TouchableIcon = ({
    children,
    containerStyle,
    onPress,
    onLongPress,
}) => {
    return (
        <View style={containerStyle}>
            <TouchableWithoutFeedback 
                onPress={onPress}
                onLongPress={onLongPress}
            >
                <View>
                    {children}
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

export default TouchableIcon;