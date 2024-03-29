import * as axios from 'axios';
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet,TouchableOpacity } from 'react-native';


const InsertScreen = ({ navigation }) => {

    const [stk_number, setStk] = useState();
    const [partID, setPartID] = useState();
    const [shelf, setShelf] = useState();
    const [location, setLocation] = useState();
    const [notes, setNotes] = useState();

    const  url = 'http://35.239.193.136/data';
    const addInventory =() => {
        console.log(location);
        axios.post(url,{
            stk_number:stk_number,
            partID: partID,
            shelf: shelf,
            location: location,
            notes: notes

        }).then((response) =>{
            console.log(response.data);
        }).catch(err => 
            console.log(err));
    };
    return (
        <View style={styles.container}>
            <Text>Enter STK Number: </Text>
            <TextInput placeholder="Enter STK:" style={styles.inputBoxes} onChangeText={(val) => setStk(val)} />
            <Text>Enter Part Number: </Text>
            <TextInput placeholder="Enter partname:" style={styles.inputBoxes} onChangeText={(val) => setPartID(val)} />
            <Text>Enter Shelf Letter</Text>
            <TextInput placeholder="Enter Shelf:" style={styles.inputBoxes} onChangeText={(val) => setShelf(val)} />
            <Text>Enter Shelf Number:</Text>
            <TextInput placeholder="Enter Location:" style={styles.inputBoxes} onChangeText={(val) => setLocation(val)} />
            <Text>Enter any comments/notes</Text>
            <TextInput placeholder="Enter Note:" style={styles.notesBox} onChangeText={(val) => setNotes(val)} />

            <TouchableOpacity onPress={addInventory}>
            <View style ={{...styles.button}}>
                <Text style ={{...styles.buttonText}}>
                   INSERT
                </Text>
            </View>
        </TouchableOpacity>

        

        </View>
      
)}

export default InsertScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#8fcbbc',

    },
    inputBoxes: {
        fontSize: 20,
        height: 40,
        width: 300,
        backgroundColor: 'white',
        borderWidth: 1
    },
    notesBox:{
        fontSize: 20,
        height: 150,
        width: 350,
        backgroundColor: 'white',
        borderWidth: 1
    },
    button:{
        backgroundColor:"green",
        paddingVertical:15,
        paddingHorizontal:10,
        borderRadius:100,
        width:150,
        height:50,
        align:"center",
        
    },
    buttonText:{
        color:"black",
        fontSize:20,
        textAlign:'center',
        
    }
});


