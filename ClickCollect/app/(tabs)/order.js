import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import PizzaOrder from '../../components/orders';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <PizzaOrder />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
