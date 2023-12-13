import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigation from './navigations/BottomTabNavigation';
import Cart from './screens/Cart';
import ProductDetails from './screens/ProductDetails';
import Toast from 'react-native-toast-message';
import NewRivals from './screens/NewRivals';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Bottom Navigation"
            component={BottomTabNavigation}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetails}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ProductsList"
            component={NewRivals}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  );
};

export default App;
