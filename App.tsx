import React from 'react';
import { useFonts } from 'expo-font';

import { StyleSheet, Text, View } from 'react-native';
import { Error, Primary } from './src/styles/colorPallete';

export default function App() {
  const [loaded] = useFonts({
    // MonropeRg: require('./src/assets/fonts/Gilroy-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={{ color: Primary(300), fontFamily: 'MonropeRg' }}>
        Open up App.tsx to start working on your app!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
