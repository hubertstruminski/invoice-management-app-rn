import React, {
    useCallback,
} from 'react';
import { 
    View, 
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';

const TouchableLayout = ({ 
    children,
    callback, 
}) => {
    const dismissKeyboard = useCallback(() => {
        Keyboard.dismiss();
        callback && callback();
    }, [callback]);

    return (
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <View>
                {children}
            </View>
        </TouchableWithoutFeedback>
    );
}

export default TouchableLayout;