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
                
               <View>
                     <Text>Eateries</Text>
                     <HorizontalScroll businessData = {Eateries}/>
               </View>
                <View>
                    <Text>Clinics</Text>
                    <HorizontalScroll businessData = {Clinics}/>
                </View>
                <View>
                    <Text>Markets</Text>
                    <HorizontalScroll businessData = {Markets}/>
                </View>
                <View>
                    <Text>Real Estate/Finance</Text>
                    <HorizontalScroll businessData = {RealEstateFinance}/>
                </View>
                <View>
                    <Text>Religious Institutions</Text>
                    <HorizontalScroll businessData = {ReligiousInstitutions}/>
                </View>
                <View>
                    <Text>Salons</Text>
                    <HorizontalScroll businessData = {Salons}/>
                </View>
                <View>
                    <Text>Services</Text>
                    <HorizontalScroll businessData = {Services}/>
                </View>
            </View>
        </NavigationContext.Provider>
    )
}
