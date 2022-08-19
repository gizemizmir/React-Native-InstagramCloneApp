/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ScrollView, StyleSheet, View, SafeAreaView} from 'react-native';
import Header from './src/components/Header';
import Story from './src/components/Story';
import Post from './src/components/Post';
import Footer from './src/components/Footer';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.container}>
          <Story />
          <Post />
        </ScrollView>
      </View>
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    height: '100%',
    width: '100%',
    display: 'flex',
    paddingBottom: 30,
  },
});

export default App;
