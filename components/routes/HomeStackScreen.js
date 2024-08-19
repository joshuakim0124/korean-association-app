import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import BusinessInfoScreen from "../screens/BusinessInfoScreen";

const HomeStack = createStackNavigator();

export default function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name = "HomeScreen" component = {HomeScreen} options={{ title: 'Home' }}/>
            <HomeStack.Screen name = "InformationScreen" component = {BusinessInfoScreen} options={{ title: 'Information' }}/>
        </HomeStack.Navigator>
    )
}