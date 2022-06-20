import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/tabs";
import SearchScreen from "./screens/SearchScreen";

const App = () =>{
  return(
    <NavigationContainer> 
      <Tabs/>
  </NavigationContainer>
  );

}

export default App;