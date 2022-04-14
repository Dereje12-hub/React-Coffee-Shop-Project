import { React, useState } from "react";
import {
  StyleSheet,
} from 'react-native';
import './searchElements.css';
import Coffee from "../Coffee/Coffee";
const SearchCollection = () => {

  const [searched, setSearched] = useState("");
  return (
      <div className="container">
          {/* <img src={coffeeImage} className="plantImage" alt='Image' /> */}
           <div className="scroller">  
          <Coffee /> 
         </div>    
       </div>
  )
}


const styles = StyleSheet.create({

   input: {
     width: 300,
     boarderColor: '#000000',
//     //borderRadius: 10,
//     //boarderWeidth: 2,
     backgroundColor: '#fffff0',
     textAlign: 'center',
     fontSize: 20,
//     //marginTop: 140,
//     marginBottom: 10,
  
   }

 })

export default SearchCollection;