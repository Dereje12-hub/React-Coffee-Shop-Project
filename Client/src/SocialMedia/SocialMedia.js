import { React, useState } from "react";
import {
  StyleSheet,  
} from 'react-native';
//import List from "./Components/List"
import './SocialMediaElements.css';
import {BsFacebook, BsYoutube, BsInstagram } from "react-icons/Bs" 
 import {RiTwitterLine} from 'react-icons/Ri'

const SocialMedia = () => {
  return (
    <div className="social-block row">

        <div className="social-container">
          <h3>Social Follow</h3>
            <a 
               href="https://www.facebook.com"
               className="facebook social">
               <BsFacebook size="3ex" />
           </a>

           <a 
               href="https://www.youtube.com"
               className="youtube social">
               <BsYoutube size="3ex" />
           </a>

           <a 
               href="https://www.instagram.com"
               className="instagram social">
               <BsInstagram size="3ex" />
           </a>

           <a 
               href="https://www.twitter.com"
               className="twitter social">
               <RiTwitterLine size="3ex" />
           </a>
      </div>
     </div>
      
  )
}


const styles = StyleSheet.create({
  
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  },

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

export default SocialMedia;