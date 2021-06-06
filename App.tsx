import React from 'react';
import { useFonts } from 'expo-font';

import { StyleSheet, Text, View, LogBox } from 'react-native';
import AppNavigation from './src/navigation/index';

// console.disableYellowBox = true;
LogBox.ignoreAllLogs(true);

export default function App() {
  const [loaded] = useFonts({
    'PD-Bold': require('./src/assets/fonts/PlayfairDisplay-Bold.ttf'),
    'PD-Regular': require('./src/assets/fonts/PlayfairDisplay-Regular.ttf'),
    'OpenSans-Regular': require('./src/assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans-SemiBold': require('./src/assets/fonts/OpenSans-SemiBold.ttf'),
    'OpenSans-Bold': require('./src/assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return <AppNavigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
