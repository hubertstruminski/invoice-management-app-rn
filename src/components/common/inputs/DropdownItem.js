import React, {
    useState,
}from 'react';
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
} from '../../../contants/colors';
import styles from './dropdownItemStyle';

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
    const [isChecked, setIsChecked] = useState(isMark);

    const onPress = () => {
        setValue(name);
        setId && setId(id);
        closeDropdown();
    }

    const onMultipleSelect = () => {
        const newValue = !isChecked;

        if(newValue) {
            setChosenEntities(oldState => [...oldState, { name, id }]);
        } else {
            const copy = [...chosenEntities];  
            setChosenEntities(copy.filter(item => item.name !== name))
        }
        setIsChecked(newValue);
    }


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
                    fontStyle="errorInputText"
                    color={multiple && isChecked ? WHITE : MAIN_GRAY}
                    text={name}
                />
            </View>
        </TouchableWithoutFeedback>
    );
}

export default DropdownItem;