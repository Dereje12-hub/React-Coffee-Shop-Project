import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
} from './NavbarElements';
import {BsCart4} from "react-icons/Bs"
import {GiCoffeeCup} from "react-icons/Gi"
import { IconContext } from "react-icons";
import SearchCoffee from '../SearchCoffee/SearchCoffee';

const Navbar = () => {
  return (
    <>
      <Nav>
         <NavMenu >
            <NavLink to='/logo' >
              DCafe
              <IconContext.Provider
                    value={{ color: 'Yellow', size: '50px' }}
                  >
                    <div>
                      <GiCoffeeCup />
                    </div>
                </IconContext.Provider>
                      
            </NavLink>
            <NavLink to='/menu' >
              Menu
            </NavLink> 

            <NavLink to='/search' >
              <SearchCoffee />
            </NavLink>

            <NavLink to='/about'>
              About
            </NavLink>

          </NavMenu>   

          <NavLink to='/signin'>
            Signin
          </NavLink>

          <NavLink to='/register'>
            Register
          </NavLink>

        
          <NavLink to='/cart' >
            <BsCart4 color='yellow'/>
             Cart
          </NavLink>
          
      </Nav>
    </>
  );
};

export default Navbar;