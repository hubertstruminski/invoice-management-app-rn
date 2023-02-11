import { StyleSheet } from 'react-native';

import { 
    hp, 
    wp, 
} from '../../../core/tools';

export default StyleSheet.create({
    container: (colors) => ({
        width: wp(343),
        height: hp(32),
        borderBottomColor: colors.GRAY_3,
        borderBottomWidth: 1,
        justifyContent: 'space-between',
        paddingBottom: hp(6),
        paddingHorizontal: wp(12),
        flexDirection: 'row',
        alignItems: 'flex-end',
    }),
    wrapper: {
        marginBottom: hp(12),
    },
});