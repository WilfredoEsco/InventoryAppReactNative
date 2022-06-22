import React from "react";
import {View, Text,StyleSheet,TouchableOpacity} from "react-native";

const CustomButton = props =>{
    return(
        <TouchableOpacity>
            <View style = {{...stlyes.button, ...props.style}}>
                <Text style ={{...stlyes.buttonText, ...props.textStyling}}>
                   SEARCH
                </Text>
            </View>
        </TouchableOpacity>
    )
};

const stlyes = StyleSheet.create({
    button:{
        backgroundColor:"gray",
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