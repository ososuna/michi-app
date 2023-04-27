import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from './Tabs';
import { WelcomeScreen } from '../screens/WelcomeScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={ WelcomeScreen } />
      <Stack.Screen name="Tabs" component={ Tabs } />
    </Stack.Navigator>
  );
};
