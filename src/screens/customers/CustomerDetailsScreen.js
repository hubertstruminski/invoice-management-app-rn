import React from 'react';
import { 
    FlatList,
    ScrollView, 
    View,
} from 'react-native';

import { CompanyDetailsIcon } from '../../../assets';
import { 
    BasicView, 
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
                            <ResponsiveText 
                                fontStyle="labelDetails"
                                color={MAIN_GRAY}
                                text={"Street" + ":"} 
                                customStyle={globalStyles.smallLabelSpace}
                            />
                            <ResponsiveText 
                                fontStyle="rightInputTitle"
                                color={MAIN_GRAY}
                                text="Karmelicka 45/32"
                                customStyle={globalStyles.regularBottomSpace}
                            />
                            <ResponsiveText 
                                fontStyle="labelDetails"
                                color={MAIN_GRAY}
                                text={"City" + ":"} 
                                customStyle={globalStyles.smallLabelSpace}
                            />
                            <ResponsiveText 
                                fontStyle="rightInputTitle"
                                color={MAIN_GRAY}
                                text="Cracow"
                                customStyle={globalStyles.regularBottomSpace}
                            />
                            <ResponsiveText 
                                fontStyle="labelDetails"
                                color={MAIN_GRAY}
                                text={"Country" + ":"} 
                                customStyle={globalStyles.smallLabelSpace}
                            />
                            <ResponsiveText 
                                fontStyle="rightInputTitle"
                                color={MAIN_GRAY}
                                text="Poland"
                                customStyle={globalStyles.regularBottomSpace}
                            />
                            <ResponsiveText 
                                fontStyle="smallDetailsTitle"
                                color={MAIN_GRAY}
                                text="Description"
                                customStyle={[globalStyles.regularBottomSpace, globalStyles.textAlignCenter]}
                            />
                            <ResponsiveText 
                                fontStyle="rightInputTitle"
                                color={MAIN_GRAY}
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo turpis diam feugiat quis euismod id neque a eleifend. In massa pretium sit odio amet. Ullamcorper ut convallis sit sed urna. Dictum mi adipiscing at turpis cras hac urna, commodo."
                                customStyle={globalStyles.regularBottomSpace}
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
                renderItem={({ item, index }) => (
                    <DocumentPreview key={index} />
                )}
            />
        </BasicView>
    );
}

export default CustomerDetailsScreen;