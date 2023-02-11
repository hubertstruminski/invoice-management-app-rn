import { useEffect } from 'react';
  
import { 
    Platform,
    AppState, 
} from 'react-native';
  
import SplashScreen from 'react-native-splash-screen';

import { setLanguage } from '../internationalization/strings';

export function useLocales() {
    useEffect(() => {
        Platform.OS === 'android' && SplashScreen.hide();
        
        const languageSubscription = AppState.addEventListener('change', nextAppState => {
            if(nextAppState === 'active') {
                setLanguage();
            }
        });
    
        return () => languageSubscription.remove();
    }, []);
}