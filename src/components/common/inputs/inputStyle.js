import { StyleSheet } from 'react-native';

import globalStyles from '../globalStyles';
import { 
    GRAY_3, 
    MAIN_GRAY, 
    WHITE,}
     from '../../../contants/colors';
import { 
    hp, 
    wp, 
} from '../../../tools';

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
    inputContainer: {
        width: '100%',
        height: hp(48),
        borderRadius: 8,
        borderWidth: 1,
        borderColor: GRAY_3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: hp(12),
        paddingHorizontal: wp(16),
    },
    leftPlaceholderSpace: {
        marginLeft: wp(16),
    },
    input: {
        color: MAIN_GRAY,
    },
    errorSpace: {
        marginTop: hp(8),
        marginLeft: wp(16),
    },
    dropdownContainer: {
        borderRadius: 8,
        backgroundColor: WHITE,
    },
    shadow: {
        ...globalStyles.shadow,
        borderRadius: 8,
        marginTop: hp(16),
        width: wp(344),
    }
});