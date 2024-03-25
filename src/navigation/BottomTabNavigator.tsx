import {
    IconHome2,
    IconAdjustmentsCog
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
                    tabBarIcon: ({color}) => <IconHome2 color={color}/>
                }}
            />
            <BottomTab.Screen
                name="SettingsStack"
                component={SettingStackNavigator}
                options={{
                    title: 'Settings',
                    tabBarIcon: ({color}) => <IconAdjustmentsCog color={color}/>
                }}
            />
        </BottomTab.Navigator>
    )
}
