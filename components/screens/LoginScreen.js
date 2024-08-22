import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { SignPageContext } from '../contexts/SignPageContext';
import Login from '../settings-components/Login';
import SignUp from '../settings-components/SignUp';
import Toast from 'react-native-toast-message';

export default function LoginScreen({ navigation }) {
    const { signPage } = useContext(SignPageContext);

    const handleCreateToast = (type, text, position) => {
        Toast.show({
            type: type,
            text1: text,
            position: position,
            visibilityTime: 3000
        });
    };

    return (
        <View style = {styles.container}>
            {signPage == 'Login' ? <Login handleCreateToast = {handleCreateToast} navigation = {navigation}/> : 
                <SignUp handleCreateToast = {handleCreateToast} navigation = {navigation}/>
            }
            <Toast />
        </View>
    )
}

styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
})