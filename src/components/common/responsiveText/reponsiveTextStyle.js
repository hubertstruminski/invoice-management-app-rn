import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { hp } from '../../../tools';

export default StyleSheet.create({
    appTitle: {
        fontSize: RFValue(36, 844),
        lineHeight: hp(42.19),
        fontFamily: 'Roboto-Regular',
    },
    button: {
        fontSize: RFValue(18, 844),
        lineHeight: hp(21.09),
        fontFamily: 'Roboto-Bold',
    },
    inputText: {
        fontSize: RFValue(16, 844),
        lineHeight: hp(18.75),
        fontFamily: 'Roboto-Bold',
    },
    rightInputTitle: {
        fontSize: RFValue(16, 844),
        lineHeight: hp(18.75),
        fontFamily: 'Roboto-Regular',
    },
    errorInputText: {
        fontSize: RFValue(14, 844),
        lineHeight: hp(16.41),
        fontFamily: 'Roboto-Bold',
    },
    registerTitle: {
        fontSize: RFValue(24, 844),
        lineHeight: hp(28.13),
        fontFamily: 'Roboto-Medium',
    },
    header: {
        fontSize: RFValue(18, 844),
        lineHeight: hp(18),
        fontFamily: 'Roboto-Medium',
    },
    details: {
        fontSize: RFValue(18, 844),
        lineHeight: hp(18),
        fontFamily: 'Roboto-Regular',
    }
});