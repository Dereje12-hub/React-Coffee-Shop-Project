import React, { useEffect, useState } from 'react';
import './homeCollection.css';
//import {AiOutlineSearch} from "react-icons/ai" 
import Coffee from "../Coffee/Coffee";
import SocialMedia from "../SocialMedia/SocialMedia";
//import coffeeImage from '../images/coffeeImage/coffeeImage.jpg'
import { HomeCollectionPlant } from "./HomeCollectionBackground";




const HomeCollection = () => {

    const[widthAuto, setWidthAuto] = useState(window.innerWidth-(window.innerWidth/4));
    const[heightAuto, setHeightAuto] = useState(window.innerHeight-(window.innerHeight/4));
    const[topSpaceAuto, setTopSpaceAuto] = useState(window.innerWidth/6);

    const updateWidthAndHeight =() => {
        setWidthAuto(window.innerWidth-(window.innerWidth/4));
        setHeightAuto(window.innerHeight-(window.innerHeight/4));
        setTopSpaceAuto(window.innerHeight/6);
    }

  const [searched, setSearched] = useState("");


  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
},[]);


  return (
  
    <HomeCollectionPlant > 
       <div> 
          <div className='container'>     
          {/* <div style={{ backgroundImage: `url(${photo})`}}> */}
            <div> 
              <Coffee />  
           </div>    
        </div>

         <div >
            <SocialMedia />
          </div> 
      </div>
 
     </HomeCollectionPlant> 
      
  )
}


export default HomeCollection;