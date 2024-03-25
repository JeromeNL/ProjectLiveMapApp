import React from 'react'
import { Provider, useSelector } from 'react-redux'
import store, { RootState } from './src/redux/store/store'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { BottomTabNavigator } from './src/navigation/BottomTabNavigator'
import LoginScreen from './src/screens/login/LoginScreen'

export default function App() {
    const theme = DefaultTheme
    theme.colors.background = 'white'

    return (
        <Provider store={store}>
            <NavigationContainer theme={theme}>
                <RootNavigator />
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
