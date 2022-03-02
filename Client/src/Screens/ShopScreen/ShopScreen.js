import React, {useState} from 'react';
import {
  StyleSheet,
  Pressable,
  Text,
  Button,
  View,
  Image,
} from 'react-native';

import { ShopScreenContainer } from './ShopScreenElements'
import coffeeLogo from '../../images/coffeeLogo.png'
import AlertNotification from '../../AlertNotification/AlertNotification';
import IncDecReset from '../../Components/IncDecReset/IncDecReset';
import CustomerOrder from '../../Components/CustomerOrder/CustomerOrder';
import Invoice from '../../Components/Invoice/Invoice';
import HomeScreen from '../HomeScreen/HomeScreen';
import DisplayTime from '../../Components/DisplayTimer/DisplayTimer';
//import DisplayTime from '../DisplayScreen/DisplayTime';

function ShopScreen({ navigation }) {

   const [customerName, setCustomerName] = useState('');
   const [username, setUserName] = useState('');

  
  const AlertNotification = () => {
      alert('Good bye!')
      navigation.navigate('HomeScreen');
   };

  return (
    <ShopScreenContainer>
      <div className={styles.body} >
      </div>
        <View style={styles.body}>
           <View style={styles.headerLogin}>
            <div >
                  <a href="#/item">Dcafe </a> <a href='#/price'>Bartender:   {" "} </a>
            </div>
              <Image style={styles.logo} source={coffeeLogo}/>
          </View>
            <div> <CustomerOrder /></div>
            <div className='row'>

            </div>
          <Button
            className={styles.buttons}
            //onPress={onPressHandlerCoffeeScreen}
            onPress={AlertNotification}
            title="Logout"
            color="red"
          />

        </View>

      </ShopScreenContainer>

  )

};



const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
//   text: {
//     fontSize: 40,
//     fontWeight: 'bold',
//     margin: 10,
//   },

 fontSize: {
    fontSize: 200,
    fontWeight: 'bold',
    margin: 200,
  },

  headerLogin: {
    width: '100%',
    height: 40,
    backgroundColor: "lightblue",
    //backgroundColor: 'transparent'
  },
  CoffeeImage: {
    flex: 1,
    aspectRatio: 1,
    alignSelf: 'stretch',
    width: 75,
    resizeMode: 75,
  },
  // buttons: {
  //   width: "100%",
  //   alignItems: 'center',
  //   justifyContent: 'bottom',
  //   paddingVertical: 12,
  //   paddingHorizontal: 100,
  //   borderRadius: 4,
  //   elevation: 3,
  //   backgroundColor: 'black',

  // },
  logo: {
    width: 50,
    height: 50,
    position: "absolute",
    top: 50,
    left: 20,
    opacity: 0.9,
  },

})



export default ShopScreen;