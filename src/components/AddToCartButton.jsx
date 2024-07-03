import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const AddToCartButton = ({ addToCart, selections }) => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleAddToCart = () => {
        addToCart(selections);
        navigate('/cart'); // Navigate to the cart route
    }

    return (
        <button 
            onClick={handleAddToCart}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
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