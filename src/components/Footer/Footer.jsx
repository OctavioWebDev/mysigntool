import React, { useState } from 'react';
import './Footer.css';
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
        <footer className="footer">
            <div className="cost">
                Total Cost: ${cost.toFixed(2)}
            </div>
            <AddToCartButton addToCart={addToCart} selections={{ textInput, selectedFont, selectedColor, size, location, customSize }} />
        </footer>
    );
};

export default Footer;
