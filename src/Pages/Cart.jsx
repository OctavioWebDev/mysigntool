import React from 'react';
import Header from '../components/Header/Header';
const Cart = () => {
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
    </div>
  );
};

export default Cart;