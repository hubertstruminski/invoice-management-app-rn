import React from 'react';

import { Provider } from 'react-redux';

import AppNavigator from './core/navigation/AppNavigator';
import { store } from './core/redux/store/store'; 
import { 
  ThemeProvider, 
  useInitAxios,
  useLocales, 
} from './core/services';

const App = () => {
  useInitAxios();
  useLocales();
  
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppNavigator />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
