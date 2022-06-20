import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';

import SearchScreen from '../screens/SearchScreen';
import InsertScreen from '../screens/InsertScreen';
import CarInfoScreen from '../screens/CarInfoScreen';

const Tab = createBottomTabNavigator();
const Tabs =() => {
return(
    <Tab.Navigator
    tabBarOptions={{
        showLabel: false,
        style: {
            position: 'absolute',
            bottom:25,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: '#fffff',
            borderRadius: 15,
            height: 90,
            ...style.shadow

        }
    }}>
        <Tab.Screen name = "Search" component={SearchScreen} options={{
            tabBarIcon: ({focused}) => (
                <View style={{alignItems: 'center', justifyContent: 'center',top: 10}}>
                    <Image 
                    source = {require('../assets/adaptive-icon.png')}
                    resizeMode ='contain'
                    style ={{
                        width: 25,
                        height:25,
                        tintColor: focused ? '#e32f45' : '#748c94'
                    }}
                    />
                    <Text style ={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>Search</Text>
                </View>
            )
        }} />
        <Tab.Screen name = "Insert" component={InsertScreen}
        options={{
            tabBarIcon: ({focused}) => (
                <View style={{alignItems: 'center', justifyContent: 'center',top: 10}}>
                    <Image 
                    source = {require('../assets/favicon.png')}
                    resizeMode ='contain'
                    style ={{
                        width: 25,
                        height:25,
                        tintColor: focused ? '#e32f45' : '#748c94'
                    }}
                    />
                    <Text style ={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>Insert</Text>
                </View>
            )
        }}/>
        <Tab.Screen name = "CarInfo" component={CarInfoScreen}
        options={{
            tabBarIcon: ({focused}) => (
                <View style={{alignItems: 'center', justifyContent: 'center',top: 10}}>
                    <Image 
                    source = {require('../assets/splash.png')}
                    resizeMode ='contain'
                    style ={{
                        width: 25,
                        height:25,
                        tintColor: focused ? '#e32f45' : '#748c94'
                    }}
                    />
                    <Text style ={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>CarInfo</Text>
                </View>
            )
        }}/>
    
    </Tab.Navigator>
)
}
const style = StyleSheet.create({
    shadow:{
        shadowColor: '#7f5df0',
        shadowOffset:{
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
});
export default Tabs;