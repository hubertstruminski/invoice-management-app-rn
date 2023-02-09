import React, { 
    useState,
    useEffect,
    useImperativeHandle,
    useCallback,
} from 'react';

import { DropdownItem } from '../../components';

export function useDropdown({
    data,
    setId,
    chosenEntityName,
    multiple,
    setChosenEntities,
    chosenEntities, 
    ref,
}) {
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

    return {
        toggleDropdown,
        renderItems,
    }
}