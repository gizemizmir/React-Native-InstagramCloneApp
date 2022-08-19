import React from 'react';
import {View, StyleSheet, Image, ScrollView, Text} from 'react-native';

const users = [
  {
    id: 1,
    image: 'https://i.pravatar.cc/300',
    name: 'Müslüm Gürses',
  },
  {
    id: 2,
    image: 'https://i.pravatar.cc/300',
    name: 'Zeynep Bastık',
  },
  {
    id: 3,
    image: 'https://i.pravatar.cc/300',
    name: 'Sena Şener',
  },
  {
    id: 4,
    image: 'https://i.pravatar.cc/300',
    name: 'Cem Adrian',
  },
  {
    id: 5,
    image: 'https://i.pravatar.cc/300',
    name: 'Ezhel',
  },
  {
    id: 6,
    image: 'https://i.pravatar.cc/300',
    name: 'Melek Mosso',
  },
  {
    id: 7,
    image: 'https://i.pravatar.cc/300',
    name: 'Ceylan Ertem',
  },
  {
    id: 8,
    image: 'https://i.pravatar.cc/300',
    name: 'Emircan İğrek',
  },
  {
    id: 9,
    image: 'https://i.pravatar.cc/300',
    name: 'Bülent Ersoy',
  },
];

const Story = () => {
  return (
    <View style={styles.storyContainer}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        <View style={styles.story}>
          <Image
            style={styles.profile}
            source={{
              uri: 'https://i.pravatar.cc/300',
            }}
          />
          <View style={styles.plusContainer}>
            <Text style={styles.plusText}>+</Text>
          </View>
          <Text style={styles.title} numberOfLines={1}>
            Your story
          </Text>
        </View>
        {users.map((user, index) => (
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
    bottom: 30,
    right: 5,
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
