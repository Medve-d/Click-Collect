import React, { useState, useEffect } from 'react';
import { View, Text, Button, Picker, TextInput, StyleSheet, Alert } from 'react-native';
import supabase from '../supabase'; // Assurez-vous d'importer le fichier de configuration

const PizzaOrder = () => {
  const [pizzas, setPizzas] = useState([]);
  const [selectedPizza, setSelectedPizza] = useState('');
  const [quantity, setQuantity] = useState('1');
  const [customerName, setCustomerName] = useState('');

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const { data, error } = await supabase
          .from('pizzas')
          .select('*');

        if (error) {
          console.error('Error fetching pizzas', error);
        } else {
          setPizzas(data);
          if (data.length > 0) {
            setSelectedPizza(data[0].id.toString());
          }
        }
      } catch (error) {
        console.error('Unexpected error fetching pizzas', error);
      }
    };

    fetchPizzas();
  }, []);

  const handleOrder = () => {
    Alert.alert(`Commande passée par ${customerName} : ${quantity} pizza(s) ${selectedPizza}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Commander une Pizza</Text>
      
      <Text style={styles.label}>Nom du client</Text>
      <TextInput
        style={styles.input}
        value={customerName}
        onChangeText={setCustomerName}
      />

      <Text style={styles.label}>Sélectionner une pizza</Text>
      <Picker
        selectedValue={selectedPizza}
        onValueChange={(itemValue) => setSelectedPizza(itemValue)}
        style={styles.picker}
      >
        {pizzas.map((pizza) => (
          <Picker.Item key={pizza.id} label={pizza.name} value={pizza.id.toString()} />
        ))}
      </Picker>

      <Text style={styles.label}>Quantité</Text>
      <TextInput
        style={styles.input}
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
      />

      <Button title="Passer la commande" onPress={handleOrder} />
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
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
});

export default PizzaOrder;
