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
          .select('pizza_id, name ')

        if (error) {
          console.error('Erreur lors de la récupération des commandes:', error);
        } else {
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
      {orders.map((order) => (
        <View key={order.id} style={styles.orderItem}>
          <Text>Nom de la Pizza : {order.name}</Text>
          <Text>ID de la Pizza : {order.pizza_id}</Text>
        </View>
      ))}
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
  orderItem: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default OrderList;
