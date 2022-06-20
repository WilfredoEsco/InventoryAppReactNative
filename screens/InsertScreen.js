import React from "react";
import {View, Text, Button, StyleSheet} from 'react-native';

const InsertScreen = ({navigation}) => {
    return(
        <View style = {StyleSheet.container}>
            <Text>Insert Screen</Text>

        </View>
    )
}

export default InsertScreen;

const styles = StyleSheet.create({
    containerL:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    },
});


