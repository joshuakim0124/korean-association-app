import React from 'react';
import { Text, View } from 'react-native';
import HorizontalScroll from '../horizontal-scroll/HorizontalScroll';
import { Eateries } from '../../assets/business-data/Eateries';
import { NavigationContext } from '../contexts/NavigationContext';

export default function HomeScreen({ navigation }) {
    return (
        <NavigationContext.Provider value = {navigation}>
            <View>
                <Text>Home</Text>
                <Text>Hello</Text>
                <HorizontalScroll businessData = {Eateries}/>
            </View>
        </NavigationContext.Provider>
    )
}
