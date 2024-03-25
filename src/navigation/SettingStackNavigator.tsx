import { createStackNavigator } from '@react-navigation/stack'
import NotificationScreen from '../screens/notifications/NotificationScreen'
import SettingScreen from '../screens/settings/SettingScreen'

const Stack = createStackNavigator()

export const SettingStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Settings"
                component={SettingScreen}
                options={{
                    title: 'Account'
                }}
            />
            <Stack.Screen
                name="Notification"
                component={NotificationScreen}
                options={{
                    title: 'Notificaties'
                }}
            />
        </Stack.Navigator>
    )
}
