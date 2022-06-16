import React from "react";
import {View, Text, Button, StyleSheet} from 'react-native';

const SearchScreen = ({navigation}) => {
    return(
        <View style = {StyleSheet.container}>
            <Text>Search Screen</Text>

        </View>
    )
}

export default SearchScreen;

const styles = StyleSheet.create({
    containerL:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    },
});


