import { StyleSheet } from 'react-native';

import { 
    hp, 
    wp, 
} from '../../../core/tools';

export default StyleSheet.create({
    container: (colors) => ({
        height: hp(48),
        paddingHorizontal: wp(16),
        width: '100%',
        borderBottomColor: colors.GRAY_3,
        borderBottomWidth: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }),
});