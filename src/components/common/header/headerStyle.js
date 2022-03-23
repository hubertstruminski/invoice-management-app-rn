import { StyleSheet } from 'react-native';

import { 
    hp, 
    wp, 
} from '../../../tools';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: wp(16),
        paddingTop: hp(33),
        width: '100%',
    },
});