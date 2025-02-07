// loginscreen.tsx
import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { useDispatch } from 'react-redux'
import ResortDropdown from '../../components/ResortDropdown'
import { ToastManager } from '../../managers/ToastManager'
import { PhoenixAPI } from '../../network/PhoenixAPI'
import { authSlice } from '../../redux/reducers/authReducer'

function LoginScreen() {
    const [username, setUsername] = useState('')
    const dispatch = useDispatch()

    const handleLogin = async () => {
        try {
            const response =
                await PhoenixAPI.getInstance().AuthAPI.login(username)

            dispatch(
                authSlice.actions.login({
                    id: response.data.id,
                    username: response.data.name
                })
            )
        } catch (error) {
            ToastManager.showError(
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
            <ResortDropdown style={styles.dropdown} />
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
    },
    dropdown: {
        marginBottom: 10
    }
})

export default LoginScreen
