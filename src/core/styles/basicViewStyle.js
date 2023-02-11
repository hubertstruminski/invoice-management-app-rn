import { StyleSheet } from 'react-native';

import { hp } from '../tools';

export default StyleSheet.create({
    container: (colors) => ({
        backgroundColor: colors.WHITE,
        width: '100%',  
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24, 
        flex: 1,
    }),
    wrapper: (colors) => ({
        flex: 1,
        backgroundColor: colors.MAIN_ORANGE,
    }),
    shadow: (colors) => ({
        shadowColor: colors.BLACK,
        shadowOffset: { width: 0, height: hp(-4) },
        shadowOpacity: 0.25,
        shadowRadius: 24, 
        elevation: 3,
        backgroundColor: colors.WHITE,
        borderRadius: 24,
        flexGrow: 1,
        width: '100%',
    }),
    headerContainer: {
        height: hp(84),
    },
});