import React from 'react';
import {View, StyleSheet} from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import FABIcon from 'react-native-vector-icons/FontAwesome5';

const RightIcons = () => {
  return (
    <View style={styles.imageContainer}>
      <FAIcon
        name="plus-square-o"
        size={25}
        color="#000"
        style={styles.icons}
      />
      <MIcon
        name="notifications-none"
        size={25}
        color="#000"
        style={styles.icons}
      />
      <FABIcon
        name="facebook-messenger"
        size={25}
        color="#000"
        style={styles.icons}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: 100,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icons: {
    marginHorizontal: 5,
  },
});

export default RightIcons;
