import React from 'react';

const AddToCartButton = ({ addToCart, selections }) => {
  console.log(typeof addToCart);
    const handleAddToCart = () => {
        addToCart(selections);
      }

  return (
      <button 
      onClick={handleAddToCart}
      className=
      "bg-transparent hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
      >
        Add to Cart
        </button>
   
  );
};

export default AddToCartButton;