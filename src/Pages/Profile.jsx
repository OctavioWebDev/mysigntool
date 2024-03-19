import React from 'react';
import Header from '../components/Header';
import MainFooter from '../components/MainFooter';

const Profile = () => {
  const profileImageUrl = "https://example.com/path-to-your-profile-image.jpg";

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-col items-center pt-12 pb-8">
        <img
          src={profileImageUrl}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-gray-700 drop-shadow-sm" // TailwindCSS classes
        />
        <h1 className="mt-4 text-xl font-semibold text-gray-800">
          User Profile
        </h1>
        <div className="shadow-2xl rounded-lg w-3/4 p-4">
          {/* User Info Section */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800">User Info</h2>
            <p className="text-gray-700">Username: JohnDoe</p>
            <p className="text-gray-700">Email: johndoe@example.com</p>
          </div>

          {/* Previous Orders Section */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Previous Orders</h2>
            {/* Mapping through previous orders would go here */}
            <p className="text-gray-700">Order #1234 - Completed</p>
            <p className="text-gray-700">Order #1235 - Completed</p>
          </div>

          {/* Current or Unfilled Orders */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Current/Unfilled Orders</h2>
            {/* Mapping through current/unfilled orders would go here */}
            <p className="text-gray-700">Order #1236 - Pending</p>
          </div>
        </div>
      </div>
      <MainFooter />
    </div>
  );
};

export default Profile;
