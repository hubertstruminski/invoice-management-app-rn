import { StyleSheet } from 'react-native';

import { 
    BLACK, 
    MAIN_ORANGE, 
    WHITE, 
} from '../constants/colors';
import { hp } from '../tools';

export default StyleSheet.create({
    container: {
        backgroundColor: WHITE,
        width: '100%',  
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24, 
        flex: 1,
    },
    wrapper: {
        flex: 1,
        backgroundColor: MAIN_ORANGE,
    },
    shadow: {
        shadowColor: BLACK,
        shadowOffset: { width: 0, height: hp(-4) },
        shadowOpacity: 0.25,
        shadowRadius: 24, 
        elevation: 3,
        backgroundColor: WHITE,
        borderRadius: 24,
        flexGrow: 1,
        width: '100%',
    },
    headerContainer: {
        height: hp(84),
    },
});