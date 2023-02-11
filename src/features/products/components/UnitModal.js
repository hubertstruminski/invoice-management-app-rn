import React from 'react';

import { 
    ScrollView, 
    View, 
} from 'react-native';

import Modal from 'react-native-modal';
import { useSelector } from 'react-redux';

import { UnitItem } from '.';
import { 
    ResponsiveText, 
    Button, 
} from '../../../core/components';
import { strings } from '../../../core/internationalization/strings';
import { useTheme } from '../../../core/services';
import { UNITS } from '../mocks';
import { useUnitModal } from '../services';
import styles from '../styles/unitModalStyles';

const UnitModal = () => {
    const isVisible = useSelector(state => state.product.isModalVisible);
    const { closeModal } = useUnitModal();
    const { colors } = useTheme();

    return (
        <Modal
            isVisible={isVisible}
            style={styles.wrapper}
            coverScreen={false}
            onBackdropPress={closeModal}
        >
            <View style={styles.container(colors)}>
                <ResponsiveText 
                    fontStyle='inputText'
                    color={colors.MAIN_GRAY}
                    text={strings.placeholders.selectUnit}
                />
                <ScrollView style={styles.scrollViewContainer}>
                    {UNITS.map((item, index) => (
                        <UnitItem 
                            key={index}
                            item={item}
                            index={index}
                        />
                    ))}
                </ScrollView>
                <View style={styles.buttonContainer(colors)}>
                    <Button 
                        backgroundColor={colors.TRANSPARENT}
                        customStyle={styles.button}
                        isOutline
                        text={strings.buttons.cancel}
                        onPress={closeModal}
                    />
                </View>
            </View>
        </Modal>
    );
}

export default UnitModal;