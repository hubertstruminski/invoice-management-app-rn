import { StyleSheet } from 'react-native';

import { 
    hp, 
    wp, 
} from '../../../core/tools';

export default StyleSheet.create({
    container: (colors) => ({
        width: wp(167.5),
        height: hp(168),
        backgroundColor: colors.WHITE,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: hp(32),
    }),
});