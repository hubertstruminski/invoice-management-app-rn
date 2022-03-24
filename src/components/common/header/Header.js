import React from 'react';
import { 
    TouchableWithoutFeedback, 
    View, 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ResponsiveText } from '../..';
import { BackArrowIcon } from '../../../../assets';
import { MAIN_GRAY } from '../../../contants/colors';
import styles from './headerStyle';

const Header = ({
    withBackArrow = true,
    title,
    withLogout = true,
}) => {
    const { goBack, navigate } = useNavigation();

    return (
        <View style={styles.container}>
            {withBackArrow ? (
                <View style={styles.leftContainer}>
                    <TouchableWithoutFeedback onPress={() => goBack()}>
                        <View>
                            <BackArrowIcon />
                        </View>
                    </TouchableWithoutFeedback>
                </View>) : (
                    <View style={styles.leftContainer} />
                )
            }
            { title &&
                <ResponsiveText 
                    fontStyle="header"
                    text={title}
                    color={MAIN_GRAY}
                    customStyle={styles.titleContainer}
                />
            }
            <View style={styles.rightContainer}>
                {withLogout &&
                    <TouchableWithoutFeedback onPress={() => navigate('LoginScreen')}>
                        <View>
                            <ResponsiveText 
                                fontStyle="header"
                                text="Logout"
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