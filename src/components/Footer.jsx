import React from 'react';

const Footer = ({ size, location }) => {
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

    return (
        <footer className="footer">
            <div className="cost">
                Total Cost: ${cost.toFixed(2)}
            </div>
            <div className="addToCart">
                <button>Add to Cart</button>
            </div>
        </footer>
    );
};

export default Footer;
