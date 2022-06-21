import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Picker } from "@react-native-picker/picker";

function App() {
  const [part, setPart] = useState('Unknown');

  return (
    <View style = {styles.screen}>
        <Text>Year: </Text>
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
});