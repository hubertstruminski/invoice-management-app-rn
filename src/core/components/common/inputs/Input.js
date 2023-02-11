import React from 'react';

import { 
    View, 
    TouchableWithoutFeedback,
    Platform, 
} from 'react-native';

import MaskInput from 'react-native-mask-input';

import { ResponsiveText } from '../..';
import globalStyles from '../../../styles/globalStyles';
import styles from '../../../styles/inputs/inputStyle';
import responsiveTextStyles from '../responsiveText/reponsiveTextStyle';
import { hp } from '../../../tools';
import { 
    useInput, 
    useTheme, 
} from '../../../services';

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
    keyboardType,
    autoCapitalize,
    textContentType,
}) => {
    const { 
        inputRef,
        onInputPress,
    } = useInput();
    const { colors } = useTheme();

    return (
        <View 
            style={[
                styles.container,
                containerStyle,
            ]}
        >
            <View style={styles.titleContainer}>
                <ResponsiveText 
                    fontStyle='inputText'
                    text={leftTitle}
                    color={colors.MAIN_GRAY}
                />
                { rightTitle &&
                    <ResponsiveText 
                        fontStyle='rightInputTitle'
                        text={rightTitle}
                        color={colors.GRAY_3}
                    />
                }
            </View>
            <TouchableWithoutFeedback onPress={isCalendar ? onCalendarPress : onInputPress}>
                <View 
                    style={[
                        styles.inputContainer(colors), {
                            borderColor: withWarning ? colors.RED : colors.GRAY_3,
                        },
                    ]}
                >
                    <View style={globalStyles.rowCenter}>
                        {leftIcon}
                        { isCalendar ? (
                                <ResponsiveText 
                                    fontStyle='inputText'
                                    color={colors.MAIN_GRAY}
                                    text={placeholder}
                                    customStyle={leftIcon && styles.leftPlaceholderSpace}
                                />
                            ) : (
                                <MaskInput 
                                    ref={inputRef}
                                    style={[
                                        responsiveTextStyles['inputText'],
                                        leftIcon && styles.leftPlaceholderSpace,
                                        styles.input(colors), {
                                            height: Platform.OS === 'android' ? hp(48) : undefined,
                                            flex: 1,
                                        },
                                    ]}  
                                    placeholder={placeholder}
                                    textContentType={textContentType}
                                    placeholderTextColor={colors.GRAY_3}
                                    autoCapitalize={autoCapitalize ? autoCapitalize : 'none'}
                                    keyboardType={keyboardType ? keyboardType : 'default'}
                                    value={value}
                                    onChangeText={(masked, unmasked) => {
                                        mask ? setValue(masked) : setValue(unmasked);
                                    }}
                                    secureTextEntry={isPassword}
                                    mask={mask}
                                    textAlignVertical='center'
                                    blurOnSubmit={false}
                                />
                            )
                        }
                    </View> 
                </View> 
            </TouchableWithoutFeedback>
            { errorText !== null &&
                <ResponsiveText 
                    fontStyle='errorInputText'
                    color={colors.RED}
                    text={errorText}
                    customStyle={styles.errorSpace}
                /> 
            }
        </View>
    );
}

export default Input;