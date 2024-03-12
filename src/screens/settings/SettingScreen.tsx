import React from 'react'
import { Button, Text, View, StyleSheet } from 'react-native'
import { CommonActions } from '@react-navigation/native'

const SettingScreen = ({ navigation }: any) => {
    return (
        <View>
            <Text>SettingScreen</Text>
            <Button
                title="Go to Notification"
                onPress={() => navigation.push('Notification')}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default SettingScreen
