import { StyleSheet } from 'react-native';

import { 
    hp, 
    wp, 
} from '../../../tools';

export default StyleSheet.create({
    container: {
        height: hp(32),
        width: '100%',
        paddingHorizontal: wp(16),
        alignItems: 'flex-start',
        justifyContent: 'center',
    }
});