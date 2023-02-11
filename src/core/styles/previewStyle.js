import { StyleSheet } from 'react-native';

import { 
    hp, 
    wp, 
} from '../tools';

export default StyleSheet.create({
    productContainer: (colors) => ({
        width: wp(358),
        height: hp(90),
        borderRadius: 16,
        backgroundColor: colors.WHITE,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: wp(16),
        paddingVertical: hp(8),
    }),
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
    documentContainer: (colors) => ({
        width: wp(358),
        borderRadius: 16,
        backgroundColor: colors.WHITE,
        paddingVertical: hp(8),
    }),
    documentShadow: (colors) => ({
        shadowColor: colors.BLACK,
        shadowOffset: { width: 0, height: hp(2) },
        shadowOpacity: 0.25,
        shadowRadius: 8, 
        elevation: 3,
        backgroundColor: colors.WHITE,
        borderRadius: 16,
        marginBottom: hp(24),
    }),
    horizontalLineContainer: (colors) => ({
        width: '100%',
        borderBottomColor: colors.GRAY_3,
        borderBottomWidth: 1,
        marginVertical: hp(16),
    }),
    horizontalSpace: {
        paddingHorizontal: wp(16),
    },
    statusContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
});