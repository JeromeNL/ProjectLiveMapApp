import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeStackNavigator } from './HomeStackNavigator'
import { SettingStackNavigator } from './SettingStackNavigator'

const BottomTab = createBottomTabNavigator()

export const BottomTabNavigator = () => {
    return (
        <BottomTab.Navigator screenOptions={{ headerShown: false }}>
            <BottomTab.Screen name="HomeStack" component={HomeStackNavigator} />
            <BottomTab.Screen
                name="SettingsStack"
                component={SettingStackNavigator}
            />
        </BottomTab.Navigator>
    )
}
