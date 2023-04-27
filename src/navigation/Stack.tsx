import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { WelcomePage } from '../screens/WelcomePage';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={ WelcomePage } />
    </Stack.Navigator>
  );
};
