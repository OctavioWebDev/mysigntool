import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import LandingPage from './Pages/LandingPage';
import LEDSignBuilderTool from './Pages/LEDSignBuilderTool';
import Cart from './Pages/Cart';
import Profile from './Pages/Profile';
import reportWebVitals from './reportWebVitals';
import BusinessToBusinessInquiryForm from './Pages/BusinessToBusinessInquiryForm';
import CustomBusinessLogoForm from './Pages/CustomBusinessLogoForm';
import WholesaleInquiryForm from './Pages/WholeSaleInquiryForm';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (selection) => {
    setCart([...cart, selection]);
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
        <Route path="/business-inquiry" element={<BusinessToBusinessInquiryForm />} />
        <Route path="/custom-logo" element={<CustomBusinessLogoForm />} />
        <Route path="/wholesale-inquiry" element={<WholesaleInquiryForm />} />
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
