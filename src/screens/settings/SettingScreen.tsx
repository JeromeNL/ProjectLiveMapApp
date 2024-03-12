import React from 'react'
import { Button, Text, View } from 'react-native'

const SettingScreen = ({ navigation }: any) => {
  return (
    <View>
      <Text>SettingScreen</Text>
      <Button title="Go to Notification" onPress={() => navigation.push('Notification')} />
      <Button title="Create Notification" onPress={() => navigation.push('NotificationCreate')} />
    </View>
  )
}

export default SettingScreen
