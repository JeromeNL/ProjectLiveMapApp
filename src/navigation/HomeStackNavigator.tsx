import { createStackNavigator } from "@react-navigation/stack";
import NotificationCreate from "../screens/notifications/NotificationCreate"
import HomeScreen from '../screens/home/HomeScreen';
import Facility from '../model/Facility'

type HomeStackParams = {
  HomeScreen: undefined
  NotificationCreate: Facility
}

const Stack = createStackNavigator<HomeStackParams>();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="NotificationCreate" component={NotificationCreate} />
    </Stack.Navigator>
  );
};
