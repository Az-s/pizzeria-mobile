import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import DishList from '../Dishlist/DishList';
import OrderBasket from '../OrderBasket/OrderBasket';
import { addDish, removeDish } from '../../store/actions/OrderActions';
import { fetchDishMenu } from '../../store/actions/PizzaListactions';

const Index = () => {
  const dispatch = useDispatch();

  const allDishes = useSelector(state => state.pizzaList.dishes);
  const orderCart = useSelector(state => state.orderInfo.items);

  useEffect(() => {
    dispatch(fetchDishMenu());
  }, [dispatch]);


  const onClickAdd = (id) => {
    dispatch(addDish(id));
  };

  const onClickRemove = (id) => {
    dispatch(removeDish(id));
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.title}>
        <Text style={styles.text}>Pizzeria</Text>
      </View>
      <Text>Choice your favorite pizza:</Text>
      {allDishes.map(dish => (
        <DishList
          key={dish.id}
          name={dish.pizza}
          price={dish.price}
          img={dish.img}
          add={() => onClickAdd(dish.id)}
        />
      ))}
      <OrderBasket
        orderCart={orderCart}
        dishes={allDishes}
        remove={onClickRemove}
      />
    </View>
  )
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
    minWidth: '100%',
    padding: 10,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  }
});

export default Index;
