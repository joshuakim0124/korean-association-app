import './gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeStackScreen from './coponents/routes/HomeStackScreen';
import SettingsStackScreen from './coponents/routes/SettingsStackScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name = "Home" component = {HomeStackScreen}/>
        <Tab.Screen name = "Settings" component = {SettingsStackScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
