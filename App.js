import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ShoppingCart from './ShoppingCart';
import { Provider } from 'react-redux';
import store from './store';
import { NavigationContainer } from '@react-navigation/native';
import LeftDrawer from './containers/LeftDrawer';
//import LeftDrawer from './containers/LeftDrawer';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <LeftDrawer />
        </NavigationContainer>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
