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
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const WelcomeScreen = ({ onStart }) => {
  const [pressed, setPressed] = useState(false);

  const handlePressIn = () => {
    setPressed(true);
  };

  const handlePressOut = () => {
    setPressed(false);
    onStart();
  };

  return (
    <TouchableOpacity 
      style={[styles.welcomeContainer, pressed && styles.welcomeContainerPressed]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <View style={[styles.welcomeContent, pressed && styles.welcomeContentPressed]}>
        <View style={styles.logoWrapper}>
          <Image
            source={require('./assets/logo.png')}
            style={[styles.welcomeLogo, pressed && styles.welcomeLogoPressed]}
          />
        </View>
        <Text style={[styles.welcomeText, pressed && styles.welcomeTextPressed]}>
          ברוכים הבאים למשחק של יש עתיד
        </Text>
        <Text style={[styles.welcomeSubText, pressed && styles.welcomeTextPressed]}>
          להתחלה והחלפת צבעים יש ללחוץ על המסך
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
  welcomeContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeContainerPressed: {
    backgroundColor: '#f0f0f0',
  },
  welcomeContent: {
    padding: 20,
    alignItems: 'center',
    width: '100%',
    transform: [{ scale: 1 }],
  },
  welcomeContentPressed: {
    transform: [{ scale: 0.98 }],
  },
  logoWrapper: {
    width: 280,
    height: 140,
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeLogo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  welcomeLogo: {
    width: 260,
    height: 130,
    resizeMode: 'contain',
  },
  welcomeLogoPressed: {
    opacity: 0.8,
  },
  welcomeText: {
    fontSize: 28,
    textAlign: 'center',
    color: '#333333',
    writingDirection: 'rtl',
    marginHorizontal: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  welcomeSubText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#666666',
    writingDirection: 'rtl',
    marginHorizontal: 20,
    fontWeight: '500',
  },
  welcomeTextPressed: {
    opacity: 0.7,
  }
});
