import React from 'react';
import {
  StyleSheet,
  Button,
  View,
} from 'react-native';

import { WelcomeScreenContainer } from './WelcomeScreenContainer'

function WelcomeScreen({ navigation }) {

    const SignUpAndPass = () => {
        console.log("SignUpAndPass");
        if({loginStatus}){
            
             console.log("logingStatus");
             Axios.post("http://localhost:4000/login/status", {
                username: username,
                loginStatus: loginStatus,
                //starttime: starttime,
                //endtime: endtime,
                }).then((response) => {  
                  
               });
           }
    }


  const onPressHandlerShopScreen = () => {
    navigation.navigate('ShopScreen');
  }
  const logoutPressHandle = () => {
    navigation.navigate('HomeScreen');
  }

   const showAlert = () => {
      alert('Good bye!'),
     //function to make two option alert
     logoutPressHandle()
   };

  return (
    <WelcomeScreenContainer >
      <View style={styles.gotToLoginScreenBtn}>
          <h1> Welcome " { } " you are logged in </h1>
      </View>

      <View style={styles.body}>
         <Button
          onPress={onPressHandlerShopScreen}
          title="Start "
          display="bottom"
          backgroundColor="transparent"
          color="green"
          width="50%"
          height="50%"
          fontSize= "1000px"
  
         />
       </View>
          <View style={styles.bodyBtn2}>
            <Button
              //onPress={logoutPressHandle}
              onPress={showAlert}
              title="Log out "
              color="red"

              display="bottom"
              backgroundColor="transparent"
              position= 'absolute'
              bottom= "50"
              left= "0"
             />
            </View>
    </WelcomeScreenContainer>
  )
}


const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    ight: "20%",
    top: "20%",
  },
  bodyBtn2: {
    //flex: 1,
    right: "-1%",
    top: "70%",
    justifyContent: 'bottom',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  },
  gotToLoginScreenBtn: {
    with: '100%',
    height: 70,
    backgroundColor: "lightblue",
    //backgroundColor: 'transparent'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },

})

export default WelcomeScreen;