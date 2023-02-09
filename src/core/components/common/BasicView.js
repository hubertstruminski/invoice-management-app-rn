import React from 'react';

import { 
    Platform, 
    StatusBar, 
    View, 
} from 'react-native';

import { getStatusBarHeight } from 'react-native-status-bar-height';
import Toast from 'react-native-toast-message';

import { TouchableLayout } from '..';
import { MAIN_ORANGE } from '../../constants/colors';
import { hp } from '../../tools';
import styles from '../../styles/basicViewStyle';

const BasicView = ({
    children,
    headerComponent,
    containerStyle,
}) => {
    return (
        <React.Fragment>
            { Platform.OS === 'android' ? (
                    <StatusBar backgroundColor={MAIN_ORANGE} />
                ) : (
                    <View 
                        style={{
                            height: getStatusBarHeight(false),
                            backgroundColor: MAIN_ORANGE,
                        }} 
                    />
                )
            }
            <View 
                style={[
                    styles.wrapper, {
                        justifyContent: headerComponent ? 'space-between' : 'flex-end',
                    }
                ]}
            >
                <Toast position='top' topOffset={hp(-50)} />  
                <TouchableLayout containerStyle={styles.headerContainer}>
                    {headerComponent}
                </TouchableLayout>
                <View style={styles.shadow}>
                    <View 
                        style={[
                            styles.container, 
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