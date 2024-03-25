import React from 'react'
import { Button, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/reducers/authReducer'
import { Colors } from '../../configuration/styles/Colors'

const SettingScreen = ({ navigation }: any) => {
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <View style={styles.container}>
            <View style={styles.centeredContainer}>
                <Button
                    title="Ga naar Meldingen"
                    onPress={() => navigation.push('Notification')}
                />
            </View>
            <View style={styles.bottomContainer}>
                <TouchableOpacity onPress={handleLogout}>
                    <Text style={styles.logoutText}>Log uit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20
    },
    centeredContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomContainer: {
        marginBottom: 20
    },
    logoutText: {
        textDecorationLine: 'underline',
        color: Colors.blue,
        fontSize: 16
    }
})

export default SettingScreen
