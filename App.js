/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';

import PrimaryButton from './components/PrimaryButton';
import SignInScreen from './SignInScreen';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.backgroundStyles}>
        <View>
          <PrimaryButton />
          <SignInScreen />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },

  backgroundStyles: {
    width: 375,
    height: 968,
  },
});

export default App;
