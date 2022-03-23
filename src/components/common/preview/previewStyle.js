import { StyleSheet } from 'react-native';

import { WHITE } from '../../../contants/colors';
import { 
    hp, 
    wp, 
} from '../../../tools';

export default StyleSheet.create({
    productContainer: {
        width: wp(358),
        height: hp(90),
        borderRadius: 16,
        backgroundColor: WHITE,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: wp(16),
        paddingVertical: hp(8),
    },
    shadowSpace: {
        marginBottom: hp(24),
        marginTop: 0,
    },
    columnContainer: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
});