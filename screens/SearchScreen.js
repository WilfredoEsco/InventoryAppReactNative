import React from "react";
import {View, Text, Button, StyleSheet,TouchableOpacity} from 'react-native';

import Searcher from "../components/Searcher";
import Header from "../components/Header"
import CustomButton from "../components/customButton";
import Datatable from "../components/Datatable";

const SearchScreen = ({navigation}) => {
    return(
        <View style = {StyleSheet.container}>
           
            <Searcher/>
            <Text style = {styles.resultText}>Results: </Text>
            <Datatable/>
     
            <TouchableOpacity>
            <View style ={{...styles.button}}>
                <Text style ={{...styles.buttonText}}>
                   Delete
                </Text>
            </View>
        </TouchableOpacity>
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
      align: 'center',
      marginLeft:150

    },
    button:{
        backgroundColor:"red",
        paddingVertical:15,
        paddingHorizontal:10,
        borderRadius:100,
        width:150,
        height:50,
        align:"center",
        marginLeft:120
        
    },
    buttonText:{
        color:"white",
        fontSize:20,
        textAlign:'center',
        
        
    }

});


