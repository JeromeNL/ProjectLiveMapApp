import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { IconHome, IconUser } from '@tabler/icons-react-native'
import React from 'react'
import { Colors } from '../configuration/styles/Colors'
import { HomeStackNavigator } from './HomeStackNavigator'
import { SettingStackNavigator } from './SettingStackNavigator'

const BottomTab = createBottomTabNavigator()

export const BottomTabNavigator = () => {
    return (
        <BottomTab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Colors.primary
            }}
        >
            <BottomTab.Screen
                name="HomeStack"
                component={HomeStackNavigator}
                options={{
                    title: 'Thuis',
                    tabBarIcon: ({ color }) => <IconHome color={color} />
                }}
            />
            <BottomTab.Screen
                name="SettingsStack"
                component={SettingStackNavigator}
                options={{
                    title: 'Account',
                    tabBarIcon: ({ color }) => <IconUser color={color} />
                }}
            />
        </BottomTab.Navigator>
    )
}
