import React, {
  useEffect,
} from 'react';
import SplashScreen from  "react-native-splash-screen";
 
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Platform,
  Text,
} from 'react-native';

const App = () => {
 
  useEffect(() => {
    Platform.OS === 'android' && SplashScreen.hide();
  });
  
  return (
    <SafeAreaView style={{backgroundColor: 'orange'}}>
      <StatusBar />
      <ScrollView 
        style={styles.flex}
        contentContainerStyle={styles.center}
      >
        <Text>Main Screen</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;
