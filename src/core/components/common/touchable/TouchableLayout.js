import React from 'react';

import { 
    View, 
    TouchableWithoutFeedback,
} from 'react-native';

import { useKeyboardDismiss } from '../../../services';

const TouchableLayout = ({ 
    children,
    callback, 
    containerStyle,
}) => {
    const dismissKeyboard = useKeyboardDismiss(callback);

    return (
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <View style={containerStyle}>
                {children}
            </View>
        </TouchableWithoutFeedback>
    );
}

export default TouchableLayout;