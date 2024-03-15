import { createStackNavigator } from '@react-navigation/stack'
import Facility from '../model/Facility'
import HomeScreen from '../screens/home/HomeScreen'
import UpsertFacilityScreen from '../screens/home/UpsertFacilityScreen'

type HomeStackParams = {
    Home: undefined
    UpsertFacility: Facility
}

const Stack = createStackNavigator<HomeStackParams>()

export const HomeStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen
                name="UpsertFacility"
                component={UpsertFacilityScreen}
            />
        </Stack.Navigator>
    )
}

