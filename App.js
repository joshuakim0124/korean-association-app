import './gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeStackScreen from './components/routes/HomeStackScreen';
import SettingsStackScreen from './components/routes/SettingsStackScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
          screenOptions = { ({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = focused? 'home' : 'home-outline';
                } else if (route.name === 'Settings') {
                    iconName = focused? 'settings' : 'settings-outline';
                }

                return <Ionicons name = {iconName} size = {size} color = {color}/>
            },
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name = "Home" component = {HomeStackScreen} options={{ headerShown: false }}/>
        <Tab.Screen name = "Settings" component = {SettingsStackScreen} options={{ headerShown: false }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
