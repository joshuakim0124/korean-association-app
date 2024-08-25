import React from 'react';
import { Text, View } from 'react-native';
import HorizontalScroll from '../horizontal-scroll/HorizontalScroll';
import { Eateries } from '../../assets/business-data/Eateries';
import { NavigationContext } from '../contexts/NavigationContext';
import { Clinics } from '../../assets/business-data/Clinics';
import { Markets } from '../../assets/business-data/Markets';
import { RealEstateFinance } from '../../assets/business-data/RealEstateFinance';
import { ReligiousInstitutions } from '../../assets/business-data/ReligiousInstitutions';
import { Salons } from '../../assets/business-data/Salons';
import { Services } from '../../assets/business-data/Services';


export default function HomeScreen({ navigation }) {
    return (
        <NavigationContext.Provider value = {navigation}>
            <View>
                <Text>Eateries</Text>
               <View>
                     <HorizontalScroll businessData = {Eateries}/>
               </View>
               <Text>Clinics</Text>
                <View>
                    <HorizontalScroll businessData = {Clinics}/>
                </View>
                <Text>Markets</Text>
                <View>
                    <HorizontalScroll businessData = {Markets}/>
                </View>
                <Text>Real Estate/Finance</Text>
                <View>
                    <HorizontalScroll businessData = {RealEstateFinance}/>
                </View>
                <Text>Religious Institutions</Text>
                <View>
                    <HorizontalScroll businessData = {ReligiousInstitutions}/>
                </View>
                <Text>Salons</Text>
                <View>
                    <HorizontalScroll businessData = {Salons}/>
                </View>
                <Text>Services</Text>
                <View>
                    <HorizontalScroll businessData = {Services}/>
                </View>
            </View>
        </NavigationContext.Provider>
    )
}
