import { Keyboard } from 'react-native';

export function useKeyboardDismiss(callback) {
    const dismissKeyboard = () => {
        Keyboard.dismiss();
        callback?.();
    };

    return dismissKeyboard;
}