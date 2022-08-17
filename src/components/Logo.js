import React from "react";
import {View, StyleSheet, Image} from "react-native";

const Logo = () => {
    return (
        <View style={styles.imageContainer}>
            <Image 
                source={require("../assets/logo.png")} 
            />
        </View> 
    )
};

const styles = StyleSheet.create({
    imageContainer: {
        width: 100,
        height: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default Logo;