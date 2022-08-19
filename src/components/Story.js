import React from 'react';
import {View, StyleSheet, Image, ScrollView, Text} from 'react-native';
import userData from '../data/userData.json';

const Story = () => {
  return (
    <View style={styles.storyContainer}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        <View style={styles.story}>
          <Image
            style={styles.profile}
            source={{
              uri: 'https://i.pravatar.cc/300?img=26',
            }}
          />
          <View style={styles.plusContainer}>
            <Text style={styles.plusText}>+</Text>
          </View>
          <Text style={styles.title} numberOfLines={1}>
            Your story
          </Text>
        </View>
        {userData.map((user, index) => (
          <View style={styles.story} key={index}>
            <Image
              style={styles.profile}
              source={{
                uri: user.image,
              }}
            />
            <Text style={styles.title} numberOfLines={1}>
              {user.name}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  storyContainer: {
    width: '100%',
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 5,
    borderBottomColor: '#bcbcbc',
    borderBottomWidth: 1,
  },
  story: {
    width: 75,
    marginRight: 10,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile: {
    width: 64,
    height: 64,
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 64,
  },
  plusContainer: {
    position: 'absolute',
    bottom: 25,
    right: 3,
    width: 25,
    height: 25,
    borderRadius: 50,
    backgroundColor: '#00a1e5',
    borderColor: 'white',
    borderWidth: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusText: {
    color: 'white',
  },
  title: {
    fontSize: 13,
    marginTop: 3,
  },
});

export default Story;
