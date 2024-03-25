import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { BottomTabNavigator } from './src/navigation/BottomTabNavigator'

export default function App() {
    const theme = DefaultTheme
    theme.colors.background = 'white'
    return (
        <NavigationContainer theme={theme}>
            <BottomTabNavigator />
        </NavigationContainer>
    )
}
