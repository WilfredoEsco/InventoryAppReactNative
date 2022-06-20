import React from "react";
import {View, Text, Button, StyleSheet} from 'react-native';

const CarInfoScreen = ({navigation}) => {
    return(
        <View style = {StyleSheet.container}>
            <Text>Search Car Info</Text>

        </View>
    )
}

export default CarInfoScreen;

const styles = StyleSheet.create({
    containerL:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    },
});


