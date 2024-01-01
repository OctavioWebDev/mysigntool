import React, { useState } from 'react';
import Header from '../components/Header/Header';

const Cart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (selections) => {
    setCart([...cart, selections]);
  };

  const removeFromCart = (selectionsToRemove) => {
    setCart(cart.filter((selections) => selections !== selectionsToRemove));
  };

  return (
    <div>
      <h1 style={{ 
          position: 'relative', 
          top: "65px",   
          left: '20px',
          color: 'white' 
          }}>
        Shopping Cart
      </h1>
      <Header></Header>
      {/* Add your cart content here */}
      {cart.map((selections, index) => (
        <div key={index}>
          <h2>Sign Specifications</h2>
          <ul>
            <li>Color: {selections.color}</li>
            <li>Color Matcher: {selections.colorMatcher ? 'Yes' : 'No'}</li>
            <li>Size: {selections.size}</li>
            <li>Location: {selections.inside ? 'Inside' : 'Outside'}</li>
            <li>Text: {selections.text}</li>
            {/* Add more list items as needed */}
          </ul>
          <button onClick={() => removeFromCart(selections)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;