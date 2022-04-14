import React, { useEffect, useState } from 'react';

import Axios from 'axios';
import {CoffeeList} from '../CoffeeList/CoffeeList';
import './coffee.css';
import {
  StyleSheet,
  Text,
  Button,
  View,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native';

import CaramelicedCoffee from '../images/IceCoffee/CaramelicedCoffee.jpg'
import americano from '../images/IceCoffee/americano.jpg'
import LightHazelnutIcedCoffee from '../images/IceCoffee/LightHazelnutIcedCoffee.jpg'
import PumpkinAppleCold from '../images/IceCoffee/PumpkinAppleCold.jpg'
import VanillaicedCoffeeWithCoconutMilk from '../images/IceCoffee/VanillaicedCoffeeWithCoconutMilk.jpg'
import SagaaDarkRoastColdBrew from '../images/IceCoffee/SagaaDarkRoastColdBrew.jpg'

import IcedCappuccino from '../images/IceCoffee/IcedCappuccino.jpg'
import coldbrewSmall from '../images/IceCoffee/coldbrewSmall.jpg'
import ColdBrew from '../images/IceCoffee/ColdBrew.jpg'
import icedMocha from '../images/IceCoffee/icedMocha.jpg'

import Filter from '../Filter/FIlter';
import SortBy from '../SortBy/SortBy';

const Coffee = () => {

const [CoffeeKinds, setCoffeeKinds] = useState([]);

const arrayOfObjects = [
  { coffee: "Americano", size: "Medium" },
  { coffee: "Espresso", size: "Single" },

];

const arrayCoffee = [
  {
    coffee: "Americano",
  //  url:
  image:americano,
    size: "Small",
    price: 1.95
  },
  { coffee: "Espresso", image: LightHazelnutIcedCoffee,size: "Small", price: 1.95},
  { coffee: "Cappuccino", image: CaramelicedCoffee,size: "Small", price: 1.95},
  // { coffee: "Latte Royale", image: IcedCoffeeLarge,size: "Small", price: 1.95},
   { coffee: "Latte", image: PumpkinAppleCold,size: "Small", price: 1.95},
  { coffee: "Hot Chocolate", image: VanillaicedCoffeeWithCoconutMilk,size: "Small", price: 1.95},


    { coffee: "Iced Coffee", image: SagaaDarkRoastColdBrew,size: "Small", price: 1.75},
  
    { coffee: "Iced Cappuccino", image: IcedCappuccino,size: "Small", price: 2.95},
    { coffee: "coldbrewSmall", image: coldbrewSmall,size: "Small", price: 2.50},
  { coffee: "ColdBrew", image: ColdBrew,size: "Small", price: 2.50},
  { coffee: "Iced Mocha", image: icedMocha,size: "Small", price: 2.95},
  { coffee: "Iced Mocha2", image: icedMocha,size: "Small", price: 2.95},
  { coffee: "Iced Mocha3", image: icedMocha,size: "Small", price: 2.95},
  { coffee: "Iced Mocha4", image: icedMocha,size: "Small", price: 2.95},  
  { coffee: "Iced Mocha5", image: icedMocha,size: "Small", price: 2.95},
  { coffee: "Iced Mocha6", image: icedMocha,size: "Small", price: 2.95},
  { coffee: "Iced Mocha7", image: icedMocha,size: "Small", price: 2.95},
  { coffee: "Iced Mocha8", image: icedMocha,size: "Small", price: 2.95},
  { coffee: "Iced Mocha9", image: icedMocha,size: "Small", price: 2.95},
  { coffee: "Iced Mocha10", image: icedMocha,size: "Small", price: 2.95},
]


  useEffect(() => {
    Axios.get("http://localhost:4000/app/register")
      .then((response) => {
        // setPosts(response.data);
        console.log("Data: found ")
        console.log(response.data)

  })
  .catch(function (error) {
    console.log("catched : ")
    console.log(error);

  })

  }, [])
  

    return (
               // <div className='filter-container'>  
              <div> 
              <div className='sort-container'> 
                <Filter />
                <SortBy />
              </div>
          
            <div className="collection-container ">
             
              <ul className ="collection-list ">
              {arrayCoffee.map(({ coffee, image, size, price }) => (
                <li key={coffee} className="prod-container ">
                  
                  <div className="image-container "> 
                     <img src={image} alt='picture' width="200" height="200"/>
                  </div>
                  <h1 >{coffee} </h1>
                  <div className='price-container'> 
                    <p>size = {size}</p>
                    <p>price: {price}</p>
                  </div>
                </li>
              ))}
            </ul>  
            </div> 
            </div>   
    );
}

export default Coffee;


