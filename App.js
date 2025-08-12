import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, SafeAreaView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [isGreen, setIsGreen] = useState(true);

  const toggleColor = () => {
    setIsGreen(!isGreen);
  };

  return (
    <SafeAreaView style={[
      styles.container,
      { backgroundColor: isGreen ? '#00ff00' : '#ff0000' }
    ]}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={toggleColor}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require('./assets/logo.png')}
            style={styles.logo}
          />
        </View>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  touchable: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    zIndex: 1,
  },
  logo: {
    width: 150,
    height: 75,
    resizeMode: 'contain',
  }
});
