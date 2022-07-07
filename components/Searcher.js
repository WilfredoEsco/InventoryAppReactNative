import React, { useState } from "react";
import { View, Text,TextInput, StyleSheet,Button } from "react-native";

import { Picker } from "@react-native-picker/picker";
import { TouchableOpacity } from "react-native-web";
import CustomButton from "./customButton";



function App() {
  const [part, setPart] = useState();
  const [year, setYear] = useState();
  const [model, setModel] = useState();
  return (
 
    <View style = {styles.screen}>
        <Text style ={styles.text}>Year: </Text>
        <TextInput placeholder="Enter Year:" style ={styles.inputs} onChangeText={(val)=>setYear(val)}/>
        <Text style ={styles.text}>Model:</Text>
        <TextInput placeholder="Enter Model:" style ={styles.inputs} onChangeText={(val)=> setModel(val)}/>
      <Picker
        selectedValue={part}
        onValueChange={(value, index) => setPart(value)}
        mode="dropdown" // Android only
        style={styles.picker}
      >
        <Picker.Item label="Please select your part" value="Unknown" />
        <Picker.Item label="Engine" value="Engine" />
        <Picker.Item label="Transmission" value="Transmission" />
        <Picker.Item label="A/C Compressor" value="A/C Compressor" />
        <Picker.Item label="Starter" value="Starter" />
        <Picker.Item label="Alternator" value="Alternator" />
      </Picker>
   
      <CustomButton/>
      <Text style={styles.text}>Searching for....{year} {model} {part}. </Text>
    </View>


    
  );
}

export default App;

// Just some styles
const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'yellow',
    marginTop:1
  },
  text: {
    fontSize: 20,
    color:'red'
  },
  picker: {
    marginVertical: 1,
    width: 300,
    height:160,
    padding: 1,
    borderWidth: 1,
    borderColor: "#666",
  },
  inputs:{
    fontSize: 20,
    height:35,
    width: 200,
    backgroundColor:'white',
    borderWidth:1
    
  }
});