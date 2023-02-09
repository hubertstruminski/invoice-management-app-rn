import { StyleSheet } from 'react-native';

import { WHITE } from '../../../core/constants/colors';
import { 
    hp, 
    wp, 
} from '../../../core/tools';

export default StyleSheet.create({
    container: {
        width: wp(167.5),
        height: hp(168),
        backgroundColor: WHITE,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: hp(32),
    }
});