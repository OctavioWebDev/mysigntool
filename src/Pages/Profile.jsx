import React from 'react';
import Header from '../components/Header';
const Profile = () => {
  return (
    <div>
      <h1 style={{ 
          position: 'relative', 
          top: "65px",   
          left: '20px',
          color: 'white' 
          }}>
            User Profile
        </h1>
        <Header></Header>
      {/* Add your profile content here */}
    </div>
  );
};

export default Profile;