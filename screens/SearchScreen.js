import React from "react";
import {View, Text, Button, StyleSheet} from 'react-native';

import Searcher from "../components/Searcher";
import Header from "../components/Header"
import CustomButton from "../components/customButton";
const SearchScreen = ({navigation}) => {
    return(
        <View style = {StyleSheet.container}>
           
            <Searcher/>
            <Text style = {styles.resultText}>Results:</Text>
            
        </View>

    )
}

export default SearchScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    },
    resultText:{
      fontSize:30,
      alignItems:'center',
      align:"center"
    }

});


