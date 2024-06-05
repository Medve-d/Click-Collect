import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function App() {
  
  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue sur l'App de Nikolaï</Text>
      <StatusBar style="auto" />
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: '26',
    textDecorationLine: 'underline',
  }
});


  

