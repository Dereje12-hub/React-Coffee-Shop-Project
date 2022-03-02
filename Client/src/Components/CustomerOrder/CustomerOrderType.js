import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  //Pressable,
  Text,
  Button,
  View,

} from 'react-native';
import Axios from 'axios'

//COTTP means customer order type to parent
//
const CustomerOrderType = ({ COTTP }) => {

  const [type, setCoffeeType] = useState("");
  //const [tea, setTea] = useState("");
  const [coffeeList, setCoffeList] = useState([])
   //const [teaList, setTeaList] = useState([])


    //const callOrderCoffeeList = () => {
      //   Axios
      //       .get('http://localhost:4000/order/coffeeSize')
      //       .then((response) => response.data)
      //       .then(response => {

      //           console.log("inside getOrderCoffeeList")
      //           console.log(response.data);
      //   });
      // }

      useEffect(() => {
          Axios.get('http://localhost:4000/order/coffee').then((response) => {
            console.log(response.data);
            setCoffeList(response.data)
        });
      }, []);


  const handleCoffeePrice = (e) => {
     setCoffeeType(e.target.value);
     console.log(e);
     //typeToOrder.setOrderType(type);
   };

  return (
    <div>
           <Button
            className={styles.buttons}
            onPress={()=>COTTP(type)}
            title=" Coffee "
            color="brown"
          />
           <View><DropdownCoffee
                style={styles.fontSize}
                coffee="Choose coffee ?"
                options={coffeeList}
                price={type}
                onChange={ handleCoffeePrice
                     } />
        </View> 
        <h5>Price: {type}</h5>

    </div>
  )
}


const DropdownCoffee = ({ type, price, options, onChange }) => {
  return (
    <label>
      {type}
      <select price={price} onChange={onChange}>
        {options.map((option) => (
          <option key={option.id} value={option.price.toString()} >
            {option.type}
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

export default CustomerOrderType;