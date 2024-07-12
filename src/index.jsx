import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import LandingPage from './Pages/LandingPage';
import LEDSignBuilderTool from './Pages/LEDSignBuilderTool';
import Cart from './Pages/Cart';
import Profile from './Pages/Profile';
import reportWebVitals from './reportWebVitals';
import CustomBusinessLogoForm from './Pages/CustomBusinessLogoForm';
import Login from './Pages/Login';
import Register from './Pages/Register';
import TermsAndConditions from './Pages/TermsAndConditions';
import ReturnsPolicy from './Pages/ReturnsPolicy';
import RefundPolicy from './Pages/RefundPolicy';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Contact from './Pages/Contact';
import Shippingpolicy from './Pages/ShippingPolicy';
import AboutUs from './Pages/AboutUs';
import CheckoutPage from './Pages/CheckoutPage';
import { GlobalProvider } from './Context/GlobalState';
import { AuthProvider } from './Context/AuthContext'; // Ensure this is imported
import PrivateRoute from './components/PrivateRoute'; // Ensure this is imported

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/express-yourself" element={<LEDSignBuilderTool />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path="/custom-logo" element={<CustomBusinessLogoForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/returns" element={<ReturnsPolicy />} />
          <Route path="/refund" element={<RefundPolicy />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shipping" element={<Shippingpolicy />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>
);

reportWebVitals();