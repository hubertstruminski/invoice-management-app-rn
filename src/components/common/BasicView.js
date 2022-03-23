import React from 'react';
import { 
    Platform, 
    StatusBar, 
    View, 
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { MAIN_ORANGE } from '../../contants/colors';
import styles from './basicViewStyle';

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
                <View style={styles.headerContainer}>
                    {headerComponent}
                </View>
                <View style={styles.shadow}>
                    <View style={[styles.container, containerStyle]}>
                        {children}
                    </View>
                </View>
            </View>
        </React.Fragment>
    );
}

export default BasicView;