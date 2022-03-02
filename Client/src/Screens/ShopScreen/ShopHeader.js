import React from 'react';
//import index from 'index.css'
import {
  StyleSheet,
  Pressable,
  Text,
  Button,
  View,
  Image,
  

} from 'react-native';

function ShopHeader(props) {
    return (
        <div className='block center'>
       <View style={styles.body}>
          <View style={styles.headerLogin}>
            <h4>Bartender : {}</h4>
         <Text style={styles.text}> ShopScreen</Text>  
          </View>
          </View>
        </div>
    );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },


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
 
  
  

})
export default ShopHeader;