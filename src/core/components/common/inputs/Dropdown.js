import React, { 
    forwardRef,
} from 'react';

import { View } from 'react-native';

import { 
    ResponsiveText,
    TouchableIcon, 
} from '../..';
import styles from '../../../styles/inputs/inputStyle';
import { ArrowDownIcon } from '../../../../../assets';
import { hp } from '../../../tools';
import { strings } from '../../../internationalization/strings';
import { 
    useDropdown, 
    useTheme, 
} from '../../../services';

const Dropdown = forwardRef(({
    containerStyle,
    leftTitle,
    rightTitle,
    placeholder,
    data,
    setId,
    errorText,
    id,
    chosenEntityName,
    multiple,
    setChosenEntities,
    chosenEntities,
}, ref) => {
    const { colors } = useTheme();
    const {
        renderItems,
        toggleDropdown,
        value,
        showData,
    } = useDropdown({
        data,
        setId,
        chosenEntityName,
        setChosenEntities,
        chosenEntities,
        multiple,
        ref,
        colors,
    });

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
            <View 
                style={[
                    styles.inputContainer(colors), {
                        height: multiple ? undefined : hp(48),
                        borderColor: (!id && errorText && !showData) ? colors.RED : colors.GRAY_3,
                    }
                ]}
            >
                {multiple ? (
                        <ResponsiveText 
                            fontStyle='inputText'
                            color={chosenEntities?.length !== 0 ? colors.MAIN_GRAY : colors.GRAY_3}
                            text={chosenEntities?.length === 0 ? 
                                strings.placeholders.multipleProducts : chosenEntities?.map(item => item.name).join(', ')}
                        />
                    ) :
                        <ResponsiveText 
                            fontStyle='inputText'
                            color={value !== '' ? colors.MAIN_GRAY : colors.GRAY_3}
                            text={value === '' ? placeholder : value}
                            customStyle={[
                                styles.input(colors), {
                                    flex: 1,
                                }
                            ]}
                        />
                }
                <TouchableIcon onPress={toggleDropdown}>
                    <ArrowDownIcon color={colors.GRAY_3} />
                </TouchableIcon>
            </View> 
            { showData &&
                <View style={styles.shadow(colors)}>
                    <View style={styles.dropdownContainer(colors)}>
                        {renderItems()}
                    </View>   
                </View>
            }
            { !id && errorText && !showData &&
                <ResponsiveText 
                    fontStyle='errorInputText'
                    color={colors.RED}
                    text={errorText}
                    customStyle={styles.errorSpace}
                /> 
            }
        </View>
    );
});

export default Dropdown;