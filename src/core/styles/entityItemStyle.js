import { StyleSheet } from 'react-native';

import { 
    hp, 
    wp, 
} from '../tools';

export default StyleSheet.create({
    container: (colors) => ({
        width: wp(358),
        paddingHorizontal: wp(16),
        paddingVertical: hp(8),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.WHITE,
        borderRadius: 16,
    }),
    columnStretchContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    columnContainer: {
        flexDirection: 'column',
        flex: 1,
    },
    iconSpace: {
        marginRight: wp(18.67),
    },
    smallBottomSpace: {
        marginBottom: hp(8),
    },
    mediumBottomSpace: {
        marginBottom: hp(16),
    },
});