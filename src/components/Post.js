import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import userData from '../data/userData.json';

const Post = () => {
  return (
    <View>
      {userData.map((user, index) => (
        <View style={styles.postContainer} key={index}>
          <View style={styles.postHeader}>
            <View style={styles.postUser}>
              <Image
                style={styles.userImage}
                source={{
                  uri: user.image,
                }}
              />
              <Text style={styles.userName}>{user.name}</Text>
            </View>
            <MIcon name="more-vert" size={20} color="#000" />
          </View>
          <Image
            style={styles.postImage}
            source={{
              uri: user.postImage,
            }}
          />
          <View>
            <View style={styles.postActions}>
              <View style={styles.leftActions}>
                <FAIcon
                  name="heart-o"
                  size={25}
                  color="#000"
                  style={styles.icons}
                />
                <FAIcon
                  name="comment-o"
                  size={25}
                  color="#000"
                  style={styles.icons}
                />
                <FAIcon
                  name="send-o"
                  size={25}
                  color="#000"
                  style={styles.icons}
                />
              </View>
              <FAIcon name="bookmark-o" size={25} color="#000" />
            </View>
            <View style={styles.postLike}>
              <Image
                style={styles.postLikeImage}
                source={{
                  uri: 'https://i.pravatar.cc/300',
                }}
              />
              <Image
                style={styles.postLikeImageLast}
                source={{
                  uri: 'https://i.pravatar.cc/300',
                }}
              />
              <Text style={styles.postLikeText}>{user.postLiked}</Text>
            </View>
            <View style={styles.postDescriptions}>
              <Text>
                <Text style={styles.userName}>{user.name} </Text>
                {user.imageDescription}
                <Text style={styles.postComments}> more</Text>
              </Text>
              <Text style={styles.postComments}>{user.postComment}</Text>
            </View>
            <View style={styles.postNewComment}>
              <Image
                style={styles.postNewCommentImage}
                source={{
                  uri: 'https://i.pravatar.cc/300?img=26',
                }}
              />
              <Text style={styles.postComments}>Add a comment...</Text>
            </View>
            <Text style={styles.postTime}>{user.postDate}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    width: '100%',
    marginBottom: 20,
  },
  postHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  postUser: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 35,
    height: 35,
    borderRadius: 35,
    marginRight: 10,
    borderColor: '#bcbcbc',
    borderWidth: 1,
  },
  userName: {
    fontSize: 14,
    fontWeight: '700',
  },
  postImage: {
    width: '100%',
    height: 300,
  },
  postActions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  leftActions: {
    display: 'flex',
    flexDirection: 'row',
  },
  icons: {
    marginRight: 10,
  },
  postLike: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  postLikeImage: {
    width: 20,
    height: 20,
    borderRadius: 20,
    borderColor: '#bcbcbc',
    borderWidth: 1,
  },
  postLikeImageLast: {
    width: 20,
    height: 20,
    borderRadius: 20,
    borderColor: '#bcbcbc',
    borderWidth: 1,
    marginLeft: -8,
  },
  postLikeText: {
    fontSize: 14,
    fontWeight: '700',
    paddingVertical: 5,
    marginLeft: 8,
  },
  postDescriptions: {
    fontSize: 14,
    fontWeight: '500',
    paddingHorizontal: 8,
  },
  postComments: {
    fontSize: 14,
    fontWeight: '500',
    color: '#999999',
    paddingVertical: 5,
  },
  postNewComment: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 8,
  },
  postNewCommentImage: {
    width: 30,
    height: 30,
    borderRadius: 30,
    marginRight: 10,
    borderColor: '#bcbcbc',
    borderWidth: 1,
  },
  postTime: {
    fontSize: 11,
    fontWeight: '500',
    color: '#999999',
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
});

export default Post;
