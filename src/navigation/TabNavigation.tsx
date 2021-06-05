import * as React from 'react';
import * as RN from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RFValue } from 'react-native-responsive-fontsize';

import Home from '../screens/tab/Home';
import Shop from '../screens/tab/Shop';
import Account from '../screens/tab/Account';

import {} from '../styles/colorPallete';

import {
  HomeTabIcon,
  ShopTabIcon,
  AccountTabIcon,
} from '../svg/BottomTabIcons';
import { HomeStack } from './stack/HomeStack';
import { ShopStack } from './stack/AccountStack';
import { AccountStack } from './stack/ShopStack';
import { AuthNavigation } from './AuthNavigation';

const BottomTab = createBottomTabNavigator();

function tabIcons(label, isFocused) {
  if (label == 'Home') {
    return <HomeTabIcon fill={isFocused ? '#000000' : '#6A6A6A'} />;
  }
  if (label == 'Shop') {
    return <ShopTabIcon fill={isFocused ? '#000000' : '#6A6A6A'} />;
  }
  if (label == 'Account') {
    return <AccountTabIcon fill={isFocused ? '#000000' : '#6A6A6A'} />;
  }
}

function MyTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <RN.View style={styles.barStyle}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <RN.TouchableOpacity
            key={label}
            accessibilityRole='button'
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.labelWrapper]}
          >
            {tabIcons(label, isFocused)}
            <RN.Text
              style={[
                styles.label,
                { color: isFocused ? '#000000' : '#6A6A6A' },
              ]}
            >
              {label}
            </RN.Text>
          </RN.TouchableOpacity>
        );
      })}
    </RN.View>
  );
}

// ...

export function BottomTabNavigation() {
  return (
    <BottomTab.Navigator
      initialRouteName={'Home'}
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <BottomTab.Screen name={'Home'} component={HomeStack} />
      <BottomTab.Screen name={'Shop'} component={ShopStack} />
      <BottomTab.Screen name={'Account'} component={AccountStack} />
    </BottomTab.Navigator>
  );
}

const styles = RN.StyleSheet.create({
  barStyle: {
    backgroundColor: '#FFFFFF',
    elevation: 3,
    margin: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  labelWrapper: {
    alignItems: 'center',
    flex: 1,
    paddingVertical: 5,
  },
  label: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 8,
    color: '#6A6A6A',
    paddingTop: 5,
  },
});
