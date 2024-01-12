import React from 'react';
import './AddToCartButton.css';

const AddToCartButton = ({ addToCart, selections }) => {
  console.log(typeof addToCart);
    const handleAddToCart = () => {
        addToCart(selections);
      }

  return (
    <div className="addToCartButton">
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default AddToCartButton;