import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from "react-native";
import PizzaOrder from '../../components/orders';


export default function OrderScreen() {
    return (
        <View style={styles.container}>
            <PizzaOrder />
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
