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
import { logOut } from '../../services';
import { MAIN_GRAY } from '../../constants/colors';

const Header = ({
    withBackArrow = true,
    title,
    withLogout = true,
}) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {withBackArrow ? (
                <View style={styles.leftContainer}>
                    <TouchableWithoutFeedback onPress={() => navigation?.goBack()}>
                        <View>
                            <BackArrowIcon />
                        </View>
                    </TouchableWithoutFeedback>
                </View>) : (
                    <View style={styles.leftContainer} />
                )
            }
            {title &&
                <ResponsiveText 
                    fontStyle="header"
                    text={title}
                    color={MAIN_GRAY}
                    customStyle={styles.titleContainer}
                />
            }
            <View style={styles.rightContainer}>
                {withLogout &&
                    <TouchableWithoutFeedback onPress={() => logOut(navigation)}>
                        <View>
                            <ResponsiveText 
                                fontStyle="header"
                                text={strings.headers.logout}
                                color={MAIN_GRAY}
                            />
                        </View>
                    </TouchableWithoutFeedback> 
                }
            </View>
        </View>
    );
}

export default Header;