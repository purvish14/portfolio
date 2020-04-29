import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';

import Home from './components/Home';

const Stack = createStackNavigator();

export default function App() {

  const DefaultTheme = {
    dark: false,
    colors: {
      primary: '#5F2ED8',
      onPrimary: '#FFFFFF',
      primaryVariant: '#9265FB',
      onPrimaryVariant: '#FFFFFF',
      secondary: '#FC900D',
      onSecondary: '#FFFFFF',
      primaryCard: '#FF9A00',
      primaryCardVariant: '#F38401',
      onPrimaryCard: '#FFFFFF',
      secondaryCard: '#F8F7FC',
      secondaryCardVariant: '#F2F1F6',
      onSecondaryCard: '#2C2C2C'
    },
  };

  let [fontsLoaded] = useFonts({
    'OpenSans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'OpenSans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <AppLoading />
    );
  }

  return (
    <NavigationContainer theme={DefaultTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}