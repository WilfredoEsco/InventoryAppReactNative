import React, { useState } from "react";
import { View, Text,TextInput, StyleSheet,Button } from "react-native";

import { Picker } from "@react-native-picker/picker";


function App() {
  const [part, setPart] = useState('Unknown');

  return (
    <View style = {styles.screen}>
        <Text style ={styles.inputs}>Year: </Text>
        <TextInput placeholder="Enter Year:"/>
        <Text style ={styles.inputs}>Model:</Text>
        <TextInput placeholder="Enter Model:"/>
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
      <Text style={styles.text}>Your part: {part}</Text>
      <Button
        title="SEARCH" color ="#f194ff"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>
    
  );
}

export default App;

// Just some styles
const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'white',
    marginTop:15
  },
  text: {
    fontSize: 20,
  },
  picker: {
    marginVertical: 5,
    width: 300,
    padding: 10,
    borderWidth: 1,
    borderColor: "#666",
  },
  inputs:{
    fontSize: 20
  }

});