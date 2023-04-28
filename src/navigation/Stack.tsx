import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from './Tabs';
import { WelcomeScreen } from '../screens/WelcomeScreen';
import { CatScreen } from '../screens/CatScreen';
import { Cat } from '../interfaces/cat';

export type RootStackParams = {
  Welcome: undefined;
  Tabs: undefined;
  Cat: Cat;
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={ WelcomeScreen } />
      <Stack.Screen name="Tabs" component={ Tabs } />
      <Stack.Screen name="Cat" component={ CatScreen } />
    </Stack.Navigator>
  );
};
