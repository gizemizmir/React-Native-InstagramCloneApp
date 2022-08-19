import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';

const Header = () => {
  return (
    <View>
      <View style={styles.postContainer}>
        <View style={styles.postHeader}>
          <View style={styles.postUser}>
            <Image
              style={styles.userImage}
              source={{
                uri: 'https://i.pravatar.cc/300',
              }}
            />
            <Text style={styles.userName}>Gizem İzmir </Text>
          </View>
          <MIcon name="more-vert" size={20} color="#000" />
        </View>
        <Image
          style={styles.postImage}
          source={{
            uri: 'https://picsum.photos/300/300',
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
          <Text style={styles.postLike}>23 kişi beğendi</Text>
          <View style={styles.postDescriptions}>
            <Text>
              <Text style={styles.userName}>Gizem İzmir </Text>Lorem Ipsum is
              simply dummy text of the printing and typesetting industry...{' '}
              <Text style={styles.postComments}>devamı</Text>
            </Text>
            <Text style={styles.postComments}>20 yorumun tümünü gör</Text>
          </View>
          <View style={styles.postNewComment}>
            <Image
              style={styles.postNewCommentImage}
              source={{
                uri: 'https://picsum.photos/300/300',
              }}
            />
            <Text style={styles.postComments}>Yorum ekle...</Text>
          </View>
          <Text style={styles.postTime}>3 saat önce</Text>
        </View>
      </View>
      <View style={styles.postContainer}>
        <View style={styles.postHeader}>
          <View style={styles.postUser}>
            <Image
              style={styles.userImage}
              source={{
                uri: 'https://i.pravatar.cc/300',
              }}
            />
            <Text style={styles.userName}>Gizem İzmir </Text>
          </View>
          <MIcon name="more-vert" size={20} color="#000" />
        </View>
        <Image
          style={styles.postImage}
          source={{
            uri: 'https://picsum.photos/310/310',
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
          <Text style={styles.postLike}>23 kişi beğendi</Text>
          <View style={styles.postDescriptions}>
            <Text>
              <Text style={styles.userName}>Gizem İzmir </Text>Lorem Ipsum is
              simply dummy text of the printing and typesetting industry...{' '}
              <Text style={styles.postComments}>devamı</Text>
            </Text>
            <Text style={styles.postComments}>20 yorumun tümünü gör</Text>
          </View>
          <View style={styles.postNewComment}>
            <Image
              style={styles.postNewCommentImage}
              source={{
                uri: 'https://picsum.photos/300/300',
              }}
            />
            <Text style={styles.postComments}>Yorum ekle...</Text>
          </View>
          <Text style={styles.postTime}>3 saat önce</Text>
        </View>
      </View>
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
    fontSize: 14,
    fontWeight: '700',
    paddingHorizontal: 8,
    paddingVertical: 5,
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

export default Header;
