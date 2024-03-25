import { createStackNavigator } from '@react-navigation/stack'
import ProposedFacility from '../model/ProposedFacility'
import HomeScreen from '../screens/home/HomeScreen'
import UpsertFacilityScreen from '../screens/home/facility/UpsertFacilityScreen'

type HomeStackParams = {
    Home: undefined
    UpsertFacility: ProposedFacility
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

