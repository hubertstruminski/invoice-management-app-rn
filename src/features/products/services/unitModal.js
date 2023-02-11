import { 
    useDispatch, 
    useSelector, 
} from 'react-redux';

import { 
    setChosenUnit, 
    setIsUnitModalVisible, 
} from '../../../core/redux/actions';

export function useUnitModal() {
    const dispatch = useDispatch();

    const openModal = () => dispatch(setIsUnitModalVisible(true));
    const closeModal = () => dispatch(setIsUnitModalVisible(false));

    return {
        openModal, 
        closeModal,
    };
};

export function useUnitItem(index) {
    const chosenIndex = useSelector(state => state.product.chosenUnit);
    const { closeModal } = useUnitModal();

    const dispatch = useDispatch();

    const onPress = () => {
        dispatch(setChosenUnit(index));
        closeModal();
    }

    return {
        chosenIndex,
        onPress,
    };
}