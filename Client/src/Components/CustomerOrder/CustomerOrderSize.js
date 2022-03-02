import React, {useEffect, useState} from 'react';
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
import { TouchableOpacity } from 'react-native-web';
import coffeeCups from '../../images/CoffeeCups.jpg';

//COSTP is customer order size type price
//
const CustomerOrderSize = ({COSTP}) => {

  //const [size, setSize] = useState("");
  const [sizePrice, setSizePrice] = useState("");
  const [coffeeSizeList, setCoffeSizeList] = useState([])

    // const addSize = () => {
    //      Axios.post("http://localhost:4000/addSize", {
    //            size: size,
    //          }).then((response) => {
    //             console.log(response);
    //          });
    //   }

    useEffect(() => {
        Axios.get('http://localhost:4000/order/coffeeSize').then((response) => {
          console.log(response.data);
          setCoffeSizeList(response.data)
      });
    }, []);

  const handleCoffeeSizePrice = (e) => {
     setSizePrice(e.target.value);
     console.log(e);
   };

  return (
    <div>
          <TouchableOpacity onPress={ ()=>COSTP(sizePrice)}> 
            <Image
             style={styles.CoffeeImage}
             source={coffeeCups}
             onPress={ ()=>COSTP(sizePrice)}
           />
           </TouchableOpacity>  
    
           <View><DropdownCoffeeSize
                style={styles.fontSize}
                size="Choose size?"
                options={coffeeSizeList}
                price={sizePrice}
                onChange={  
                  handleCoffeeSizePrice
                } />
        </View> 
        <h5>Price: {sizePrice}</h5>

    </div>
  )
}


const DropdownCoffeeSize = ({ size, price, options, onChange }) => {
  return (
    <label>
      {size}
      <select price={price} onChange={onChange}>
        {options.map((option) => (
          <option key={option.id} value={option.price.toString()} >
            {option.size}
          </option>
        ))}
      </select>
    </label>
  );
};

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
 CoffeeImage: {
    flex: 1,
    aspectRatio: 1,
    alignSelf: 'stretch',
    width: 75,
    resizeMode: 75,
  },
  buttons: {
    width: "100%",
    alignItems: 'center',
    justifyContent: 'bottom',
    paddingVertical: 12,
    paddingHorizontal: 100,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',

  },
})

export default CustomerOrderSize;