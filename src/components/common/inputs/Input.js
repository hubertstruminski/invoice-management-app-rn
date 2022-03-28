import React from 'react';
import { 
    View, 
    TextInput,
    TouchableWithoutFeedback, 
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
import { WarningIcon } from '../../../../assets';

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

    

    return (
        <TouchableWithoutFeedback onPress={isCalendar ? onCalendarPress : undefined}>
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
                <View style={styles.inputContainer}>
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
                                    style={[
                                        responsiveTextStyles["inputText"],
                                        leftIcon && styles.leftPlaceholderSpace,
                                        styles.input,
                                    ]}
                                    placeholder={placeholder}
                                    placeholderTextColor={GRAY_3}
                                    value={value}
                                    onChangeText={(masked, unmasked) => {
                                        mask ? setValue(masked) : setValue(unmasked);
                                    }}
                                    secureTextEntry={isPassword}
                                    mask={mask}
                                />
                            )
                        }
                    </View>
                    { withWarning && <WarningIcon /> }
                </View> 
                { errorText &&
                    <ResponsiveText 
                        fontStyle="errorInputText"
                        color={RED}
                        text={errorText}
                        customStyle={styles.errorSpace}
                    /> 
                }
            </View>
        </TouchableWithoutFeedback>
    );
}

export default Input;