import { createStackNavigator } from "@react-navigation/stack";
import NotificationScreen from "../screens/notifications/NotificationScreen";
import SettingScreen from "../screens/settings/SettingScreen";

const Stack = createStackNavigator();

export const SettingStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={SettingScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
    </Stack.Navigator>
  );
};
