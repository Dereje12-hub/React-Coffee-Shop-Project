import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Pressable,
  Text,
  Button,
  View,
  Image,
} from 'react-native';
import CustomerOrderSize from './CustomerOrderSize';
import CustomerOrderType from './CustomerOrderType';
import CustomerOrderElements from './CustomerOrderElements.css'
import IncDecReset from '../IncDecReset/IncDecReset';
import Invoice from '../Invoice/Invoice';
import Axios from 'axios';
import DisplayTime from '../DisplayTimer/DisplayTimer';



const CustomerOrder = () => {

  const [username, setUserName] = useState('')
  const [customername, setCustomerName] = useState('');
  
  const [orderType, setOrderType] = useState('')
  const [orderSizePrice, setOrderSizePrice] = useState('');
  const [orderCount, setOrderCount] = useState('');
  
  const [subtotal, setSubtotal] = useState('');
  const [tax, setTax] = useState('');
  //const [tip, setTip] = useState('');
  const [total, setTotal] = useState('');

  const [listInvoice, setListInvoice] = useState([]);

  
  
  const SetOnDb = () => {
       console.log("I am in setOnDB");
      Axios.post("http://localhost:4000/sale", {
              username: username,
              customername: customername,
              orderType: orderType,
              orderSizeprice: orderSizePrice,
              orderCount: orderCount,
              subtotal: subtotal,
              tax: tax,
              total: total,

            }).then((response) => {
              //console.log("Registry is successful!");
              console.log(response);
            
            })
  }

  const COTTP =(acceptType) => {
    setOrderType(acceptType)
  }

  const COSTP =(acceptSize) => {
    setOrderSizePrice(acceptSize)
  }

  const IDCTP =(acceptCount) => {
    setOrderCount(acceptCount)
  }

  const INVOICE =(calInvoice) => {
    listInvoice(calInvoice)
  }

  return (
    <> 
    <div> 
        <div className="flexbox-container">
          <CustomerOrderType COTTP={COTTP} /> 
          <CustomerOrderSize COSTP ={COSTP} /> 
          <IncDecReset IDCTP={IDCTP} />
          <Button
            onPress={() => SetOnDb()}
            title="Place an Order"
            color="green"
          />
        </div> 
        <div> 
          <div> 
             <DisplayTime />
          </div>
             <Invoice INVOICE={INVOICE} /> 
          </div>
          

    </div>
    </>
  )

}
export default CustomerOrder;