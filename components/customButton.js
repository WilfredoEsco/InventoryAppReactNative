import React from "react";
import {View, Text,StyleSheet,TouchableOpacity} from "react-native";

const CustomButton = props =>{
    return(
        <TouchableOpacity>
            <View style = {{...styles.button, ...props.style}}>
                <Text style ={{...styles.buttonText, ...props.textStyling}}>
                   SEARCH
                </Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
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
        color:"white",
        fontSize:20,
        textAlign:'center',
        
        
    }
});

export default CustomButton;