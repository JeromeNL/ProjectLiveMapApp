import { createStackNavigator } from '@react-navigation/stack'
import NotificationScreen from '../screens/notifications/NotificationScreen'
import SettingScreen from '../screens/settings/SettingScreen'
import ReportsListScreen from '../screens/reports/ReportsListScreen'

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
            <Stack.Screen
                name="ReportsList"
                component={ReportsListScreen}
                options={{
                    title: 'Meldingen'
                }}
            />
        </Stack.Navigator>
    )
}
