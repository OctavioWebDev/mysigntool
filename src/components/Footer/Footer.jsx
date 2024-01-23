import React, { useState } from 'react';
import AddToCartButton from '../AddToCart/AddToCartButton';

const Footer = ({ textInput, selectedFont, selectedColor, size, location, customSize }) => {
    // Calculate the total size in square inches
    const totalSize = size.width * size.height;

    // Price per square inch
    const pricePerSquareInch = .6;

    // Calculate base cost
    let cost = totalSize * pricePerSquareInch;

    // Add 10% if location is 'outside'
    if (location === 'outside') {
        cost += cost * 0.10;
    }

    const [cart, setCart] = useState([]);

    const addToCart = () => {
        const selections = {
            textInput,
            selectedFont,
            selectedColor,
            size,
            location,
            customSize,
        };
        setCart(prevCart => [...prevCart, selections]);
    };

    return (
        <footer className="flex justify-between items-center bg-gray-800 text-white p-2.5 fixed bottom-0 w-full z-50">
            <div className="ml-1">
                Total Cost: ${cost.toFixed(2)}
            </div>
            <AddToCartButton addToCart={addToCart} selections={{ textInput, selectedFont, selectedColor, size, location, customSize }} />
        </footer>
    );
};

export default Footer;

