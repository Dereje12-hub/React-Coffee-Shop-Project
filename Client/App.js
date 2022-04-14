import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
//import SignUp from './pages/signup'
import HomeScreen from './src/Screens/HomeScreen/HomeScreen'
import LoginScreen from './src/Screens/LoginScreen/LoginScreen'
import SocialMedia from './src/SocialMedia/SocialMedia';
import './App.css';
import About from './src/Navbar/NavbarMenu/About';
import Navbar from './src/Navbar/Navbar';
import RegistrationScreen from './src/Screens/RegistrationScreen/RegistrationScreen';
import SearchCoffee from './src/SearchCoffee/SearchCoffee';
import SearchCollection from './src/SearchCollection/SearchCollection';
import HomeCollection from './src/HomeCollection/HomeCollection';

const App = () => {

  return (

   <Router>
      <Navbar /> 
     <Routes>
        <Route path='/'element={<HomeCollection />} />    
        {/* <Route path="/search" element={<SearchCollection />} />    */}
        <Route path="/about" element={<About />} />  
        <Route path="/signin" element={<LoginScreen />} />
        <Route path="/register" element={<RegistrationScreen />} />
       {/* <Route path="/map" element={<mapScreen />} />   */}
        {/* <Route path="/" element={<SocialMedia /> } />
    */}
     </Routes>
     
  
   </Router>

  )
};

export default App;