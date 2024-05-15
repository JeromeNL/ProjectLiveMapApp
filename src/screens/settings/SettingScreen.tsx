import React from 'react'
import { Button, StyleSheet, View } from 'react-native'
import { useDispatch } from 'react-redux'
import ResortDropdown from '../../components/ResortDropdown'
import { authSlice } from '../../redux/reducers/authReducer'

const SettingScreen = ({ navigation }: any) => {
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(authSlice.actions.logout())
    }

    return (
        <View style={styles.container}>
            <View style={styles.centeredContainer}>
                <ResortDropdown />
                <Button
                    title="Notificaties"
                    onPress={() => navigation.push('Notification')}
                />
                <View style={styles.spaceBetweenContainer} />
                <Button
                    title="Meldingen"
                    onPress={() => navigation.push('ReportsList')}
                />
                <View style={styles.spaceBetweenContainer} />
                <Button
                    title="Transacties"
                    onPress={() => navigation.push('Transaction')}
                />
            </View>
            <View style={styles.bottomContainer}>
                <Button title="Log uit" onPress={handleLogout} />
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
        alignItems: 'center',
    },
    spaceBetweenContainer: {
        height: 20,
    },
    bottomContainer: {
        marginBottom: 20
    }
})

export default SettingScreen
