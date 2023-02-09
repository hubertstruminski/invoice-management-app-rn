import { useState }from 'react';

export function useDropdownItem({
    name,
    setValue,
    closeDropdown,
    id,
    setId,
    setChosenEntities,
    chosenEntities,
    isMark,
}) {
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

    return {
        onMultipleSelect,
        onPress,
    };
}