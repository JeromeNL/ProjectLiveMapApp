import { createStackNavigator } from '@react-navigation/stack'
import ProposedFacility from '../model/ProposedFacility'
import HomeScreen from '../screens/home/HomeScreen'
import ServiceReportScreen from '../screens/home/fault/ServiceReportScreen'
import UpsertFacilityScreen from '../screens/home/facility/UpsertFacilityScreen'

type HomeStackParams = {
    Home: undefined
    UpsertFacility: {
        facility: Partial<ProposedFacility>
    },
    ServiceReport: {
        facility: ProposedFacility
    }
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
                        (route.params?.facility?.facilityId ? 'aanpassen' : 'toevoegen')
                })}
            />
            <Stack.Screen
                name="ServiceReport"
                component={ServiceReportScreen}
                options={({ route }) => ({
                    title:
                        'Storingsmelding voor ' +
                        (route.params?.facility?.name)
                })}
            />
        </Stack.Navigator>
    )
}

