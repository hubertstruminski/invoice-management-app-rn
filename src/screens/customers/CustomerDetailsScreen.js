import React from 'react';
import { 
    FlatList,
    View,
} from 'react-native';

import { 
    AddressDetails,
    BasicView, 
    DescriptionSection, 
    DocumentPreview, 
    globalStyles, 
    Header, 
    ResponsiveText, 
} from '../../components';
import { MAIN_GRAY } from '../../contants/colors';

const CustomerDetailsScreen = () => {
    return (
        <BasicView 
            containerStyle={globalStyles.alignCenter}
            headerComponent={<Header title="Customer details" />}
        >
            <FlatList
                showsVerticalScrollIndicator={false}
                style={globalStyles.addEntityScrollViewContainer} 
                contentContainerStyle={[globalStyles.alignCenter, globalStyles.bigBottomPadding]} 
                ListHeaderComponent={() => (
                    <View style={globalStyles.alignCenter}>
                        <ResponsiveText 
                            fontStyle="headerDetails"
                            color={MAIN_GRAY}
                            text="Hubert Strumiński"
                            customStyle={globalStyles.largeSpace}
                        />
                        <View style={[globalStyles.detailsContainer, globalStyles.regularBottomSpace]}>
                            <ResponsiveText 
                                fontStyle="labelDetails"
                                color={MAIN_GRAY}
                                text={"Email" + ":"} 
                                customStyle={globalStyles.smallLabelSpace}
                            />
                            <ResponsiveText 
                                fontStyle="rightInputTitle"
                                color={MAIN_GRAY}
                                text="hubert.struminski@microsoft.wsei.edu.pl"
                                customStyle={globalStyles.regularBottomSpace}
                            />
                            <ResponsiveText 
                                fontStyle="labelDetails"
                                color={MAIN_GRAY}
                                text={"Phone number" + ":"} 
                                customStyle={globalStyles.smallLabelSpace}
                            />
                            <ResponsiveText 
                                fontStyle="rightInputTitle"
                                color={MAIN_GRAY}
                                text="+48 607 002 131"
                                customStyle={globalStyles.regularBottomSpace}
                            />
                            <ResponsiveText 
                                fontStyle="labelDetails"
                                color={MAIN_GRAY}
                                text={"NIP" + ":"} 
                                customStyle={globalStyles.smallLabelSpace}
                            />
                            <ResponsiveText 
                                fontStyle="rightInputTitle"
                                color={MAIN_GRAY}
                                text="456780123"
                                customStyle={globalStyles.regularBottomSpace}
                            />
                            <AddressDetails 
                                separatorStyle={globalStyles.regularBottomSpace}
                            />
                            <DescriptionSection 
                                separatorStyle={globalStyles.regularBottomSpace}
                            />
                        </View>
                        <ResponsiveText 
                            fontStyle="smallDetailsTitle"
                            color={MAIN_GRAY}
                            text="Documents"
                            customStyle={[
                                globalStyles.textAlignCenter, 
                                globalStyles.regularBottomSpace,
                            ]}
                        />
                    </View>
                )}
                data={[1, 2, 3, 4, 5]}
                renderItem={({ _, index }) => (
                    <DocumentPreview key={index} />
                )}
            />
        </BasicView>
    );
}

export default CustomerDetailsScreen;