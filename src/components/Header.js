import React from 'react';
import {View, StyleSheet} from 'react-native';
import Logo from './Logo';
import RightIcons from './RightIcons';

const Header = () => {
  return (
    <View style={styles.topHeader}>
      <Logo />
      <RightIcons />
    </View>
  );
};

const styles = StyleSheet.create({
  topHeader: {
    width: '100%',
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
});

export default Header;
