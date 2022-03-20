import { StyleSheet } from 'react-native';

import { 
    BLACK, 
    WHITE, 
} from '../../../contants/colors';
import { 
    hp, 
    wp, 
} from '../../../tools';

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