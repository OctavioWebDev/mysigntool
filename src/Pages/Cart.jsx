import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { ReactComponent as SBLEDSLogo } from '../assets/Logos/SBLEDSLogo.svg';

const Cart = () => {
  const [cart, setCart] = useState([]);

  const removeFromCart = (selectionsToRemove) => {
    setCart(cart.filter((selections) => selections !== selectionsToRemove));
  };

  return (
    <div className="flex flex-col min-h-screen">
    <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link to="/" className="flex items-center justify-center" href="#">
          <SBLEDSLogo className="h-10 w-10" />
          <span className="sr-only">Scotty B's LED's</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link to="/express-yourself" className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Express YourSelf
          </Link>
          <Link to="" className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link to="/profile" className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Profile
          </Link>
          <Link to="" className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
          <Link to="/cart" className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Cart
          </Link>
        </nav>
      </header>
      <div className="max-w-2xl mx-auto p-5">
        <h1 className="text-2xl text-gray-800 mb-8 relative top-16 left-5">
          Shopping Cart
        </h1>
        {cart.length === 0 ? (
          <p className="mt-24 text-sm text-gray-300">Your cart is empty.</p>
        ) : (
          cart.map((selections, index) => (
            <div key={index} className="border border-gray-300 p-4 mb-5 rounded bg-gray-200">
              <div className="mb-2.5">
                <h2>Sign Specifications</h2>
                <ul>
                  <li>Color: {selections.color}</li>
                  <li>Color Matcher: {selections.colorMatcher ? 'Yes' : 'No'}</li>
                  <li>Size: {selections.size}</li>
                  <li>Location: {selections.inside ? 'Inside' : 'Outside'}</li>
                  <li>Text: {selections.text}</li>
                </ul>
              </div>
              <button className="px-5 py-2 bg-red-600 text-white rounded cursor-pointer hover:bg-red-700" onClick={() => removeFromCart(selections)}>Remove</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;