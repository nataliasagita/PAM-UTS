// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Beranda from '../screens/Beranda';
import Pesanan from '../screens/pesanan';
import Pembatalan from '../screens/pembatalan';
import Lainnya from '../screens/lainnya';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Beranda" component={Tabs} options={{headerShown:false}}/>
        <Stack.Screen name="Pesanan" component={Pesanan} />
        <Stack.Screen name="Pembatalan" component={Pembatalan} />
        <Stack.Screen name="Lainnya" component={Lainnya} />
     </Stack.Navigator> 
    </NavigationContainer>
  );
}

export default Navigation;

export function Tabs() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Beranda} />
        <Tab.Screen name="Pesanan Saya" component={Pesanan} />
        <Tab.Screen name="Pembatalan" component={Pembatalan} />
        <Tab.Screen name="Lainnya" component={Lainnya} />
      </Tab.Navigator>
  );
}