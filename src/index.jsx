import React from 'react'; //add useState when needed for the cart and other components
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Removed Switch
import './index.css';
import LandingPage from './Pages/LandingPage';
// import LEDSignBuilderTool from './Pages/LEDSignBuilderTool';
// import Cart from './Pages/Cart';
// import Profile from './Pages/Profile';
import reportWebVitals from './reportWebVitals';
// import BusinessToBusinessInquiryForm from './Pages/BusinessToBusinessInquiryForm';
import CustomBusinessLogoForm from './Pages/CustomBusinessLogoForm';
// import WholesaleInquiryForm from './Pages/WholeSaleInquiryForm';
// import DigiSignInquiry from './Pages/DigiSignInquiry';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import FAQ from './Pages/FAQ';
import TermsAndConditions from './Pages/TermsAndConditions';
import ReturnsPolicy from './Pages/ReturnsPolicy';
import RefundPolicy from './Pages/RefundPolicy';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Contact from './Pages/Contact';
import Shippingpolicy from './Pages/ShippingPolicy';
import AboutUs from './Pages/AboutUs';


const App = () => {
  // const [cart, setCart] = useState([]);

  // const addToCart = (selection) => {
  //   setCart([...cart, selection]);
  // };

  // const removeFromCart = (itemToRemove) => {
  //   setCart(cart.filter((item) => item !== itemToRemove));
  // };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        {/* <Route path="/express-yourself" element={<LEDSignBuilderTool addToCart={addToCart} />} /> */}
        {/* <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} /> */}
        {/* <Route path="/profile" element={<Profile />} /> */}
        {/* <Route path="/business-inquiry" element={<BusinessToBusinessInquiryForm />} /> */}
        <Route path="/custom-logo" element={<CustomBusinessLogoForm />} />
        {/* <Route path="/wholesale-inquiry" element={<WholesaleInquiryForm />} /> */}
        {/* <Route path="/digi-sign-inquiry" element={<DigiSignInquiry />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/signup" element={<Signup />} /> */}
        {/* <Route path="/faq" element={<FAQ />} /> */}
        <Route path="/returns" element={<ReturnsPolicy />} />
        <Route path="/refund" element={<RefundPolicy />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="terms" element={<TermsAndConditions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shipping" element={<Shippingpolicy />} />
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

