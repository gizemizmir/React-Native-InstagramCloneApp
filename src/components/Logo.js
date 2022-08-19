import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const Logo = ({logoUrl}) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={logoUrl} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: 100,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Logo;
