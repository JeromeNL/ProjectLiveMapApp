import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Toast from 'react-native-toast-message'
import { Provider, useSelector } from 'react-redux'
import { BottomTabNavigator } from './src/navigation/BottomTabNavigator'
import store, { RootState } from './src/redux/store'
import LoginScreen from './src/screens/login/LoginScreen'

export default function App() {
    const theme = DefaultTheme
    theme.colors.background = 'white'

    return (
        <Provider store={store}>
            <NavigationContainer theme={theme}>
                <RootNavigator />
                <Toast />
            </NavigationContainer>
        </Provider>
    )
}

const RootNavigator = () => {
    const isAuthenticated = useSelector(
        (state: RootState) => state.auth.isAuthenticated
    )
    return isAuthenticated ? <BottomTabNavigator /> : <LoginScreen />
}
