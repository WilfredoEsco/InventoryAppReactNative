import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/tabs";
import SearchScreen from "./screens/SearchScreen";
import Header from "./components/Header";
const App = () =>{
  return(
    <NavigationContainer> 
      <Header/>
      <Tabs/>
  </NavigationContainer>
  );

}

export default App;