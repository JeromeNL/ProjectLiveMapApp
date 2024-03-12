import React, { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { PhoenixAPI } from '../../network/PhoenixAPI'

interface LoginScreenProps {
    setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
}

const LoginScreen: React.FC<LoginScreenProps> = ({ setAuthenticated }) => {
    const [username, setUsername] = useState('')

    const handleLogin = async () => {
        PhoenixAPI
        try {
            const response = await fetch(
                `http://localhost:5136/users/${username}`
            )
            const data = await response.json()

            if (data.exists) {
                setAuthenticated(true)
            } else {
                // Show an error message when the username does not exist
            }
        } catch (error) {
            // Handle API call error
            console.error('Error fetching data:', error)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login Screen</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <Button title="Login" onPress={handleLogin} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        marginBottom: 16
    },
    input: {
        width: '80%',
        padding: 10,
        marginBottom: 16,
        borderWidth: 1,
        borderRadius: 8
    }
})

export default LoginScreen
