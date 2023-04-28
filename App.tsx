import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigation/Stack';
import { CatProvider } from './src/context/CatContext';

const AppState = ({ children }: { children: JSX.Element } ) => {
  return (
  <CatProvider>
    { children }
  </CatProvider>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <StackNavigator />
      </AppState>
    </NavigationContainer>
  );
};

export default App;
