import React, { 
    useCallback, 
    useRef,
} from 'react';
import { 
    View, 
    TouchableWithoutFeedback,
    Platform, 
} from 'react-native';
import MaskInput from 'react-native-mask-input';

import { 
    globalStyles, 
    ResponsiveText, 
} from '../..';
import { 
    GRAY_3, 
    MAIN_GRAY,
    RED, 
} from '../../../contants/colors';
import styles from './inputStyle';
import responsiveTextStyles from '../responsiveText/reponsiveTextStyle';
import { hp } from '../../../tools';

const Input = ({
    containerStyle,
    leftTitle,
    rightTitle,
    leftIcon,
    placeholder,
    withWarning,
    errorText,
    isCalendar,
    onCalendarPress,
    value,
    setValue,
    isPassword,
    mask,
}) => {
    let inputRef = useRef(null);

    const onInputPress = useCallback(() => inputRef?.current?.focus(), [inputRef]);

    return (
        <View 
            style={[
                styles.container,
                containerStyle,
            ]}
        >
            <View style={styles.titleContainer}>
                <ResponsiveText 
                    fontStyle="inputText"
                    text={leftTitle}
                    color={MAIN_GRAY}
                />
                { rightTitle &&
                    <ResponsiveText 
                        fontStyle="rightInputTitle"
                        text={rightTitle}
                        color={GRAY_3}
                    />
                }
            </View>
            <TouchableWithoutFeedback onPress={isCalendar ? onCalendarPress : onInputPress}>
                <View 
                    style={[
                        styles.inputContainer, {
                            borderColor: withWarning ? RED : GRAY_3,
                        }
                    ]}
                >
                    <View style={globalStyles.rowCenter}>
                        {leftIcon}
                        { isCalendar ? (
                                <ResponsiveText 
                                    fontStyle="inputText"
                                    color={MAIN_GRAY}
                                    text={placeholder}
                                    customStyle={leftIcon && styles.leftPlaceholderSpace}
                                />
                            ) : (
                                <MaskInput 
                                    ref={inputRef}
                                    style={[
                                        responsiveTextStyles["inputText"],
                                        leftIcon && styles.leftPlaceholderSpace,
                                        styles.input, {
                                            height: Platform.OS === 'android' ? hp(48) : undefined,
                                            flex: 1,
                                        },
                                    ]}  
                                    placeholder={placeholder}
                                    placeholderTextColor={GRAY_3}
                                    value={value}
                                    onChangeText={(masked, unmasked) => {
                                        mask ? setValue(masked) : setValue(unmasked);
                                    }}
                                    secureTextEntry={isPassword}
                                    mask={mask}
                                    textAlignVertical="center"
                                />
                            )
                        }
                    </View> 
                </View> 
            </TouchableWithoutFeedback>
            { errorText &&
                <ResponsiveText 
                    fontStyle="errorInputText"
                    color={RED}
                    text={errorText}
                    customStyle={styles.errorSpace}
                /> 
            }
        </View>
    );
}

export default Input;