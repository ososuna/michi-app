/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-ionicons';
import { RandomScreen } from '../screens/RandomScreen';
import { FavoritesScreen } from '../screens/FavoritesScreen';
import { SearchScreen } from '../screens/SearchScreen';
import { colors } from '../theme/theme';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
    sceneContainerStyle={{ backgroundColor: 'white' }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color }) => {
        let iconName: string = '';
        switch ( route.name ) {
          case 'Search':
            iconName = 'search';
            break;
          case 'Random':
            iconName = 'shuffle';
            break;
          case 'Favorites':
            iconName = 'heart';
            break;
          default:
            break;
        }
        return <Icon name={ iconName } color={color} />;
      },
      tabBarActiveTintColor: colors.primary,
      headerShown: false,
    })}
  >
      <Tab.Screen name="Random" component={ RandomScreen } />
      <Tab.Screen name="Favorites" component={ FavoritesScreen } />
      <Tab.Screen name="Search" component={ SearchScreen } />
    </Tab.Navigator>
  );
};
