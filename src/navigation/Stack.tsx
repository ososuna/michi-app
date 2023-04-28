import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from './Tabs';
import { WelcomeScreen } from '../screens/WelcomeScreen';
import { CatScreen } from '../screens/CatScreen';
import { CatImage } from '../interfaces/cat';

export type RootStackParams = {
  Welcome: undefined;
  Tabs: undefined;
  Cat: CatImage;
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
