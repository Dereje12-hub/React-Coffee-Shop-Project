import React, {useEffect, useState} from 'react';
//import { BrowserRouter as Router } from 'react-router-dom'

import {
  StyleSheet,
  //Pressable,
  Text,
  Button,
  View,
  Image,
  ImageBackground,
  TextInput,
  
} from 'react-native';
import Axios from 'axios'
//import Navbar from '../../components/Navbar';
//import { LoginScreenContainer } from './LoginScreenContainer'
import coffeeLogo from '../../images/coffeeLogo.png'
import coffeeKey from '../../images/coffeeee.jpg'


const RegistrationScreen = ({ navigation }) => {
  const [lastnameReg, setLastnameReg] = useState("");
  const [firstnameReg, setFirstnameReg] = useState("");
  const [employeeStartDate, setEmployeeStartDate] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const [registerStatus, setRegisterStatus] = useState("");
       //navigate to login screen
       //navigation.navigate('LoginScreen')
       //console.log("Wrong Input! Try Again!")
        
  const registerEmployee = () => {
     
       if(lastnameReg.length < 2 || firstnameReg.length < 2 || email.length < 2 || username.length < 2) {
         setRegisterStatus("check the size of the input!");
       }

        else if(password.length < 4 ){
          setRegisterStatus("Your password length must be above 4!");
       }
        else{
            Axios.post("http://localhost:4000/register", {
              lastname: lastnameReg,
              firstname: firstnameReg,
              username: username,
              password: password,
              email: email,
              startDate: employeeStartDate,

            }).then((response) => {
              //console.log("Registry is successful!");
              console.log(response);
            })
          console.log("Registration is successful!");
          console.log("Return back to login page");
          navigation.navigate('LoginScreen');
          }    
  };

  // //check if the username and password satifies
  // if(username.length > 0 && password.length > 0){

  // }
  
   useEffect(() => {
     Axios.get("http://localhost:4000/register").then((response) => {
       if (response.data.registerIn == true) {
         setRegisterStatus(false);   
         navigation.navigate('RegistrationScreen');
       }
     });
   }, []);

    
  return (
    <ImageBackground 
       style={styles.background}
       source={coffeeKey}>

      <Image style={styles.logo} source={coffeeLogo}/>

      {/* <View style={styles.loginButton}></View>
      <View style={styles.passwordButton}></View>  */}

    <View style={styles.body} > 
      <Text style={styles.text}>Register</Text>
         
         <div>
         <Text style={styles.textType}>Last Name </Text>
         <TextInput
          style={styles.input}
          placeholder='Wrire your Last name!'
          value={lastnameReg.lastname}
          onChange={(e) => { 
               setLastnameReg(e.target.value)
               console.log (e.target.value)
          }}
         />
      </div>
          <div style={styles.flex}> 
            <Text style={styles.textType}>First name</Text>
            <TextInput
              style={styles.input}
              placeholder='Write your first name!'
              value={firstnameReg.firstname}
              onChange={(e) => {
                setFirstnameReg(e.target.value);
                 console.log(e.target.value)
               }
              }
            /> 
         </div>
            <div style={styles.flex}> 
            <Text style={styles.textType}>Username</Text>
            <TextInput
              style={styles.input}
              placeholder='Create your username!'
              value={username.username}
              onChange={(e) => {
                setUsername(e.target.value);
                 console.log(e.target.value)
               }
              }
            /> 
         </div>
         <div>
  
          <Text style={styles.textType}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder='Create your Password!'
            value={password.password}
            onChange={(e) => { 
                setPassword(e.target.value)
                console.log (e.target.value)
            }}
          />
      </div>
        <div style={styles.flex}> 
            <Text style={styles.textType}> @Email </Text>
            <TextInput
              style={styles.input}
              placeholder='Write your email!'
              value={email.email}
              onChange={(e) => {
                setEmail(e.target.value);
                 console.log(e.target.value)
               }
              }
            /> 
         </div>
      <div>
  
      </div> 
        <Button 
        //onPress={onPressHandlerWelcomeScreen}
        onPress= {registerEmployee}
        title="Submit"
        color="blue"
      /> 
          <div>                                                
            <h1 style={{ color: 'YELLOW' }}>{registerStatus}</h1>
          </div>

      </View>
    </ImageBackground>

  )
}


const styles = StyleSheet.create({
  background: {
    flex: 1,  
    justifyContent: "flex-end",
    alignItems: 'center',
    //opacity: 0.1,
    
  },
  
  
  submitButton: {
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
    color: 'white',
    margin: 10,
  },
  textType: {
    fontSize: 20,
    //fontWeight: 'bold',
    color: 'white',
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


export default RegistrationScreen;



