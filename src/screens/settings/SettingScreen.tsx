import { IconUserCircle } from '@tabler/icons-react-native'
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Divider from '../../components/Divider'
import ResortDropdown from '../../components/ResortDropdown'
import { Colors } from '../../configuration/styles/Colors'
import { authSlice } from '../../redux/reducers/authReducer'
import { RootState } from '../../redux/store'
import MenuButton from './components/MenuButton'

const SettingScreen = ({ navigation }: any) => {
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(authSlice.actions.logout())
    }

    const username = useSelector((state: RootState) => state.auth.username)

    return (
        <View style={styles.container}>
            <View style={styles.centeredContainer}>
                <IconUserCircle
                    size={100}
                    color={Colors.gray}
                    strokeWidth={1.2}
                />
                <Text style={styles.title}>{username}</Text>
                <ResortDropdown />
                <Divider />
                <View style={styles.menuContainer}>
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
    }
})

export default SettingScreen
