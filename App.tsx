import "react-native-gesture-handler";
import "react-native-get-random-values";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { StackNavigator } from "./src/navigator/StackNavigator";
import { AuthProvider } from './src/context/Context';
//aqui


export const App = () => {
  return (
    <AuthProvider>
     { /*carprovier*/}
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
     { /*carprovier*/}
      </AuthProvider>
      
    
  );
};

export default App;