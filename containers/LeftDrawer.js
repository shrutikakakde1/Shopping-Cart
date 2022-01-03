import * as React from 'react';
import { View, Image,TouchableOpacity,PermissionsAndroid } from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';

const Drawer = createDrawerNavigator();

function LeftDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ drawerLabel: 'Home' }}
      /> 

      <Drawer.Screen
        name="Cart"
        component={CartScreen}
        options={{ drawerLabel: 'Cart' }}
      />    

    </Drawer.Navigator>
  );
}

export default LeftDrawer;