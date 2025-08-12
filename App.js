import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, SafeAreaView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const ColorScreen = ({ onBack }) => {
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
};

const WelcomeScreen = ({ onStart }) => {
  return (
    <TouchableOpacity 
      style={styles.welcomeContainer}
      onPress={onStart}
    >
      <View style={styles.welcomeContent}>
        <Image
          source={require('./assets/logo.png')}
          style={styles.welcomeLogo}
        />
        <Text style={styles.welcomeText}>
          ברוכים הבאים למשחק של יש עתיד, להתחלה והחלפת צבעים יש ללחוץ על המסך
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleStart = () => {
    setShowWelcome(false);
  };

  return showWelcome ? (
    <WelcomeScreen onStart={handleStart} />
  ) : (
    <ColorScreen />
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
  },
  welcomeContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeContent: {
    padding: 20,
    alignItems: 'center',
    width: '100%',
  },
  welcomeLogo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 24,
    textAlign: 'right',
    color: '#333333',
    writingDirection: 'rtl',
    marginHorizontal: 20,
    fontWeight: '500'
  }
});
