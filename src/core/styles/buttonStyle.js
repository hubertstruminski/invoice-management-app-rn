import { StyleSheet } from 'react-native';

import { 
    hp, 
    wp, 
} from '../tools';

export default StyleSheet.create({
    container: {
        width: wp(344),
        height: hp(56),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginBottom: hp(24),
    }
});