import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import reducerOrder from './store/reducers/reducerOrder';
import reducerPizzaList from './store/reducers/reducerPizzaList';
import Index from './components/Main/Index';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <StatusBar style="auto" />
          <Index />
        </ScrollView>
      </View>
    </Provider>
  );
}

const rootReducer = combineReducers({
  pizzaList: reducerPizzaList,
  orderInfo: reducerOrder,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
