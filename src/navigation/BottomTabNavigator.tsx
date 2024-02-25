import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import { SettingStackNavigator } from './SettingStackNavigator';

const BottomTab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }}>
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="SettingsStack" component={SettingStackNavigator} />
    </BottomTab.Navigator>
  );
}
