import React from 'react';

import { 
    View, 
    TouchableWithoutFeedback, 
} from 'react-native'; 

import { ResponsiveText } from '../..';
import { 
    useDropdownItem, 
    useTheme, 
} from '../../../services';
import styles from '../../../styles/inputs/dropdownItemStyle';

const DropdownItem = ({
    name,
    isLastItem,
    setValue,
    closeDropdown,
    id,
    setId,
    multiple,
    setChosenEntities,
    chosenEntities,
    isMark,
    isFirstItem,
}) => {
    const { colors } = useTheme();
    const { 
        onMultipleSelect, 
        onPress, 
        isChecked,
    } = useDropdownItem({
        name,
        setValue,
        setId,
        setChosenEntities,
        chosenEntities,
        closeDropdown,
        id, 
        isMark,
    });


    return (
        <TouchableWithoutFeedback onPress={multiple ? onMultipleSelect : onPress}>
            <View 
                style={[
                    styles.container, {
                        borderBottomWidth: isLastItem ? 0 : 1,
                        borderBottomColor: !isLastItem && colors.GRAY_4,
                        backgroundColor: multiple && isChecked ? colors.MAIN_ORANGE : colors.TRANSPARENT,
                        borderTopRightRadius: isFirstItem ? 8 : 0,
                        borderTopLeftRadius: isFirstItem ? 8 : 0,
                        borderBottomLeftRadius: isLastItem ? 8 : 0,
                        borderBottomRightRadius: isLastItem ? 8 : 0,
                    }
                ]}
            >
                <ResponsiveText 
                    fontStyle='errorInputText'
                    color={multiple && isChecked ? colors.WHITE : colors.MAIN_GRAY}
                    text={name}
                />
            </View>
        </TouchableWithoutFeedback>
    );
}

export default DropdownItem;