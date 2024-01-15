import React, { useState } from 'react';
import Header from '../components/Header/Header';
import './Cart.css';
const Cart = () => {
  const [cart, setCart] = useState([]);

  const removeFromCart = (selectionsToRemove) => {
    setCart(cart.filter((selections) => selections !== selectionsToRemove));
  };

  return (
    <>
    <Header></Header>
    <div className="cart-container">
      <h1 className="cart-header" style={{ position: 'relative', top: "65px", left: '20px', color: 'white' }}>
        Shopping Cart
      </h1>
      {cart.length === 0 ? (
        <p className="cart-description">Your cart is empty.</p>
      ) : (
        cart.map((selections, index) => (
          <div key={index}  className="cart-item">
            <div className="cart-item-details">
            <h2>Sign Specifications</h2>
            <ul>
              <li>Color: {selections.color}</li>
              <li>Color Matcher: {selections.colorMatcher ? 'Yes' : 'No'}</li>
              <li>Size: {selections.size}</li>
              <li>Location: {selections.inside ? 'Inside' : 'Outside'}</li>
              <li>Text: {selections.text}</li>
            </ul>
            </div>
            <button className="remove-button" onClick={() => removeFromCart(selections)}>Remove</button>
          </div>
        ))
      )}
    </div>
    </>
  );
};

export default Cart;