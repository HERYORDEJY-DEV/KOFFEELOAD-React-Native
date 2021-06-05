import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Cart from '../../screens/stack/Cart';
import CoffeeInfo from '../../screens/stack/CoffeeInfo';
import Home from '../../screens/tab/Home';

const StackNavigator = createStackNavigator();

export function HomeStack() {
  return (
    <StackNavigator.Navigator initialRouteName={'Home'} headerMode={null}>
      <StackNavigator.Screen name={'Home'} component={Home} />
      <StackNavigator.Screen name={'Cart'} component={Cart} />
      <StackNavigator.Screen name={'CoffeeInfo'} component={CoffeeInfo} />
    </StackNavigator.Navigator>
  );
}
