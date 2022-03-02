import React from 'react';
import {StyleSheet, TouchableOpacity, Image, View } from 'react-native';
import coffeeHome from '../../images/coffeeHome.jpg'



const HomeScreen = ( { navigation } ) => {

    const onPressHandlerLoginScreen = () => {
    navigation.navigate('LoginScreen');
  }

  return (
    <View >
      <TouchableOpacity onPress={onPressHandlerLoginScreen}>
         <Image 
         style={styles.image}
         source={coffeeHome}
         />
         
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
     imgContainer: {
        flexDirection: 'row'
    },
  image: {
    flex: 1,
    aspectRatio: 1,
    alignSelf: 'stretch',
    width: "cover",
    resizeMode: "cover",
  
  },

});


export default HomeScreen;





