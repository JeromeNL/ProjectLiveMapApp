import { IconUserCircle } from '@tabler/icons-react-native'
import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Divider from '../../components/Divider'
import ResortDropdown from '../../components/ResortDropdown'
import { Colors } from '../../configuration/styles/Colors'
import { ToastManager } from '../../managers/ToastManager'
import { PhoenixAPI } from '../../network/PhoenixAPI'
import { authSlice } from '../../redux/reducers/authReducer'
import type { RootState } from '../../redux/store'
import MenuButton from './components/MenuButton'

const SettingScreen = ({ navigation }: any) => {
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(authSlice.actions.logout())
    }

    const userId = useSelector((state: RootState) => state.auth.id)
    const username = useSelector((state: RootState) => state.auth.username)
    const resortId = useSelector(
        (state: RootState) => state.selectedResort.selectedResort
    )

    const [points, setPoints] = useState(0)

    useEffect(() => {
        if (userId === null || resortId === null) return
        PhoenixAPI.getInstance()
            .PointsAPI.getTotalPoints(userId, resortId.id)
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
    }, [userId, resortId])

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
                        title="Meldingen"
                        onPress={() => navigation.push('ReportsList')}
                    />
                    <MenuButton
                        title="Transacties"
                        onPress={() => navigation.push('Transaction')}
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
        marginBottom: 5,
        color: Colors.darkGray
    },
    menuContainer: {
        width: '60%',
        alignSelf: 'center'
    },
    pointsDisplay: {
        fontSize: 45,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    pointsLabel: {
        fontSize: 18,
        textDecorationLine: 'underline',
        color: Colors.darkGray,
        marginBottom: 20
    }
})

export default SettingScreen
