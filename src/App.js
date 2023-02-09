import React, {
  useEffect,
} from 'react';

import { 
  Platform,
  AppState, 
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';

import { setLanguage } from './core/internationalization/strings';
import AppNavigator from './core/navigation/AppNavigator';
import { store } from './core/redux/store/store'; 
import { useInitAxios } from './core/services';

const App = () => {
  useInitAxios();
  useEffect(() => {
    Platform.OS === 'android' && SplashScreen.hide();
    
    const languageSubscription = AppState.addEventListener('change', nextAppState => {
      if(nextAppState === 'active') {
        setLanguage();
      }
    });

    return () => languageSubscription.remove();
  });
  
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
