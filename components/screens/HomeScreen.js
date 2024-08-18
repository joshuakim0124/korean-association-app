import React from 'react';
import { Text, View } from 'react-native';
import HorizontalScroll from '../horizontal-scroll/HorizontalScroll';
import {Eateries} from '../../assets/business-data/Eateries';
export default function HomeScreen() {
    return (
        <View>
            <Text>Home</Text>
            <Text>Hello</Text>
            <HorizontalScroll businessData = {Eateries}/>
        </View>
    )
}