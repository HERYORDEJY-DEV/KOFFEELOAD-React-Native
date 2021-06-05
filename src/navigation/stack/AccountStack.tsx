import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Cart from '../../screens/stack/Cart';
import CoffeeInfo from '../../screens/stack/CoffeeInfo';
import Shop from '../../screens/tab/Shop';

const StackNavigator = createStackNavigator();

export function ShopStack() {
  return (
    <StackNavigator.Navigator initialRouteName={'Shop'} headerMode={null}>
      <StackNavigator.Screen name={'Shop'} component={Shop} />
      <StackNavigator.Screen name={'Cart'} component={Cart} />
      <StackNavigator.Screen name={'CoffeeInfo'} component={CoffeeInfo} />
    </StackNavigator.Navigator>
  );
}
