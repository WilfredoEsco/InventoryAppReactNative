import React from "react";
import {View, Text, Button, StyleSheet,TouchableOpacity} from 'react-native';
import { useState } from "react";

import Searcher from "../components/Searcher";
import Header from "../components/Header"
import CustomButton from "../components/customButton";
import Datatable from "../components/Datatable";
import Axios from "axios";


const SearchScreen = ({navigation}) => {

    const [Inventory, setInventory] = useState([]);
    const getinventory = () => {
        Axios.get('http://35.239.193.136/data').then((response) => {
          setInventory(response.data);
        });
      };

    return(
        <View style = {StyleSheet.container}>
           
            <Searcher/>
            <Text style = {styles.resultText}>Results: </Text>
            
     
            <TouchableOpacity onPress ={getinventory}>
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
        textAlign:'center'
        
        
    }

});


