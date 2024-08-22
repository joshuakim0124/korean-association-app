import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from "../screens/SettingsScreen";
import LoginScreen from "../screens/LoginScreen";
import { useState } from "react";
import {SignPageContext} from "../contexts/SignPageContext";

const SettingsStack = createStackNavigator();

export default function SettingStackScreen() {
    const [signPage, setSignPage] = useState('Login');
    const signPageData = { signPage, setSignPage };

    return (
        <SignPageContext.Provider value = {signPageData}>
            <SettingsStack.Navigator>
                <SettingsStack.Screen name = "SettingsScreen" component = {SettingsScreen} options={{title: 'Settings'}}/>
                <SettingsStack.Screen name = "SignPage" component = {LoginScreen} options={{title: signPage}}/>
            </SettingsStack.Navigator>
        </SignPageContext.Provider>
    )
}