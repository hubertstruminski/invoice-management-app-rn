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
                <TouchableWithoutFeedback onPress={() => goBack()}>
                    <View>
                        <BackArrowIcon />
                    </View>
                </TouchableWithoutFeedback>) : (
                    <View></View>
                )
            }
            { title &&
                <ResponsiveText 
                    fontStyle="header"
                    text={title}
                    color={MAIN_GRAY}
                />
            }
            <View>
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