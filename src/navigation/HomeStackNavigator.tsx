import { createStackNavigator } from '@react-navigation/stack'
import ProposedFacility from '../model/ProposedFacility'
import HomeScreen from '../screens/home/HomeScreen'
import UpsertFacilityScreen from '../screens/home/facility/UpsertFacilityScreen'
import FacilityDetailView from '../screens/home/facility/FacilityDetail'

type HomeStackParams = {
    FacilityDetail: Facility,
    Home: undefined
    UpsertFacility: ProposedFacility
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
            <Stack.Screen
                name="FacilityDetail"
                component={FacilityDetailView}
            />
        </Stack.Navigator>
    )
}

