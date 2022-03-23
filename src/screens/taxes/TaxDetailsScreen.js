import React from 'react';
import { 
    ScrollView, 
    View,
} from 'react-native';

import { TaxDetailsIcon } from '../../../assets';
import { 
    BasicView, 
    globalStyles, 
    Header, 
    ResponsiveText, 
} from '../../components';
import { MAIN_GRAY } from '../../contants/colors';

const TaxDetailsScreen = () => {
    return (
        <BasicView 
            containerStyle={globalStyles.alignCenter}
            headerComponent={<Header title="Tax details" />}
        >
            <ScrollView 
                style={globalStyles.addEntityScrollViewContainer} 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[globalStyles.alignCenter, globalStyles.flex]}
            >
                <ResponsiveText 
                    fontStyle="headerDetails"
                    color={MAIN_GRAY}
                    text="VAT"
                    customStyle={globalStyles.largeSpace}
                />
                <View style={globalStyles.detailsContainer}>
                    <ResponsiveText 
                        fontStyle="labelDetails"
                        color={MAIN_GRAY}
                        text={"Amount" + ":"} 
                        customStyle={globalStyles.smallLabelSpace}
                    />
                    <ResponsiveText 
                        fontStyle="rightInputTitle"
                        color={MAIN_GRAY}
                        text={"23" + "%"}
                        customStyle={globalStyles.mediumBottomSpace}
                    />
                    <ResponsiveText 
                        fontStyle="labelDetails"
                        color={MAIN_GRAY}
                        text={"Description" + ":"} 
                        customStyle={globalStyles.smallLabelSpace}
                    />
                    <ResponsiveText 
                        fontStyle="rightInputTitle"
                        color={MAIN_GRAY}
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod sed consectetur velit metus, vivamus. Laoreet non sed quis magna urna libero. At volutpat, malesuada fermentum sed sed tincidunt. At lectus id scelerisque volutpat. Vel sed magna ac cursus libero. Volutpat iaculis dignissim sit sapien tellus vel felis in tortor. Pretium posuere at ullamcorper rhoncus quis iaculis. Justo mattis gravida lorem dignissim felis."
                    />
                </View>
                <View style={globalStyles.bottomIconDetailsContainer}>
                    <TaxDetailsIcon />
                </View>
            </ScrollView>
        </BasicView>
    );
}

export default TaxDetailsScreen;