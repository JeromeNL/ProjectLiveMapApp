import { createStackNavigator } from '@react-navigation/stack'
import Facility from '../model/Facility'
import HomeScreen from '../screens/home/HomeScreen'
import UpsertFacilityScreen from '../screens/home/facility/UpsertFacilityScreen'
import FacilityDetailView from '../screens/home/facility/FacilityDetail'

type HomeStackParams = {
    FacilityDetail: Facility,
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
            <Stack.Screen
                name="FacilityDetail"
                component={FacilityDetailView}
            />
        </Stack.Navigator>
    )
}

