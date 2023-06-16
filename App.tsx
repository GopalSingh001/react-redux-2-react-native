 // App.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
 
import store from './components/store';
 import AddToCartScreen from './components/AddToCartScreen';
 import EditCartScreen from './components/EditCartScreen';
 

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="AddToCart"  component={AddToCartScreen} />
          <Stack.Screen name="EditCart" component={EditCartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
