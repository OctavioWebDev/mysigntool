import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import MainFooter from '../components/MainFooter';

// Define fetchUserProfile function
const fetchUserProfile = async (token) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}api/users/profile`, { // Removed the trailing slash from the environment variable
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });
  console.log(`${process.env.REACT_APP_BACKEND_URL}api/users/profile`);
console.log(`Bearer ${token}`);


  if (!response.ok) {
    throw new Error('Could not fetch user profile.');
  }

  return await response.json();
};


const Profile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    fetchUserProfile(token)
      .then(profile => {
        setUserProfile(profile);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Adjustments for dynamic data display
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-col items-center pt-12 pb-8">
        <img
          src={userProfile?.profilePicture || 'default-profile-picture-url'} // Use a default image if none is provided
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-gray-700 drop-shadow-sm"
        />
        <h1 className="mt-4 text-xl font-semibold text-gray-800">
          {userProfile?.username || 'User Profile'}
        </h1>
        <div className="shadow-2xl rounded-lg w-3/4 p-4">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800">User Info</h2>
            <p className="text-gray-700">Username: {userProfile?.username}</p>
            <p className="text-gray-700">Email: {userProfile?.email}</p>
          </div>

          {/* The orders would be dynamically generated based on the userProfile data */}
        </div>
      </div>
      <MainFooter />
    </div>
  );
};

export default Profile;

