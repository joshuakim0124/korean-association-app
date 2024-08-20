import React, { useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { SignPageContext } from '../contexts/SignPageContext';
import { useTheme } from '@react-navigation/native';


export default function Login() {
    const { setSignPage } = useContext(SignPageContext);
    const { colors } = useTheme();

    return (
        <View style = {styles.container}>
            <TextInput 
                placeholder = 'Email'
                placeholderTextColor = {colors.text}
                style = {[styles.inputBox, {borderColor: colors.text, color: colors.text}]}
            />
            <TextInput 
                placeholder = 'Password'
                placeholderTextColor = {colors.text}
                style = {[styles.inputBox, {borderColor: colors.text, color: colors.text}]}
            />
            <TouchableOpacity style = {styles.loginButton}>
                <Text style = {{fontSize: 18}}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.createButton} onPress = {() => setSignPage('SignUp')}>
                <Text style = {{color: '#29C5F6', fontSize: 18}}>Create Account</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 300
    },
    inputBox: {
        height: 60,
        width: 300,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        padding: 10,
        margin: 10,
    },
    loginButton: {
        backgroundColor: 'lightblue',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        margin: 10,
        height: 50,
        width: 110,
        justifyContent: 'center',
        alignItems: 'center',
    },
    createButton: {
        padding: 10,
        height: 50,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
    }
});