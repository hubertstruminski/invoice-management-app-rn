import React, { 
    useState,
    useEffect,
    forwardRef,
    useImperativeHandle,
    useCallback,
} from 'react';
import { 
    View, 
    TextInput,
} from 'react-native';

import { 
    DropdownItem, 
    ResponsiveText,
    TouchableIcon, 
} from '../..';
import { 
    GRAY_3, 
    MAIN_GRAY,
    RED,
} from '../../../contants/colors';
import styles from './inputStyle';
import responsiveTextStyles from '../responsiveText/reponsiveTextStyle';
import { ArrowDownIcon } from '../../../../assets';
import { hp } from '../../../tools';
import { languages } from '../../../internationalization/languages';

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
    const [filteredData, setFilteredData] = useState([]);
    const [showData, setShowData] = useState(false);
    const [value, setValue] = useState('');

    useEffect(() => {
        setFilteredData(data);
    }, [data]);

    useEffect(() => {
        chosenEntityName && setValue(chosenEntityName);
    }, [chosenEntityName]);

    useEffect(() => {
        if(value === '') {
            setFilteredData(data);
        } else {
            setFilteredData(data.filter(item => {
                const resultName = item.fullName ? item.fullName : item.name;
                return resultName?.toLowerCase().includes(value?.toLowerCase());
            }));
        }
    }, [value, data]);

    useImperativeHandle(ref, () => ({
        closeDropdown: () => setShowData(false),
        isOpen: showData,
    }));

    const renderItems = useCallback(() => {
        return filteredData.map((item, index) => {
            const resultName = item.fullName ? item.fullName : item.name;
            return (
                <DropdownItem 
                    key={index}
                    name={resultName}
                    id={item.id}
                    isLastItem={index === filteredData.length - 1}
                    setValue={setValue}
                    setId={setId}
                    closeDropdown={() => ref.current.closeDropdown()}
                    multiple={multiple}
                    setChosenEntities={setChosenEntities}
                    chosenEntities={chosenEntities}
                    isMark={chosenEntities?.find(item => item.name === resultName) !== undefined}
                    isFirstItem={index === 0}
                />
            );
        });
    }, [
        filteredData, 
        ref,
        multiple, 
        setChosenEntities, 
        chosenEntities,
    ]);

    const toggleDropdown = useCallback(() => {
        setValue('');
        setId && setId(null);
        setShowData(!showData);
    }, [showData]);

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
            <View 
                style={[
                    styles.inputContainer, {
                        height: multiple ? undefined : hp(48),
                    }
                ]}
            >
                {multiple ? (
                        <ResponsiveText 
                            fontStyle="inputText"
                            color={chosenEntities?.length !== 0 ? MAIN_GRAY : GRAY_3}
                            text={chosenEntities?.length === 0 ? 
                                languages.placeholders.multipleProducts : chosenEntities?.map(item => item.name).join(', ')}
                        />
                    ) :
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
                    fontStyle="errorInputText"
                    color={RED}
                    text={errorText}
                    customStyle={styles.errorSpace}
                /> 
            }
        </View>
    );
});

export default Dropdown;