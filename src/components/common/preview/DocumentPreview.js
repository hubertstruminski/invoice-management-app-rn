import React from 'react';
import { View } from 'react-native';

import { 
    globalStyles, 
    ResponsiveText, 
    TouchableIcon, 
} from '../..';
import { 
    MessageIcon, 
    PdfIcon, 
} from '../../../../assets';
import { 
    MAIN_GRAY, 
    RED, 
} from '../../../contants/colors';
import styles from './previewStyle';

const DocumentPreview = () => {
    return (
        <View style={styles.documentShadow}>
            <View style={styles.documentContainer}>
                <View 
                    style={[
                        globalStyles.row, 
                        globalStyles.spaceBetween,
                        styles.horizontalSpace
                    ]}
                >
                    <View>
                        <ResponsiveText 
                            fontStyle="header"
                            color={MAIN_GRAY}
                            text="Invoice"
                            customStyle={globalStyles.regularBottomSpace}
                        />
                        <View style={[globalStyles.rowCenter, globalStyles.smallLabelSpace]}>
                            <ResponsiveText 
                                fontStyle="boldSmallText"
                                color={MAIN_GRAY}
                                text={"Number" + ": "}
                            />
                            <ResponsiveText 
                                fontStyle="regularSmallText"
                                color={MAIN_GRAY}
                                text="100678"
                            />
                        </View>
                        <View style={[globalStyles.rowCenter, globalStyles.smallLabelSpace]}>
                            <ResponsiveText 
                                fontStyle="boldSmallText"
                                color={MAIN_GRAY}
                                text={"Date" + ": "}
                            />
                            <ResponsiveText 
                                fontStyle="regularSmallText"
                                color={MAIN_GRAY}
                                text="21.02.2022"
                            />
                        </View>
                        <View style={globalStyles.rowCenter}>
                            <ResponsiveText 
                                fontStyle="boldSmallText"
                                color={MAIN_GRAY}
                                text={"Deadline" + ": "}
                            />
                            <ResponsiveText 
                                fontStyle="regularSmallText"
                                color={MAIN_GRAY}
                                text="27.02.2022"
                            />
                        </View>
                    </View>
                    <View>
                        <ResponsiveText 
                            fontStyle="header"
                            color={MAIN_GRAY}
                            text="Customer"
                            customStyle={globalStyles.regularBottomSpace}
                        />
                        <ResponsiveText 
                            fontStyle="regularSmallText"
                            color={MAIN_GRAY}
                            text="Hubert Strumiński"
                            customStyle={globalStyles.smallLabelSpace}
                        />
                        <ResponsiveText 
                            fontStyle="boldSmallText"
                            color={MAIN_GRAY}
                            text="+48 607 002 131"
                        />
                    </View>
                </View>
                <View style={styles.horizontalLineContainer} />
                <View 
                    style={[
                        globalStyles.row, 
                        globalStyles.spaceBetween,
                        styles.horizontalSpace,
                    ]}
                >
                    <View style={globalStyles.rowCenter}>
                        <ResponsiveText 
                            fontStyle="boldSmallText"
                            color={MAIN_GRAY}
                            text={"Status" + ": "}
                        />
                        <ResponsiveText 
                            fontStyle="boldSmallText"
                            color={RED}
                            text="not sent"
                        />
                    </View>
                    <View style={globalStyles.rowCenter}>
                        <TouchableIcon 
                            containerStyle={globalStyles.mediumRightSpace}
                        >
                            <MessageIcon />
                        </TouchableIcon>
                        <TouchableIcon>
                            <PdfIcon />
                        </TouchableIcon>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default DocumentPreview;