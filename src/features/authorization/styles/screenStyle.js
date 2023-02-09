import { StyleSheet } from 'react-native';

import { 
    hp, 
    wp, 
} from '../../../core/tools';

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
});