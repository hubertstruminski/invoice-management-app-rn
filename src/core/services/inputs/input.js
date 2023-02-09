import { 
    useCallback, 
    useRef,
} from 'react';

export function useInput() {
    let inputRef = useRef(null);

    const onInputPress = useCallback(() => inputRef?.current?.focus(), [inputRef]);

    return {
        onInputPress,
        inputRef,
    };
}