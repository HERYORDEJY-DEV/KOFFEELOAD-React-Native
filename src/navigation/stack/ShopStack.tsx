import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { BottomTabNavigation } from '../TabNavigation';
import Cart from '../../screens/stack/Cart';
import CoffeeInfo from '../../screens/stack/CoffeeInfo';
import Home from '../../screens/tab/Home';
import Account from '../../screens/tab/Account';

const StackNavigator = createStackNavigator();

export function AccountStack() {
  return (
    <StackNavigator.Navigator initialRouteName={'Account'} headerMode={null}>
      <StackNavigator.Screen name={'Account'} component={Account} />
      <StackNavigator.Screen name={'Cart'} component={Cart} />
      <StackNavigator.Screen name={'CoffeeInfo'} component={CoffeeInfo} />
    </StackNavigator.Navigator>
  );
}
