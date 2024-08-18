import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function BusinessContainer({ businessData }) {

    return (
        <View style = {styles.container}> 
            <Text style = {styles.infoText}>{businessData?.name || 'Business Name'}</Text>
            <Image  
            />
            <Text style = {styles.infoText}>{businessData?.description || 'Business Description'}</Text>
            <Text style = {styles.infoText}>{businessData?.contact || 'Business Contact'}</Text>
            <Text style = {styles.infoText}>{businessData?.address || 'Business Address'}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height : 200,
        width : 150,
        padding : 20,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        margin: 4,
        marginTop: 8,
        borderWidth: 1
    },
    infoText: {
        fontSize: 12,
        color: '#333',
    }
});