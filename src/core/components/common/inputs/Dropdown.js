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
    GRAY_3, 
    MAIN_GRAY, 
    RED, 
} from '../../../constants/colors';
import { useDropdown } from '../../../services';

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
    const {
        renderItems,
        toggleDropdown,
    } = useDropdown({
        data,
        setId,
        chosenEntityName,
        setChosenEntities,
        chosenEntities,
        multiple,
        ref,
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
                    color={MAIN_GRAY}
                />
                { rightTitle &&
                    <ResponsiveText 
                        fontStyle='rightInputTitle'
                        text={rightTitle}
                        color={GRAY_3}
                    />
                }
            </View>
            <View 
                style={[
                    styles.inputContainer, {
                        height: multiple ? undefined : hp(48),
                        borderColor: (!id && errorText && !showData) ? RED : GRAY_3,
                    }
                ]}
            >
                {multiple ? (
                        <ResponsiveText 
                            fontStyle='inputText'
                            color={chosenEntities?.length !== 0 ? MAIN_GRAY : GRAY_3}
                            text={chosenEntities?.length === 0 ? 
                                strings.placeholders.multipleProducts : chosenEntities?.map(item => item.name).join(', ')}
                        />
                    ) :
                        <ResponsiveText 
                            fontStyle='inputText'
                            color={value !== '' ? MAIN_GRAY : GRAY_3}
                            text={value === '' ? placeholder : value}
                            customStyle={[
                                styles.input, {
                                    flex: 1,
                                }
                            ]}
                        />
                }
                <TouchableIcon onPress={toggleDropdown}>
                    <ArrowDownIcon />
                </TouchableIcon>
            </View> 
            { showData &&
                <View style={styles.shadow}>
                    <View style={styles.dropdownContainer}>
                        {renderItems()}
                    </View>   
                </View>
            }
            { !id && errorText && !showData &&
                <ResponsiveText 
                    fontStyle='errorInputText'
                    color={RED}
                    text={errorText}
                    customStyle={styles.errorSpace}
                /> 
            }
        </View>
    );
});

export default Dropdown;