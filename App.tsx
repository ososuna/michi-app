import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ToastProvider } from 'react-native-toast-notifications';
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
        <ToastProvider>
          <StackNavigator />
        </ToastProvider>
      </AppState>
    </NavigationContainer>
  );
};

export default App;
