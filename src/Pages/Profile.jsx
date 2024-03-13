import React from 'react';
import Header from '../components/Header';
const Profile = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
    <div>
      <h1 style={{ 
          position: 'relative', 
          top: "65px",   
          left: '20px',
          color: 'white' 
          }}>
            User Profile
        </h1>
    </div>
    </div>
  );
};

export default Profile;