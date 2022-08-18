/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ScrollView, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Header from './src/components/Header';
import Story from './src/components/Story';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header />
        <Story />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.container}>
          <Text> sadasdasdsds </Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    height: '100%',
    width: '100%',
    display: 'flex',
  },
});

export default App;
