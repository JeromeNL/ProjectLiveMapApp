import { IconUserCircle } from '@tabler/icons-react-native'
import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Divider from '../../components/Divider'
import ResortDropdown from '../../components/ResortDropdown'
import { Colors } from '../../configuration/styles/Colors'
import { authSlice } from '../../redux/reducers/authReducer'
import { RootState } from '../../redux/store'
import MenuButton from './components/MenuButton'
import { PhoenixAPI } from '../../network/PhoenixAPI'
import { ToastManager } from '../../managers/ToastManager'

const SettingScreen = ({ navigation }: any) => {
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(authSlice.actions.logout())
    }

    const userId = useSelector((state: RootState) => state.auth.id)
    const [points, setPoints] = useState(0)

    const username = useSelector((state: RootState) => state.auth.username)

    useEffect(() => {
        if (userId === null) return
        PhoenixAPI.getInstance()
            .PointsAPI.getTotalPoints(userId)
            .then((response) => {
                setPoints(response.data)
            })
            .catch((error) => {
                console.error('Failed to fetch points:', error)
                ToastManager.showError(
                    'Fout bij ophalen',
                    'Kan aantal punten niet laden'
                )
            })
    }, [userId])

    return (
        <View style={styles.container}>
            <View style={styles.centeredContainer}>
                <IconUserCircle
                    size={100}
                    color={Colors.gray}
                    strokeWidth={1.2}
                />
                <Text style={styles.title}>{username}</Text>
                <Text style={styles.pointsDisplay}>{points}</Text>
                <Text style={styles.pointsLabel}>Punten</Text>
                <ResortDropdown />
                <Divider />
                <View style={styles.menuContainer}>
                    <MenuButton
                        title="Notificaties"
                        onPress={() => navigation.push('Notification')}
                    />
                    <MenuButton
                        title="Meldingen"
                        onPress={() => navigation.push('ReportsList')}
                    />
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <Button
                    color={Colors.error}
                    title="Log uit"
                    onPress={handleLogout}
                />
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
        width: '100%',
        alignItems: 'center'
    },
    bottomContainer: {
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 20
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        color: Colors.darkGray
    },
    menuContainer: {
        width: '60%',
        alignSelf: 'center'
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
