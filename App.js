import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, SafeAreaView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [isGreen, setIsGreen] = useState(true);

  const toggleColor = () => {
    setIsGreen(!isGreen);
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: isGreen ? '#00ff00' : '#ff0000' }
      ]}
      onPress={toggleColor}
    >
      <Image
        source={require('./assets/logo.png')}
        style={styles.logo}
      />
      <StatusBar style="auto" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
    position: 'absolute',
    top: 40,
    left: 20,
  }
});
