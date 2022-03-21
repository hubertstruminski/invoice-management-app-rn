import React, {
  useEffect,
} from 'react';
import { Platform } from 'react-native';
import SplashScreen from  "react-native-splash-screen";
import { Provider } from 'react-redux';
 
import AppNavigator from './src/navigation/AppNavigator';
import { store } from './src/redux/store/store';

const App = () => {
  useEffect(() => {
    Platform.OS === 'android' && SplashScreen.hide();
  });
  
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
