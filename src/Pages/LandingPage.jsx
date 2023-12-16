import React from 'react';
import Header from '../components/Header';
const LandingPage = () => {
  return (
    <div>
      <h1 style={{ 
          position: 'relative', 
          top: "65px",   
          left: '20px',
          color: 'white' 
          }}>
        Welcome to the Landing Page!</h1>
      <Header></Header>
      {/* Add your landing page content here */}
    </div>
  );
};

export default LandingPage;