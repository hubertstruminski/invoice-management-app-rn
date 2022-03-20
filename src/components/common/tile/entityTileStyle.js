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
    shadow: {
        shadowColor: BLACK,
        shadowOffset: { width: 0, height: hp(2) },
        shadowOpacity: 0.25,
        shadowRadius: 8, 
        elevation: 3,
        backgroundColor: WHITE,
        borderRadius: 16,
        marginTop: hp(24),
    },
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