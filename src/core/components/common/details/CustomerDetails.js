import React from 'react';

import { View } from 'react-native';

import { HomeOfficeIcon } from '../../../../../assets';
import {  ResponsiveText } from '../..';
import globalStyles from '../../../styles/globalStyles';
import { MAIN_GRAY } from '../../../constants/colors';
import { strings } from '../../../internationalization/strings';

const CustomerDetails = ({
    item,
}) => {
    return (
        <React.Fragment>
            <ResponsiveText 
                fontStyle="smallDetailsTitle"
                color={MAIN_GRAY}
                text={strings.labels.customer}
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
                        text={strings.labels.fullName + ":"} 
                        customStyle={globalStyles.smallLabelSpace}
                    />
                    <ResponsiveText 
                        fontStyle="rightInputTitle"
                        color={MAIN_GRAY}
                        text={item?.fullName}
                        customStyle={globalStyles.regularBottomSpace}
                    />
                    {item?.phoneNumber?.length > 0 &&
                        <React.Fragment>
                            <ResponsiveText 
                                fontStyle="labelDetails"
                                color={MAIN_GRAY}
                                text={strings.labels.phoneNumber + ":"} 
                                customStyle={globalStyles.smallLabelSpace}
                            />
                            <ResponsiveText 
                                fontStyle="rightInputTitle"
                                color={MAIN_GRAY}
                                text={item?.phoneNumber}
                            />
                        </React.Fragment>
                    }
                </View>
                <View>
                    <HomeOfficeIcon />
                </View>
            </View>
        </React.Fragment>
    );
}

export default CustomerDetails;