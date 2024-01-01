import React from 'react';
import Header from '../components/Header/Header';

const LandingPage = () => {
  const sections = Array(12).fill().map((_, index) => (
    <div 
      key={index} 
      style={{
        height: '100vh',
        backgroundColor: index % 2 === 0 ? 'black' : 'white',
        color: index % 2 === 0 ? 'white' : 'black',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {index === 0 && <img src="path-to-your-image.jpg" style={{position: 'absolute', width: '100%', height: '100%'}} />} {/* Replace with the path to your image */}
      <h1>Section {index + 1}</h1>
      <h2>Subtitle for Section {index + 1}</h2>
      <h3>Details for Section {index + 1}</h3>
      {index === 2 && (
        <div style={{
          position: 'absolute',
          right: 0, // Change to 'left: 0' to position the photo on the left side
          width: '50%',
          height: '100%',
          backgroundImage: 'url(path-to-your-photo.jpg)', // Replace with the path to your photo
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}></div>
      )}
    </div>
  ));

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
      <div>
        {sections}
      </div>
      <footer style={{backgroundColor: 'black', color: 'white', textAlign: 'center', padding: '20px'}}>
        This is the footer section
      </footer>
    </div>
  );
};

export default LandingPage;