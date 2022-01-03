import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BooksScreen from "./containers/BooksScreen";
import ElectronicsScreen from "./containers/ElectronicsScreen";
import HomeScreen from "./containers/HomeScreen";
import ShoppingCartIcon from './containers/ShoppingCartIcon'
import CartScreen from './containers/CartScreen'

const Stack = createNativeStackNavigator();

const ShoppingCart = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Books" component={BooksScreen} />
        <Stack.Screen name="Electronics" component={ElectronicsScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ShoppingCart;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});