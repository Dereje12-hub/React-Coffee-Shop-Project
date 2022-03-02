import React, {useState, useEffect} from 'react'
import index from './index.css'
//import CustomerOrder from '../../CustomerOrder/CustomerOrderElements';
//import index from '../index.css'
import { Link, useHistory } from 'react-router-dom'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ImageBackground,
  TextInput,
} from 'react-native';
import coffeeLogo from '../../images/coffeeLogo.png';
import Axios from 'axios';
//ITCO means invoice to customer order
//
const Invoice = ({ ITCO}) => {

  const [orderType, setOrderType] = useState(0)
  const [orderSizeprice, setOrderSizePrice] = useState(0);
  const [orderCount, setOrderCount] = useState(1);

  const [subtotal, setSubtotal] = useState(0.0);
  const [tax, setTax] = useState(0.0);
  const [total,setTotal] = useState(0.0);
  const [tip,setTip] = useState(0.0);
  const [currentOrderList, setCurrentOrderList] = useState([]);
  
  const subtotals = () => setSubtotal(orderCount * (orderSizeprice * orderSizeprice));

   const calculations = () => {
      const subtotalValue = orderCount * (orderSizeprice * orderSizeprice);
      setTax((total*13)/100);
      setSubtotal((orderCount * (orderType + orderSizeprice)).toString());
      setTax((13*total)/100);
      setTotal(total + tax +  tip); 
      
   }
   const freeAmericano = subtotal/50;
  
    const Bonus = () => {
       //add free Americano in order list
       //update the db sale table
  }

  const onPressHandlerTip = () => {
     //setTip amount clikable amount
     //call the DB to add the tip to the seller

  }
  
   const onPressDeleteTheRow = () => {
       //avoid the order
       //delete the current order from db

   }

    // Similar to componentDidMount and componentDidUpdate:
      // useEffect(() => {
      //     Axios.get('http://localhost:4000/shop/list').then((response) => {
      //       console.log(response.data);
      //       setCurrentOrderList(response.data)
      //   });
      // }, []);

  return (
  
    <header className='block  col-2 body'>

          {/* <div style={styles.fixed}>  */}
           <div>
            <div >
              <View style={styles.headerBackground}>
                     <Image style={styles.logo} flex={1} source={coffeeLogo}/>
                 <Button
                  className="bottom-right"
                  //onPress={onPressDeleteTheRow}
                  title="cancel "
                  padding= "0.2"
                  borderRadius= "5"
                  color="black" />
             </View> 
          </div>

        
           <a href="#/">
             <h6> Thank you  </h6>
              
             </a>
             <a href="#/item">Item --------------</a>  <a href='#/price'>Amount </a>
            <div style={styles.border}>  
  
          {/* using map funciton display the result */}  
          {/* {options.map((option) => (
            <Printer key={option.id} option={option}/>
        ))
        } */}
          <h6>{}.......... {orderType}</h6>
          <h6>{}.......... {orderSizeprice}</h6>
          <h6>{}.......... {orderCount}</h6> 

          <Button
                className={styles.buttons}
                //onPress={onPressHandlerTip}
                title="Tip"
                color="green"
            />
          {/* add buttons to select amount of tip */}
          {/* Which directs to username  */}

           </div> 
         </div>
    </header>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,  
    backgroundColor: '"#green"',
    justifyContent: "flex-end",
    alignItems: 'center',
    opacity: 0.4,
    margine: "0.5rem",
    borderRadius: "0.10rem",
    
  },
  cancelButton: {
    width: '100%',
    height: 70,
    backgroundColor: "black"
  },
  passwordButton: {
    width: '100%',
    height: 70,
    backgroundColor: "#4ecdc4"
  },
  row: {
    display:"flex",
  },
  
  logo: {
    width: 35,
    height: 35,
    position: "absolute",
    top: 10,
    bottom: 10,
    opacity: 50,
  },

  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    background: '#0080ff'
    },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  align: {
    flex: 1,
    padding: "1rem",
    margin: "0.5rem",
    border: "0.5rem",
    alignItems: "center",
    justifyContent: "center"
  },
  headerBackground: {
    with: '100%',
    height: 70,
  
   },

});

export default Invoice;
