import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/Screens/HomeScreen/HomeScreen';
import LoginScreen from './src/Screens/LoginScreen/LoginScreen';
import WelcomeScreen from './src/Screens/WelcomeScreen/WelcomeScreen';
import ShopScreen from './src/Screens/ShopScreen/ShopScreen';
import RegistrationScreen from './src/Screens/RegistrationScreen/RegistrationScreen';


const Stack = createStackNavigator();

 const App = () => {

  return (
    //<Provide store = {store} > 
      <NavigationContainer>
        <Stack.Navigator>
          
        <Stack.Screen 
            name="HomeScreen" 
            component={ HomeScreen } 
            options={{ headerShown: null }} 
          /> 
 
           <Stack.Screen 
            name="LoginScreen" 
            component={ LoginScreen } 
            options={{ headerShown: null }} 
          />       
          
           <Stack.Screen 
            name="WelcomeScreen" 
            component={ WelcomeScreen } 
            options={{ headerShown: null }}  
          />                                                
          <Stack.Screen 
            name="ShopScreen" 
            component={ ShopScreen } 
            options={{ headerShown: null }} 
          />
              <Stack.Screen 
              name="RegistrationScreen" 
              component={ RegistrationScreen } 
              options={{ headerShown: null }} 
          /> 
  
        </Stack.Navigator>
      </NavigationContainer>
   //</Provide>
  )
};

export default App;

