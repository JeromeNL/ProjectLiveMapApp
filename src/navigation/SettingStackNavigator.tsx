import { createStackNavigator } from '@react-navigation/stack'
import SettingScreen from '../screens/settings/SettingScreen'
import ReportsListScreen from '../screens/reports/ReportsListScreen'
import TransactionsListScreen from '../screens/points/TransactionsListScreen'


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
                name="ReportsList"
                component={ReportsListScreen}
                options={{
                    title: 'Meldingen'
                }}
            />
            <Stack.Screen
                name="Transaction"
                component={TransactionsListScreen}
                options={{
                    title: 'Spaarpunten'
                }}
            />
        </Stack.Navigator>
    )
}
