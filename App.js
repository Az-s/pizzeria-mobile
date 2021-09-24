import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DishList from './components/Dishlist/DishList';
import OrderBasket from './components/OrderBasket/OrderBasket';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.title}>
        <Text style={styles.text}>Pizzeria</Text>
      </View>
      <Text>Choice your favorite pizza:</Text>
      <DishList />
      <OrderBasket />
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
    textAlign: 'center',
    marginVertical: 20,
    backgroundColor: '#497ebf',
    width: '100%',
    padding: 10,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  }
});
