import { React, useState } from "react";
import {
  StyleSheet,
  TextInput,
  
} from 'react-native';
import './SearchCoffee.css';
import {AiOutlineSearch} from "react-icons/ai" 
import Coffee from "../Coffee/Coffee";

const SearchCoffee = () => {

  const [search, setSearch] = useState('');


  return (
  
        <div className="row"> 
          <TextInput
            style={styles.input}
            placeholder='Search'
            value={search.names}
            onChange={(e) => {
              setSearch(e.target.value)
              console.log(e.target.value)
            }}
            /> 

            <button>
              <AiOutlineSearch  />
            </button> 
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

export default SearchCoffee;