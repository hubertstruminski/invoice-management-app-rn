import React from 'react';

import { 
    TouchableOpacity, 
    View, 
} from 'react-native';

import { useSelector } from 'react-redux';

import { ArrowRightIcon } from '../../../../assets';
import { ResponsiveText } from '../../../core/components';
import { strings } from '../../../core/internationalization/strings';
import { useTheme } from '../../../core/services';
import { UNITS } from '../mocks';
import { useUnitModal } from '../services';
import styles from '../styles/unitInputStyles';

const UnitInput = () => {
    const unitIndex = useSelector(state => state.product.chosenUnit);
    const { openModal } = useUnitModal();
    const { colors } = useTheme();

    console.log("unitIndex: ", unitIndex);

    return (
        <View style={styles.wrapper}>
            <ResponsiveText 
                fontStyle='inputText'
                text={strings.labels.measureUnit}
                color={colors.MAIN_GRAY}
            />
            <TouchableOpacity onPress={openModal}>
                <View style={styles.container(colors)}>
                    <ResponsiveText 
                        fontStyle='inputText'
                        text={UNITS[unitIndex]}
                        color={colors.MAIN_GRAY}
                    />
                    <ArrowRightIcon />
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default UnitInput;