import React from 'react';
import { 
    ScrollView, 
    View,
} from 'react-native';

import { CompanyDetailsIcon } from '../../../assets';
import { 
    BasicView, 
    globalStyles, 
    Header, 
    ResponsiveText, 
} from '../../components';
import { MAIN_GRAY } from '../../contants/colors';

const MyCompanyDetailsScreen = () => {
    return (
        <BasicView 
            containerStyle={globalStyles.alignCenter}
            headerComponent={<Header title="Company details" />}
        >
            <ScrollView 
                style={globalStyles.addEntityScrollViewContainer} 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[globalStyles.alignCenter, globalStyles.flex]}
            >
                <ResponsiveText 
                    fontStyle="headerDetails"
                    color={MAIN_GRAY}
                    text="Monkey@com"
                    customStyle={globalStyles.largeSpace}
                />
                <View style={globalStyles.detailsContainer}>
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
                        customStyle={globalStyles.mediumBottomSpace}
                    />
                    <ResponsiveText 
                        fontStyle="labelDetails"
                        color={MAIN_GRAY}
                        text={"Postalcode" + ":"} 
                        customStyle={globalStyles.smallLabelSpace}
                    />
                    <ResponsiveText 
                        fontStyle="rightInputTitle"
                        color={MAIN_GRAY}
                        text="31-345"
                        customStyle={globalStyles.mediumBottomSpace}
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
                        customStyle={globalStyles.mediumBottomSpace}
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
                    />
                </View>
                <View style={globalStyles.bottomIconDetailsContainer}>
                    <CompanyDetailsIcon />
                </View>
            </ScrollView>
        </BasicView>
    );
}

export default MyCompanyDetailsScreen;