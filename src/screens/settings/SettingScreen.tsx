import React from 'react'
import { Button, View } from 'react-native'

const SettingScreen = ({ navigation }: any) => {
    return (
        <View>
            <Button
                title="Notificaties"
                onPress={() => navigation.push('Notification')}
            />
        </View>
    )
}

export default SettingScreen
