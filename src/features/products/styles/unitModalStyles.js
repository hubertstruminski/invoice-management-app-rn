import { StyleSheet } from 'react-native';

import { 
    hp, 
    wp, 
} from '../../../core/tools';

export default StyleSheet.create({
    wrapper: {
        margin: 0,
    },
    container: (colors) => ({
        height: hp(600), 
        width: '100%', 
        backgroundColor: colors.WHITE, 
        position: 'absolute', 
        bottom: 0,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingVertical: hp(24),
        alignItems: 'center',
    }),
    scrollViewContainer: {
        width: '100%', 
        marginTop: hp(24),
    },
    buttonContainer: (colors) => ({
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: hp(74),
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: wp(16),
        borderTopColor: colors.MAIN_GRAY,
        borderTopWidth: 1,
        backgroundColor: colors.WHITE,
    }),
    button: {
        width: wp(128),
        height: hp(38),
    },
});