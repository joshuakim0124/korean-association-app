import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from "../screens/SettingsScreen";

const SettingsStack = createStackNavigator();

export default function SettingStackScreen() {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name = "SettingsScreen" component = {SettingsScreen} options={{title: 'Settings'}}/>
        </SettingsStack.Navigator>
    )
}