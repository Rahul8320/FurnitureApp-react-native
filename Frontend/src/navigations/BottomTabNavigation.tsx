import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Profile from '../screens/Profile';
import {COLORS, SIZES} from '../../constant/theme';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          height: 70,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => {
            return (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={SIZES.xLarge}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => {
            return (
              <Ionicons
                name={'search-sharp'}
                size={SIZES.xLarge}
                color={focused ? COLORS.primary : COLORS.gray}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => {
            return (
              <Ionicons
                name={focused ? 'person' : 'person-outline'}
                size={SIZES.xLarge}
                color={focused ? COLORS.primary : COLORS.gray}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
