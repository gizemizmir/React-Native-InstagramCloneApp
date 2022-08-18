import React from 'react';
import {View, StyleSheet, Image, ScrollView, Text} from 'react-native';

const Story = () => {
    return (
        <View style={styles.storyContainer}>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}
            >
                <View style={styles.story}>
                    <Image style={styles.avatar} 
                    source={{
                        uri: 'https://i.pravatar.cc/300'
                    }}
                    />
                    <View style={styles.plusContainer}>
                        <Text style={styles.plusText}>+</Text>
                    </View>
                    <Text style={styles.title} numberOfLines={1}>
                        Your story
                    </Text>
                </View>
                <View style={styles.story}>
                    <Image style={styles.avatar} 
                    source={{
                        uri: 'https://i.pravatar.cc/300'
                    }}
                    />
                    <Text style={styles.title} numberOfLines={1}>
                        Gizem İzmir
                    </Text>
                </View>
                <View style={styles.story}>
                    <Image style={styles.avatar} 
                    source={{
                        uri: 'https://i.pravatar.cc/300'
                    }}
                    />
                    <Text style={styles.title} numberOfLines={1}>
                        Gizem İzmir
                    </Text>
                </View>
                <View style={styles.story}>
                    <Image style={styles.avatar} 
                    source={{
                        uri: 'https://i.pravatar.cc/300'
                    }}
                    />
                    <Text style={styles.title} numberOfLines={1}>
                        Gizem İzmir
                    </Text>
                </View>
                <View style={styles.story}>
                    <Image style={styles.avatar} 
                    source={{
                        uri: 'https://i.pravatar.cc/300'
                    }}
                    />
                    <Text style={styles.title} numberOfLines={1}>
                        Gizem İzmir
                    </Text>
                </View>
                <View style={styles.story}>
                    <Image style={styles.avatar} 
                    source={{
                        uri: 'https://i.pravatar.cc/300'
                    }}
                    />
                    <Text style={styles.title} numberOfLines={1}>
                        Gizem İzmir
                    </Text>
                </View>
                <View style={styles.story}>
                    <Image style={styles.avatar} 
                    source={{
                        uri: 'https://i.pravatar.cc/300'
                    }}
                    />
                    <Text style={styles.title} numberOfLines={1}>
                        Gizem İzmir
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    storyContainer: {
        width: '100%',
        height: 100,
        display: 'flex',
        justifyContent: 'center',
        paddingHorizontal: 15,
        marginBottom: 5,
        borderBottomColor: '#bcbcbc',
        borderBottomWidth: 1,
    },
    story: {
        width: 70,
        marginRight: 10,
        position: 'relative',
    },
    avatar: {
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
        textAlign: 'center',
    },
});

export default Story;