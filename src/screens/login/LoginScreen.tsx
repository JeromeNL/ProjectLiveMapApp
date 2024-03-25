// loginscreen.tsx
import React, { useState } from 'react'
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { PhoenixAPI } from '../../network/PhoenixAPI'
import { login } from '../../redux/reducers/authReducer'

const LoginScreen: React.FC = () => {
    const [username, setUsername] = useState('')
    const dispatch = useDispatch()

    const handleLogin = async () => {
        try {
            await PhoenixAPI.getInstance().AuthAPI.login(username)
            dispatch(login(username))
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
