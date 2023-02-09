import React from 'react';

import { 
    View, 
    TouchableWithoutFeedback, 
} from 'react-native'; 

import { ResponsiveText } from '../..';
import { 
    GRAY_4, 
    MAIN_GRAY, 
    MAIN_ORANGE, 
    WHITE, 
} from '../../../constants/colors';
import { useDropdownItem } from '../../../services';
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
    const { 
        onMultipleSelect, 
        onPress, 
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
                        borderBottomColor: !isLastItem && GRAY_4,
                        backgroundColor: multiple && isChecked ? MAIN_ORANGE : 'transparent',
                        borderTopRightRadius: isFirstItem ? 8 : 0,
                        borderTopLeftRadius: isFirstItem ? 8 : 0,
                        borderBottomLeftRadius: isLastItem ? 8 : 0,
                        borderBottomRightRadius: isLastItem ? 8 : 0,
                    }
                ]}
            >
                <ResponsiveText 
                    fontStyle='errorInputText'
                    color={multiple && isChecked ? WHITE : MAIN_GRAY}
                    text={name}
                />
            </View>
        </TouchableWithoutFeedback>
    );
}

export default DropdownItem;