// Home Screen Header Component
import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

// Header Component
export default function HomeHeader() {
    return(
        <View style={styles.container}>

            <TouchableOpacity>
                <Image 
                    source={{uri : 'https://4.bp.blogspot.com/-MlPqmlI4xiA/Te1sdov8b2I/AAAAAAAAAAY/ftAarMZDrc4/s1600/recycle-794950.jpg'}}
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
        height: 35,
        width: 35,
        marginLeft: 15,
        marginTop: 35,
    },
    headerText: {
        color: 'white',
        marginLeft: 20,
        marginTop: 40,
        fontSize: 23, 
        fontWeight: '600',
    },
}) 