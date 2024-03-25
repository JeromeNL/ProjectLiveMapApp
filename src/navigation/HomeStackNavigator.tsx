import { createStackNavigator } from '@react-navigation/stack'
import Facility from '../model/Facility'
import HomeScreen from '../screens/home/HomeScreen'
import UpsertFacilityScreen from '../screens/home/facility/UpsertFacilityScreen'

type HomeStackParams = {
    Home: undefined
    UpsertFacility: Facility
}

const Stack = createStackNavigator<HomeStackParams>()

export const HomeStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'Kaart' }}
            />
            <Stack.Screen
                name="UpsertFacility"
                component={UpsertFacilityScreen}
                options={({ route }) => ({
                    title:
                        'Faciliteit ' +
                        (route.params.facilityId ? 'aanpassen' : 'toevoegen')
                })}
            />
        </Stack.Navigator>
    )
}

