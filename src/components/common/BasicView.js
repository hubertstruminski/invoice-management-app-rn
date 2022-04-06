import React from 'react';
import { 
    Platform, 
    StatusBar, 
    View, 
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { TouchableLayout } from '..';

import { MAIN_ORANGE } from '../../contants/colors';
import styles from './basicViewStyle';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


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
                <TouchableLayout containerStyle={styles.headerContainer}>
                    {headerComponent}
                </TouchableLayout>
                <View style={styles.shadow}>
                    {/* <KeyboardAwareScrollView  extraScrollHeight={100}
                    // s
                    // tyle={[containerStyle]}
                    > */}
                    <View style={[styles.container, containerStyle]}>
                        {children}
                    </View>
                    {/* </KeyboardAwareScrollView> */}
                </View>
            </View>
        </React.Fragment>
    );
}

export default BasicView;