import { useTheme } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import { ThemeContext } from '../contexts/ThemeContext';
import LanguageButton from '../settings-components/LanguageButton';
import { UserContext } from '../contexts/UserContext';

export default function SettingsScreen({ navigation }) {
    const {theme, setTheme} = useContext(ThemeContext);
    const { colors } = useTheme();
    const [language, setLanguage] = useState('english');
    const { user } = useContext(UserContext);

    const changeLanguage = (newLang) => {
        setLanguage(newLang);
    }
 
    return (
        <View style = {styles.container}>
            <View style = {styles.viewBlock}>
                <Text style = {{color: colors.text, fontSize: 20}}>Dark Theme</Text>
                <Switch value = {theme == 'Light' ? false : true}
                        onChange = {() => {
                            setTheme(theme == 'Light' ? 'Dark' : 'Light');
                        }}
                /> 
            </View>
            <View style = {styles.viewBlock}>
                <Text style = {{color: colors.text, fontSize: 20}}>Language</Text>
                <View style = {styles.viewBlock}>
                    <LanguageButton 
                        title = 'English'
                        language = {language}
                        changeLanguage = {changeLanguage}
                    />
                    <LanguageButton 
                        title = 'Korean'
                        language = {language}
                        changeLanguage = {changeLanguage}
                    />
                </View>
            </View>
            {user ? <Button title = "Log Out" onPress = {() => setUser(null)}/> : 
                    <Button title = "Sign In" onPress = {() => navigation.navigate('SignIn')}/>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    viewBlock: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
})