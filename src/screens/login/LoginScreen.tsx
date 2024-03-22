import React, { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native'
import { PhoenixAPI } from '../../network/PhoenixAPI'

interface LoginScreenProps {
    setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
}

const LoginScreen: React.FC<LoginScreenProps> = ({ setAuthenticated }) => {
    const [username, setUsername] = useState('')

    const handleLogin = async () => {
        try {
            const response =
                await PhoenixAPI.getInstance().AuthAPI.login(username)
            setAuthenticated(true)
        } catch (error) {
            Alert.alert(
                'Login Mislukt',
                'Ongeldige gebruikersnaam. Probeer het opnieuw.'
            )
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login Scherm</Text>
            <TextInput
                style={styles.input}
                placeholder="Gebruikersnaam"
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
