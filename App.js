import './gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeStackScreen from './components/routes/HomeStackScreen';
import SettingsStackScreen from './components/routes/SettingsStackScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name = "HomeStack" component = {HomeStackScreen} options={{ headerShown: false }}/>
        <Tab.Screen name = "SettingsStack" component = {SettingsStackScreen} options={{ headerShown: false }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
