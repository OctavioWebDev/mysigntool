import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import LandingPage from './Pages/LandingPage';
import LEDSignBuilderTool from './Pages/LEDSignBuilderTool';
import Cart from './Pages/Cart';
import Profile from './Pages/Profile';
import reportWebVitals from './reportWebVitals';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (itemToRemove) => {
    setCart(cart.filter((item) => item !== itemToRemove));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/express-yourself" element={<LEDSignBuilderTool addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
