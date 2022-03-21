import React, { 
    useState,
    useEffect,
    forwardRef,
    useImperativeHandle,
} from 'react';
import { 
    View, 
    TextInput,
    TouchableWithoutFeedback,
} from 'react-native';

import { 
    DropdownItem, 
    ResponsiveText, 
} from '../..';
import { 
    GRAY_3, 
    MAIN_GRAY,
} from '../../../contants/colors';
import styles from './inputStyle';
import responsiveTextStyles from '../responsiveText/reponsiveTextStyle';
import { ArrowDownIcon } from '../../../../assets';

const Dropdown = forwardRef(({
    containerStyle,
    leftTitle,
    rightTitle,
    placeholder,
    data,
}, ref) => {
    const [filteredData, setFilteredData] = useState([]);
    const [showData, setShowData] = useState(false);
    const [value, setValue] = useState('');

    useEffect(() => {
        setFilteredData(data);
    }, [data]);

    useImperativeHandle(ref, () => ({
        closeDropdown: () => setShowData(false),
        isOpen: showData,
    }));

    useEffect(() => {
        if(value === '') {
            setFilteredData(data);
        } else {
            setFilteredData(data.filter(item => {
                const resultName = item.fullName ? item.fullName : item.name;
                return resultName.toLowerCase().includes(value.toLowerCase());
            }));
        }
    }, [value, data]);

    const renderItems = () => {
        return filteredData.map((item, index) => {
            const resultName = item.fullName ? item.fullName : item.name;
            return (
                <DropdownItem 
                    key={index}
                    name={resultName}
                    isLastItem={index === filteredData.length - 1}
                    setValue={setValue}
                    closeDropdown={() => ref.current.closeDropdown()}
                />
            );
        });
    }

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
            <View style={styles.inputContainer}>
                <TextInput 
                    style={[
                        responsiveTextStyles["inputText"],
                        styles.input,
                    ]}
                    placeholder={placeholder}
                    placeholderTextColor={GRAY_3}
                    value={value}
                    onChangeText={setValue}
                />
                <TouchableWithoutFeedback 
                    onPress={() => {
                        setValue('');
                        setShowData(!showData);
                    }}
                >
                    <View>
                        <ArrowDownIcon />
                    </View>
                </TouchableWithoutFeedback>
            </View> 
            { showData &&
                <View style={styles.shadow}>
                    <View style={styles.dropdownContainer}>
                        {renderItems()}
                    </View>   
                </View>
            }
        </View>
    );
});

export default Dropdown;