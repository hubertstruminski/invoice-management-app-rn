import React from 'react';

import { 
    ScrollView, 
    View,
} from 'react-native';

import { useSelector } from 'react-redux';

import { TaxDetailsIcon } from '../../../../assets';
import { 
    BasicView, 
    DescriptionSection, 
    ResponsiveText, 
} from '../../../core/components';
import globalStyles from '../../../core/styles/globalStyles';
import { strings } from '../../../core/internationalization/strings';
import { useTheme } from '../../../core/services';

const TaxDetailsScreen = () => {
    const { colors } = useTheme();
    const {
        name,
        amount,
        description,
    } = useSelector(state => state.tax.taxDetails);

    return (
        <BasicView 
            containerStyle={globalStyles.alignCenter}
            title={strings.details.tax}
        >
            <ScrollView 
                style={globalStyles.addEntityScrollViewContainer} 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[
                    globalStyles.alignCenter, 
                    globalStyles.flex,
                ]}
            >
                <ResponsiveText 
                    fontStyle='headerDetails'
                    color={colors.MAIN_GRAY}
                    text={name}
                    customStyle={globalStyles.largeSpace}
                />
                <View style={globalStyles.detailsContainer}>
                    <ResponsiveText 
                        fontStyle='labelDetails'
                        color={colors.MAIN_GRAY}
                        text={strings.labels.amount + ':'} 
                        customStyle={globalStyles.smallLabelSpace}
                    />
                    <ResponsiveText 
                        fontStyle='rightInputTitle'
                        color={colors.MAIN_GRAY}
                        text={amount + '%'}
                        customStyle={globalStyles.mediumBottomSpace}
                    />
                    {description !== '' &&
                        <DescriptionSection 
                            fontStyle='labelDetails'
                            descriptionLabel={strings.labels.description + ':'} 
                            descriptionLabelStyle={globalStyles.smallLabelSpace}
                            description={description}
                        />
                    }
                </View>
                <View style={globalStyles.bottomIconDetailsContainer}>
                    <TaxDetailsIcon />
                </View>
            </ScrollView>
        </BasicView>
    );
}

export default TaxDetailsScreen