import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../screens/login/LoginScreen'

const Stack = createStackNavigator()

const LoginStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                options={{ headerShown: false }}
                component={LoginScreen}
            />
        </Stack.Navigator>
    )
}

export default LoginStackNavigator
