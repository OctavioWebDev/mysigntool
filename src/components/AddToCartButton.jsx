import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const AddToCartButton = ({ addToCart, selections }) => {
    const handleAddToCart = () => {
        addToCart(selections);
    }

    return (
        <button 
            onClick={handleAddToCart}
            className="bg-transparent hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
            Add to Cart
        </button>
    );
};

// Define PropTypes for the component
AddToCartButton.propTypes = {
  addToCart: PropTypes.func.isRequired, // expects a function
  selections: PropTypes.object.isRequired, // expects an object
};

export default AddToCartButton;
