// LoginStackNavigator.tsx
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../screens/login/LoginScreen'

const Stack = createStackNavigator()

export const LoginStackNavigator = ({ setAuthenticated }: any) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" options={{ headerShown: false }}>
                {(props) => (
                    <LoginScreen
                        {...props}
                        setAuthenticated={setAuthenticated}
                    />
                )}
            </Stack.Screen>
        </Stack.Navigator>
    )
}
