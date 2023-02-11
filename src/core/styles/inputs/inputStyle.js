import { StyleSheet } from 'react-native';

import globalStyles from '../globalStyles';
import { 
    hp, 
    wp, 
} from '../../tools';

export default StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: wp(344),
        marginBottom: hp(24),
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: hp(8),
        flexDirection: 'row',
        width: '100%',
    },
    inputContainer: (colors) => ({
        width: '100%',
        height: hp(48),
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.GRAY_3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: hp(12),
        paddingHorizontal: wp(16),
    }),
    leftPlaceholderSpace: {
        marginLeft: wp(16),
    },
    input: (colors) => ({
        color: colors.MAIN_GRAY,
    }),
    errorSpace: {
        marginTop: hp(8),
        marginLeft: wp(16),
    },
    dropdownContainer: (colors) => ({
        borderRadius: 8,
        backgroundColor: colors.WHITE,
    }),
    shadow: (colors) => ({
        ...globalStyles.shadow(colors),
        borderRadius: 8,
        marginTop: hp(16),
        width: wp(344),
    }),
});