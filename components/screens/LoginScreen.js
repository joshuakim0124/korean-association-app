import { useTheme } from '@react-navigation/native';
import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SignPageContext } from '../contexts/SignPageContext';
import Login from '../settings-components/Login';
import SignUp from '../settings-components/SignUp';

export default function LoginScreen() {
    const {colors} = useTheme();
    const { signPage, setSignPage } = useContext(SignPageContext);
    
    return (
        <View alignItems = 'center' justifyContent = 'center'>
            {signPage == 'Login' ? <Login /> : <SignUp />}
        </View>
    )
}