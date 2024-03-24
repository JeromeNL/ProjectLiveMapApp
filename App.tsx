import React from 'react'
import { Provider, useSelector } from 'react-redux'
import store, { RootState } from './src/redux/store/store'
import { NavigationContainer } from '@react-navigation/native'
import { BottomTabNavigator } from './src/navigation/BottomTabNavigator'
import LoginStackNavigator from './src/navigation/LoginStackNavigator'

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <RootNavigator />
            </NavigationContainer>
        </Provider>
    )
}

const RootNavigator = () => {
    const authenticated = useSelector(
        (state: RootState) => state.auth.isAuthenticated
    )

    return authenticated ? <BottomTabNavigator /> : <LoginStackNavigator />
}
