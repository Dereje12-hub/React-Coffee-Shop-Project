import React, { useEffect, useState } from 'react';
import Navbar from '../../Navbar/Navbar';
import SearchCoffee from '../../SearchCoffee/SearchCoffee';
import SearchTea from '../../SearchCollection/SearchCollection';

import SocialMedia from '../../SocialMedia/SocialMedia';
import DisplayTime from '../../DisplayScreen/DisplayTime';

import './HomeScreenElements.css'
import Axios from 'axios';
import Comment from '../../Comment/Comment';
import Coffee from '../../Coffee/Coffee';

const HomeScreen = ( { navigation } ) => {
  
  const [posts, setPosts] = useState([]);

  return (
      <div>
           <div className="container"> 
            <div className="row">
               <SearchCoffee />
               {/* <SearchTea />  */}
            </div>
          </div>
         {/* <Coffee />  */}      
          {/* <DisplayTime /> */}
          {/* <Comment /> */}
        {/* <SocialMedia /> */}
      </div>

  );
};

export default HomeScreen;





