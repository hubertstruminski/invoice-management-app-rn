import React from 'react';
import { 
    Platform, 
    StatusBar, 
    View, 
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { globalStyles } from '..';
import { MAIN_ORANGE } from '../../contants/colors';
import styles from './basicViewStyle';

const BasicView = ({
    children,
    headerComponent,
}) => {
    return (
        <View style={globalStyles.fullHeight}>
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
                {headerComponent}
                <View style={styles.shadow}>
                    <View style={styles.container}>
                        {children}
                    </View>
                </View>
            </View>
        </View>
    );
}

export default BasicView;