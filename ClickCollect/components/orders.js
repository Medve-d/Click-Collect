import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import supabase from '../supabase'; 

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data, error } = await supabase
          .from('orders')
          .select('*');

        if (error) {
          console.error('Erreur lors de la récupération des commandes:', error);
        } else {
          console.log('Orders récupérées:', data);
          setOrders(data);
        }
      } catch (error) {
        console.error('Erreur inattendue lors de la récupération des commandes:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste des Commandes</Text>
      
      <View>
        {orders.map(order => (
          <Text key={order.id}>
            {`Name: ${order.name}`}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default OrderList;