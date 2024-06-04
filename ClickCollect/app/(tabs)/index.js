import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from "react-native";


export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text>Les meilleurs Pizza sont chez Massi ! Commandez via notre application</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
