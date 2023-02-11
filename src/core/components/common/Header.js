import React from 'react';

import { 
    TouchableWithoutFeedback, 
    View, 
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { ResponsiveText } from '..';
import { BackArrowIcon } from '../../../../assets';
import styles from '../../styles/headerStyle';
import { strings } from '../../internationalization/strings';
import { 
    logOut, 
    useTheme, 
} from '../../services';

const Header = ({
    withBackArrow = true,
    title,
    withLogout = true,
}) => {
    const navigation = useNavigation();
    const { colors } = useTheme();

    return (
        <View style={styles.container}>
            {withBackArrow ? (
                <View style={styles.leftContainer}>
                    <TouchableWithoutFeedback onPress={() => navigation?.goBack()}>
                        <View>
                            <BackArrowIcon color={colors.MAIN_GRAY} />
                        </View>
                    </TouchableWithoutFeedback>
                </View>) : (
                    <View style={styles.leftContainer} />
                )
            }
            {title &&
                <ResponsiveText 
                    fontStyle='header'
                    text={title}
                    color={colors.MAIN_GRAY}
                    customStyle={styles.titleContainer}
                />
            }
            <View style={styles.rightContainer}>
                {withLogout &&
                    <TouchableWithoutFeedback onPress={() => logOut(navigation)}>
                        <View>
                            <ResponsiveText 
                                fontStyle='header'
                                text={strings.headers.logout}
                                color={colors.MAIN_GRAY}
                            />
                        </View>
                    </TouchableWithoutFeedback> 
                }
            </View>
        </View>
    );
}

export default Header;