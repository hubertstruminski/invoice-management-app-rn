import React from 'react';
import { View } from 'react-native';

import { HomeOfficeIcon } from '../../../../assets';
import { 
    globalStyles,  
    ResponsiveText, 
} from '../..';
import { MAIN_GRAY } from '../../../contants/colors';

const CustomerDetails = ({
    item,
}) => {
    return (
        <React.Fragment>
            <ResponsiveText 
                fontStyle="smallDetailsTitle"
                color={MAIN_GRAY}
                text="Customer"
                customStyle={[
                    globalStyles.regularBottomSpace, 
                    globalStyles.textAlignCenter
                ]}
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
                        text={item?.fullName}
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
                        text={item?.phoneNumber}
                    />
                </View>
                <View>
                    <HomeOfficeIcon />
                </View>
            </View>
        </React.Fragment>
    );
}

export default CustomerDetails;