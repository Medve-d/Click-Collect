import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://criicbfqcvgbrrqbwyow.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default function App() {
  
  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue sur l'App de Nikolaï, Jordan, Massi</Text>
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


  

