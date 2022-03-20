import { StyleSheet } from 'react-native';

import { WHITE } from '../../../contants/colors';
import { 
    hp, 
    wp, 
} from '../../../tools';

export default StyleSheet.create({
    container: {
        width: wp(358),
        paddingHorizontal: wp(16),
        paddingVertical: hp(8),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: WHITE,
        borderRadius: 16,
    },
    columnContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1,
    },
    iconSpace: {
        marginRight: wp(18.67),
    },
});