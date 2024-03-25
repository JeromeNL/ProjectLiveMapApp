import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import NotificationScreen from '../screens/notifications/NotificationScreen'
import SettingScreen from '../screens/settings/SettingScreen'

const Stack = createStackNavigator()

export const SettingStackNavigator = ({ route }: any) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Instellingen" component={SettingScreen} />
            <Stack.Screen
                name="Notification"
                component={NotificationScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}
