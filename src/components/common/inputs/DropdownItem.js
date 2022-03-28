import React from 'react';
import { 
    View, 
    TouchableWithoutFeedback, 
} from 'react-native'; 

import { ResponsiveText } from '../..';
import {
    GRAY_4, 
    MAIN_GRAY, 
} from '../../../contants/colors';
import styles from './dropdownItemStyle';

const DropdownItem = ({
    name,
    isLastItem,
    setValue,
    closeDropdown,
    id,
    setId,
}) => {

    const onPress = () => {
        setValue(name);
        setId && setId(id);
        closeDropdown();
    }

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View 
                style={[
                    styles.container, {
                        borderBottomWidth: isLastItem ? 0 : 1,
                        borderBottomColor: !isLastItem && GRAY_4,
                    }
                ]}
            >
                <ResponsiveText 
                    fontStyle="errorInputText"
                    color={MAIN_GRAY}
                    text={name}
                />
            </View>
        </TouchableWithoutFeedback>
    );
}

export default DropdownItem;