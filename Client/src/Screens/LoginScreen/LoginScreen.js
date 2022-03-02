import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom'
import Axios from "axios";
import {
  StyleSheet,
  Text,
  Button,
  View,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native';

import coffeeLogo from '../../images/coffeeLogo.png'
import coffeeKey from '../../images/coffeeKey.jpg'
import RegistrationScreen from '../RegistrationScreen/RegistrationScreen';
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen';


const LoginScreen = ({ navigation, setToken }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const [loginStatus, setLoginStatus] = useState('No');
  const [starttime, setStartTime] = useState('');
  const [endtime, setEndTime] = useState('');
  const [startdate, setStartDate] = useState('');

  const [showMessage, setShowMessage] = useState("");
  //const placeholder='Enter your Password!';
   
  const showAlert = () => {
      alert('Wrong user or password!')
     //function to make two option alert
   };


   function Register(){
      console.log("Go to Registry Screen!");
      navigation.navigate('RegistrationScreen');
   }

  
  const AuthenticateUserPassword = () => {
    
         if( username.length < 0 ) {
             setShowMessage("check the size of username input!");
         }
         else{
      
          Axios.post("http://localhost:4000/login", {
            username: username,
            password: password,          

            }).then((response) => {
            if (response.data.message) {

              setShowMessage(response.data.message);
              console.log(`${response.data.message}`);
              
            } else {
              //setLoginStatus(response.data[0].username);
              //setLoginStatus('YES');
              console.log(response.data[0].username, ' logged in'); 
              navigation.navigate('WelcomeScreen');
            

            }
          });
           
      }
 };


  return ( 
      <ImageBackground 
       style={styles.background}
       source={coffeeKey}>

      <Image style={styles.logo} source={coffeeLogo}/>

      {/* <View style={styles.loginButton}></View>
      <View style={styles.passwordButton}></View>  */}

      <View style={styles.body} > 
      <Text style={styles.text}>Login</Text>
    
      <div>
       <Text style={styles.textType}>Username</Text>     
       <TextInput
          style={styles.input}
          placeholder='Enter your userName!'
          value={username.names}
          onChange={(e) => {
               setUsername(e.target.value)
               console.log(e.target.value)
          }}
       /> 
      </div>
      <div>
        <Text style={styles.textType}>
            Password
        </Text>
        <TextInput
            style={styles.input}
            placeholder='Enter your Password!'
            value={password.passwords}
            onChange={(e) => {
              setPassword(e.target.value)
              console.log(e.target.value)
            }}
        />
     </div>
      
      <div> 
        <Button 
          onPress= {() => AuthenticateUserPassword()}
          title="Submit"
          color="green"
          /> 

          <Button 
          onPress= {() => Register()}
          title="SignUp"
          color="black"
        /> 
       </div>  
          <div>                                                
             <h1 style={{ color: 'RED' }}>{showMessage}</h1> 
          </div>   
      
       </View>
    </ImageBackground>
  )
};



const styles = StyleSheet.create({
  background: {
    flex: 1,  
    justifyContent: "flex-end",
    alignItems: 'center',
    //opacity: 0.1,
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: "#fc5c65"
  },
    passwordButton: {
    width: '100%',
    height: 70,
    backgroundColor: "#4ecdc4"
  },
  
  logo: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 50,
    margin: 20,
    opacity: 0.9,
  },

  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    background: '#0080ff'
    },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  },
  textType: {
    fontSize: 20,
    //fontWeight: 'bold',
    color: 'black',
    margin: 10,
  },
  input: {
    width: 300,
    boarderColor: '#555',
    //borderRadius: 10,
    //boarderWeidth: 2,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
    //marginTop: 140,
    marginBottom: 10,
  
  }

})

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired
// }

export default LoginScreen;

