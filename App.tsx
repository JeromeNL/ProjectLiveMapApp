// App.tsx
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigator } from './src/navigation/BottomTabNavigator';
import { LoginStackNavigator } from './src/navigation/LoginStackNavigator';

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <NavigationContainer>
      {authenticated ? (
        <BottomTabNavigator setAuthenticated={setAuthenticated} />
      ) : (
        <LoginStackNavigator setAuthenticated={setAuthenticated} />
      )}
    </NavigationContainer>
  );
}
