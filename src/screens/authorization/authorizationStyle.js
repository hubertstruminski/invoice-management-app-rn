import { StyleSheet } from 'react-native';
import { hp, wp } from '../../tools';

export default StyleSheet.create({
    appTitleContainer: {
        width: wp(213),
        textAlign: 'center',
        marginBottom: hp(48),
    },
    container: {
        alignItems: 'center',
        paddingTop: hp(48),
    },
    lastInputSpace: {
        marginBottom: hp(48),
    },
    zeroBottomSpace: {
        marginBottom: 0,
    },
});