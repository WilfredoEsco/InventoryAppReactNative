// Home Screen Header Component
import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

// Header Component
export default function HomeHeader() {
    return(
        <View style={styles.container}>

            <TouchableOpacity>
                <Image 
                    source={require('../assets/InternationalUsedAutoPartsLogo1.png')}
                    style={styles.menu}
                />
            </TouchableOpacity>

            <Text style={styles.headerText}>International Used Auto Parts</Text>
            
        </View>
    )
}

// Home Header Style
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        flexDirection: 'row',
        height: 90,
        shadowOpacity: .30,
        shadowRadius: 2,
        shadowOffset: {height: 1, width: 2},
    },
    menu: {
        height: 50,
        width: 65,
        marginLeft: 15,
        marginTop: 30,
    },
    headerText: {
        color: 'white',
        marginLeft: 10,
        marginTop: 40,
        fontSize: 22, 
        fontWeight: '600',
    },
}) 