import React, { useState, useEffect } from 'react'
import { Button, StyleSheet, View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { authSlice } from '../../redux/reducers/authReducer'
import { RootState } from '../../redux/store'
import { PhoenixAPI } from '../../network/PhoenixAPI'
import { Colors } from '../../configuration/styles/Colors'
import { ToastManager } from '../../managers/ToastManager'

const SettingScreen = ({ navigation }: any) => {
    const dispatch = useDispatch()
    const userId = useSelector((state: RootState) => state.auth.id)
    const [points, setPoints] = useState(0)

    useEffect(() => {
        if (userId != null) {
            PhoenixAPI.getInstance().PointsAPI.getTotalPoints(userId)
                .then((response) => {
                    setPoints(response.data)
                })
                .catch((error) => {
                    console.error('Failed to fetch points:', error)
                    ToastManager.showError(
                        'Fout bij ophalen', 'Kan aantal punten niet laden'
                    )
                })
        }
    }, [userId])

    const handleLogout = () => {
        dispatch(authSlice.actions.logout())
    }

    return (
        <View style={styles.container}>
            <View style={styles.centeredContainer}>
                <Text style={styles.pointsDisplay}>{points}</Text>
                <Text style={styles.pointsLabel}>Punten</Text>
                <Button
                    title="Notificaties"
                    onPress={() => navigation.push('Notification')}
                />
                <View style={styles.spaceBetweenContainer} />
                <Button
                    title="Meldingen"
                    onPress={() => navigation.push('ReportsList')}
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
    },
    pointsDisplay: {
        fontSize: 60,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    pointsLabel: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: Colors.darkGray,
        marginBottom: 60
    }
})

export default SettingScreen
