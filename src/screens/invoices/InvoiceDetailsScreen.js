import React from 'react';
import { 
    FlatList,
    ScrollView, 
    View,
} from 'react-native';

import { 
    HomeOfficeIcon, 
    InvoiceCalendarIcon, 
} from '../../../assets';
import { 
    BasicView, 
    globalStyles, 
    Header, 
    ProductPreview, 
    ResponsiveText, 
} from '../../components';
import { MAIN_GRAY } from '../../contants/colors';
import { PRODUCTS } from '../../mocks';

const InvoiceDetailsScreen = () => {
    return (
        <BasicView 
            containerStyle={[globalStyles.alignCenter, globalStyles.flex]}
            headerComponent={<Header title="Invoice details" />}
        >
            <FlatList 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={globalStyles.alignCenter}
                ListHeaderComponent={() => (
                    <View style={globalStyles.alignCenter}>
                        <View 
                            style={[
                                globalStyles.rowCenter, 
                                globalStyles.smallMediumDetailsSpace,
                            ]}
                        >
                            <ResponsiveText 
                                fontStyle="headerDetails"
                                color={MAIN_GRAY}
                                text={"Invoice number" + ": "}
                            />
                            <ResponsiveText 
                                fontStyle="regularHeaderDetails"
                                color={MAIN_GRAY}
                                text="#023481"
                            />
                        </View>
                        <View style={globalStyles.detailsContainer}>
                            <View 
                                style={[
                                    globalStyles.rowCenter, 
                                    globalStyles.spaceBetween,
                                    globalStyles.regularBottomSpace,
                                ]}
                            >
                                <View>
                                    <ResponsiveText 
                                        fontStyle="labelDetails"
                                        color={MAIN_GRAY}
                                        text={"Date" + ":"} 
                                        customStyle={globalStyles.smallLabelSpace}
                                    />
                                    <ResponsiveText 
                                        fontStyle="rightInputTitle"
                                        color={MAIN_GRAY}
                                        text="21.02.2022"
                                        customStyle={globalStyles.regularBottomSpace}
                                    />
                                    <ResponsiveText 
                                        fontStyle="labelDetails"
                                        color={MAIN_GRAY}
                                        text={"Deadline" + ":"} 
                                        customStyle={globalStyles.smallLabelSpace}
                                    />
                                    <ResponsiveText 
                                        fontStyle="rightInputTitle"
                                        color={MAIN_GRAY}
                                        text="27.02.2022"
                                    />
                                </View>
                                <View>
                                <InvoiceCalendarIcon /> 
                                </View>
                            </View>
                            <ResponsiveText 
                                fontStyle="smallDetailsTitle"
                                color={MAIN_GRAY}
                                text="Customer"
                                customStyle={[globalStyles.regularBottomSpace, globalStyles.textAlignCenter]}
                            />
                            <View 
                                style={[
                                    globalStyles.rowCenter, 
                                    globalStyles.spaceBetween,
                                    globalStyles.regularBottomSpace,
                                ]}
                            >
                                <View>
                                    <ResponsiveText 
                                        fontStyle="labelDetails"
                                        color={MAIN_GRAY}
                                        text={"Full name" + ":"} 
                                        customStyle={globalStyles.smallLabelSpace}
                                    />
                                    <ResponsiveText 
                                        fontStyle="rightInputTitle"
                                        color={MAIN_GRAY}
                                        text="Hubert Strumiński"
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
                                        text="+48 500 032 147"
                                    />
                                </View>
                                <View>
                                    <HomeOfficeIcon />
                                </View>
                            </View> 
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
                            <ResponsiveText 
                                fontStyle="smallDetailsTitle"
                                color={MAIN_GRAY}
                                text="Products"
                                customStyle={[globalStyles.textAlignCenter, globalStyles.regularBottomSpace]}
                            /> 
                        </View>
                    </View>
                )}
                data={PRODUCTS}
                renderItem={({ item, index }) => (
                    <ProductPreview 
                        key={index}
                    />
                )}
            />
        </BasicView>
    );
}

export default InvoiceDetailsScreen;