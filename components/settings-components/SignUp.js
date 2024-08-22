import React, { useRef, useState } from "react"
import { useContext } from "react"
import { SignPageContext } from "../contexts/SignPageContext"
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard, ActivityIndicator, TouchableWithoutFeedback } from "react-native"
import { useTheme } from "@react-navigation/native"
import { doCreateUserWithEmailAndPassword } from "../auth"

export default function SignUp({ handleCreateToast, navigation }) {
    const passwordRef = useRef(null);
    const emailRef = useRef(null);
    const confirmPasswordRef = useRef(null);
    const { setSignPage } = useContext(SignPageContext)
    const { colors } = useTheme();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    
    //error password toast set up
    const showMismatchPasswordToast = () => {
        handleCreateToast('error', 'Passwords do not match', 'bottom');
    }

    //error password length toast setup

    const showShortPasswordToast = () => {
        handleCreateToast('error', 'Password must be at least 6 characters', 'bottom');
    }

    //error no email toast setup
    const showNoEmailToast = () => {
        handleCreateToast('error', 'Please enter an email', 'bottom');
    }

    //general error toast setup
    const showErrorSignUpToast = () => {
        handleCreateToast('error', 'Error Signing Up', 'bottom');
    }

    //success signin toast set up
    const showSuccessToast = () => {
        handleCreateToast('success', 'Account Created', 'bottom');
    }

    //handles sign up button pressed
    const handleSignUp = async () => {
        try {
            Keyboard.dismiss();
            setLoading(true);
            //handles issue when no email is entered
            if (email == '') {
                showNoEmailToast();
                setLoading(false);
                return;
            }
            //handles issue when the passwords do not match
            if (password != confirmPassword) {
                showMismatchPasswordToast();
                setConfirmPassword('');
                confirmPasswordRef.current.clear();
                setLoading(false);
                return ;
            }
            if (password.length < 6) {
                showShortPasswordToast();
                setPassword('');
                setConfirmPassword('');
                confirmPasswordRef.current.clear();
                passwordRef.current.clear();
                setLoading(false);
                return;
            }
            //creates account with email and password
            await doCreateUserWithEmailAndPassword(email, password);
            setLoading(false);
            //resets sign up inputs
            confirmPasswordRef.current.clear();
            passwordRef.current.clear();
            emailRef.current.clear();
            setConfirmPassword('');
            setPassword('');
            setEmail('');
            showSuccessToast();
            navigation.goBack();
        } catch (error) {
            setLoading(false);
            showErrorSignUpToast();
        }
    }

    const handlePasswordChange = (input) => {
        if (passwordRef.current) {
            setPassword(input);
        }
    }
    const handleConfirmPasswordChange = (input) => {
        if (confirmPasswordRef) {
            setConfirmPassword(input);
        }
    }

    return (
        <TouchableWithoutFeedback onPress = {() => Keyboard.dismiss()}>
            <View style = {styles.container}>
                <TextInput 
                    placeholder = 'Email'
                    ref = {emailRef}
                    placeholderTextColor = {colors.text}
                    style = {[styles.inputBox, {borderColor: colors.text, color: colors.text}]}
                    onChangeText = {(text) => setEmail(text)}
                />
                <TextInput 
                    placeholder = 'Password'
                    ref = {passwordRef}
                    placeholderTextColor = {colors.text}
                    style = {[styles.inputBox, {borderColor: colors.text, color: colors.text}]}
                    secureTextEntry = {true}
                    onChangeText = {(text) => handlePasswordChange(text)}
                />
                <TextInput 
                    placeholder = 'Confirm Password'
                    ref = {confirmPasswordRef}
                    placeholderTextColor = {colors.text}
                    style = {[styles.inputBox, {borderColor: colors.text, color: colors.text}]}
                    secureTextEntry = {true}
                    onChangeText = {(text) => handleConfirmPasswordChange(text)}
                />
                <TouchableOpacity style = {styles.signupButton} onPress = {() => handleSignUp()}>
                    <Text style = {{fontSize: 18}}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.loginButton} onPress = {() => setSignPage('Login')}>
                    <Text style = {{color: '#29C5F6', fontSize: 18}}>Login</Text>
                </TouchableOpacity>
                { loading && <ActivityIndicator size = 'small' color = {colors.text} /> }
            </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
    signupButton: {
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
    loginButton: {
        padding: 10,
        height: 50,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
    }
});