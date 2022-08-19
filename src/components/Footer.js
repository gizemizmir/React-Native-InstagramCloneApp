import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';

const Footer = () => {
  return (
    <View style={styles.bottomBar}>
      <MIcon name="home-filled" size={30} color="#000" />
      <FAIcon name="search" size={25} color="#000" />
      <MIcon name="ondemand-video" size={30} color="#000" />
      <MIcon name="shopping-bag" size={30} color="#000" />
      <Image
        style={styles.userImage}
        source={{
          uri: 'https://picsum.photos/300/300',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBar: {
    height: 65,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopColor: '#bcbcbc',
    borderTopWidth: 1,
  },
  userImage: {
    width: 30,
    height: 30,
    borderRadius: 30,
    marginRight: 10,
    borderColor: '#bcbcbc',
    borderWidth: 1,
  },
});

export default Footer;
