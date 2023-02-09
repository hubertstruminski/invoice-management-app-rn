import { StyleSheet } from 'react-native';

import { 
    BLACK,
    GRAY_3, 
    WHITE, 
} from '../constants/colors';
import { 
    hp, 
    wp, 
} from '../tools';

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
    documentContainer: {
        width: wp(358),
        borderRadius: 16,
        backgroundColor: WHITE,
        paddingVertical: hp(8),
    },
    documentShadow: {
        shadowColor: BLACK,
        shadowOffset: { width: 0, height: hp(2) },
        shadowOpacity: 0.25,
        shadowRadius: 8, 
        elevation: 3,
        backgroundColor: WHITE,
        borderRadius: 16,
        marginBottom: hp(24),
    },
    horizontalLineContainer: {
        width: '100%',
        borderBottomColor: GRAY_3,
        borderBottomWidth: 1,
        marginVertical: hp(16),
    },
    horizontalSpace: {
        paddingHorizontal: wp(16),
    },
    statusContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
});