import React from 'react';

const Cart = () => {
   const arrayOfObjects = [
     { coffee: "Americano", size: "Medium" },
     { coffee: "Espresso", size: "Single" },
    ];



    return (
        <div>
       <>
          {arrayOfObjects.map(({ coffee, size }) => (
            <p key={coffee}>Coffee type {coffee} in a {size} size.</p>
           ))}
      </>
        </div>
    );
}

export default Cart;