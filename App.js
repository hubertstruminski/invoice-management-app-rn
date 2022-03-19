import React, {
  useEffect,
} from 'react';
import { Platform } from 'react-native';
import SplashScreen from  "react-native-splash-screen";
 
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  useEffect(() => {
    Platform.OS === 'android' && SplashScreen.hide();
  });
  
  return <AppNavigator />;
};

export default App;
