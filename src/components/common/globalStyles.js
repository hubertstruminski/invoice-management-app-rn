import { StyleSheet } from 'react-native';

import { 
    BLACK, 
    WHITE, 
} from '../../contants/colors';
import { 
    hp, 
    wp, 
} from '../../tools';

export default StyleSheet.create({
    flex: {
        flex: 1,
    },
    fullHeight: {
        height: '100%',
    },
    rowCenter: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    spaceBetween: {
        justifyContent: 'space-between',
    },
    alignCenter: {
        alignItems: 'center',
    },
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
    flatListContainer: {
        width: '100%', 
        paddingHorizontal: wp(16), 
        paddingTop: hp(24),
        overflow: 'hidden',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    mediumToSpace: {
        marginTop: hp(24),
    },
    largeSpace: {
        marginBottom: hp(48),
    },
    parentFlatList: {
        overflow: 'hidden',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
});