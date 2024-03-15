import { createStackNavigator } from '@react-navigation/stack'
import Facility from '../model/Facility'
import HomeScreen from '../screens/home/HomeScreen'
import NotificationCreate from '../screens/home/NotificationCreate'

type HomeStackParams = {
    HomeScreen: undefined
    NotificationCreate: Facility
}

const Stack = createStackNavigator<HomeStackParams>()

export const HomeStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen
                name="NotificationCreate"
                component={NotificationCreate}
            />
        </Stack.Navigator>
    )
}

