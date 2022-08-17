import React from "react";
import {View, StyleSheet, Text} from "react-native";

const Header = () => {
    return (
        <View style={styles.topHeader}>
            <Text> Header </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    topHeader: {
        width: "100%",
        height: 50,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
    },
});

export default Header;