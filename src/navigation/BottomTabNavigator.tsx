import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeStackNavigator } from './HomeStackNavigator'
import { SettingStackNavigator } from './SettingStackNavigator'
import Ionicons from '@expo/vector-icons/build/Ionicons'

const BottomTab = createBottomTabNavigator()

export const BottomTabNavigator = () => {
    return (
        <BottomTab.Navigator screenOptions={{ headerShown: false }}>
            <BottomTab.Screen 
                name="HomeStack"
                component={HomeStackNavigator} 
                options={{
                    title: 'Home',
                    tabBarIcon: ({color}) => <Ionicons name="home" size={32} color={color} />
                }}
            />
            <BottomTab.Screen
                name="SettingsStack"
                component={SettingStackNavigator}
                options={{
                    title: 'Settings',
                    tabBarIcon: ({color}) => <Ionicons name="cog" size={32} color={color} />
                }}
            />
        </BottomTab.Navigator>
    )
}
