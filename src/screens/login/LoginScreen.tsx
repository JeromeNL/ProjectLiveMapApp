import React, { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'

interface LoginScreenProps {
    setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
}

const LoginScreen: React.FC<LoginScreenProps> = ({ setAuthenticated }) => {
    const [username, setUsername] = useState('')

    const handleLogin = () => {
        // Perform authentication logic here (change to api call)
        if (username.trim() !== '') {
            setAuthenticated(true)
        } else {
            // Show an error message
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
