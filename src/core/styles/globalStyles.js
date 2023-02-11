import { StyleSheet } from 'react-native';

import { 
    hp, 
    wp, 
} from '../tools';

export default StyleSheet.create({
    flex: {
        flex: 1,
    },
    fullHeight: {
        height: '100%',
    },
    flexGrow: {
        flexGrow: 1,
    },  
    rowCenter: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    spaceBetween: {
        justifyContent: 'space-between',
    },
    alignCenter: {
        alignItems: 'center',
    },
    shadow: (colors) => ({
        shadowColor: colors.BLACK,
        shadowOffset: { width: 0, height: hp(2) },
        shadowOpacity: 0.25,
        shadowRadius: 8, 
        elevation: 4,
        backgroundColor: colors.WHITE,
        borderRadius: 16,
        marginTop: hp(24),
    }),
    flatListContainer: {
        width: '100%', 
        paddingHorizontal: wp(16), 
        paddingTop: hp(24),
        overflow: 'hidden',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    mediumToSpace: {
        marginTop: hp(24),
    },
    largeSpace: {
        marginBottom: hp(48),
    },
    parentFlatList: {
        overflow: 'hidden',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    regularBottomSpace: {
        marginBottom: hp(16),
    },
    largeTopSpace: {
        paddingTop: hp(48),
    },
    addEntityScrollViewContainer: {
        paddingTop: hp(48),
    },
    largeBottomPadding: {
        marginBottom: hp(72),
    },
    mediumBottomSpace: {
        marginBottom: hp(24),
    },
    smallLabelSpace: {
        marginBottom: hp(8),
    },
    detailsContainer: {
        minWidth: '100%', 
        paddingHorizontal: wp(16),
    },
    bottomIconDetailsContainer: {
        height: '100%', 
        maxWidth: '100%', 
        paddingHorizontal: wp(16), 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    smallMediumDetailsSpace: {
        paddingTop: hp(32),
        paddingBottom: hp(32),
    },
    textAlignCenter: {
        textAlign: 'center', 
        minWidth: '100%',
    },
    mediumBottomPadding: {
        paddingBottom: hp(32),
    },
    bigBottomPadding: {
        paddingBottom: hp(72),
    },  
    zeroBottomPaddingSpace: {
        paddingBottom: 0,
    },
    mediumTopPadding: {
        paddingTop: hp(32),
    },
    row: {
        flexDirection: 'row',
    },
    mediumRightSpace: {
        marginRight: wp(32),
    },
    zeroPaddingHorizontal: {
        paddingHorizontal: 0,
    },
    fullWidthWithSmallPadding: {
        width: '100%',
        paddingHorizontal: wp(16),
    },
    lastInputSpace: {
        marginBottom: hp(48),
    },
    zeroBottomMargin: {
        marginBottom: 0,
    },
});