import { StyleSheet } from 'react-native';

import { 
    hp, 
    wp, 
} from '../tools';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: hp(33),
        width: '100%',
    },
    leftContainer: {
        position: 'absolute',
        left: wp(16),
        top: hp(33),
    },
    rightContainer: {
        position: 'absolute',
        right: wp(16),
        top: hp(33),
    }
});