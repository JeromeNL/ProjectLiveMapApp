import {
    IconHome,
    IconUser
} from '@tabler/icons-react-native'

import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeStackNavigator } from './HomeStackNavigator'
import { SettingStackNavigator } from './SettingStackNavigator'


const BottomTab = createBottomTabNavigator()

export const BottomTabNavigator = () => {
    return (
        <BottomTab.Navigator screenOptions={{ headerShown: false }}>
            <BottomTab.Screen 
                name="HomeStack"
                component={HomeStackNavigator} 
                options={{
                    title: 'Home',
                    tabBarIcon: ({color}) => <IconHome color={color}/>
                }}
            />
            <BottomTab.Screen
                name="SettingsStack"
                component={SettingStackNavigator}
                options={{
                    title: 'Settings',
                    tabBarIcon: ({color}) => <IconUser color={color}/>
                }}
            />
        </BottomTab.Navigator>
    )
}
