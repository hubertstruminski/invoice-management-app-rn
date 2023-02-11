import React from 'react';

import { 
    Platform, 
    StatusBar, 
    View, 
} from 'react-native';

import { getStatusBarHeight } from 'react-native-status-bar-height';
import Toast from 'react-native-toast-message';

import { 
    TouchableLayout, 
    Header, 
} from '..';
import { hp } from '../../tools';
import styles from '../../styles/basicViewStyle';
import { useTheme } from '../../services';

const BasicView = ({
    children,
    headerComponent,
    containerStyle,
    title,
    withLogout = true,
    withBackArrow = true,
    withHeader = true,
}) => {
    const { colors } = useTheme();
    return (
        <React.Fragment>
            { Platform.OS === 'android' ? (
                    <StatusBar backgroundColor={colors.MAIN_ORANGE} />
                ) : (
                    <View 
                        style={{
                            height: getStatusBarHeight(false),
                            backgroundColor: colors.MAIN_ORANGE,
                        }} 
                    />
                )
            }
            <View 
                style={[
                    styles.wrapper(colors), {
                        justifyContent: headerComponent ? 'space-between' : 'flex-end',
                    }
                ]}
            >
                <Toast position='top' topOffset={hp(-50)} />  
                <TouchableLayout containerStyle={styles.headerContainer}>
                    {withHeader &&
                        <Header 
                            withLogout={withLogout} 
                            withBackArrow={withBackArrow}
                            title={title}
                        />
                    }
                </TouchableLayout>
                <View style={styles.shadow(colors)}>
                    <View 
                        style={[
                            styles.container(colors), 
                            containerStyle,
                        ]}
                    >
                        {children}
                    </View>
                </View>
            </View>
        </React.Fragment>
    );
}

export default BasicView;