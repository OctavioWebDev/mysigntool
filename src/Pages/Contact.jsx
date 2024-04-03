import React from 'react';
import Header from '../components/Header';
import MainFooter from '../components/MainFooter';

function Contact() {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
      <div className="min-h-screen flex flex-col justify-center items-center px-4">
      <div className="bg-black bg-opacity-50 p-6 rounded-lg max-w-2xl w-full">
        <h2 className="text-3xl text-white font-semibold text-center mb-4">Contact Us</h2>
        <p className="mb-8 text-gray-300 text-center">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
        
        <form className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <input className="bg-gray-600 bg-opacity-50 rounded p-4" placeholder="First Name" />
          <input className="bg-gray-600 bg-opacity-50 rounded p-4" placeholder="Last Name" />
          <input className="bg-gray-600 bg-opacity-50 rounded p-4" placeholder="Your email" />
          <input className="bg-gray-600 bg-opacity-50 rounded p-4" placeholder="Phone Number" />
          <textarea className="bg-gray-600 bg-opacity-50 rounded p-4 col-span-full" placeholder="Your message"></textarea>
        </form>
        
        <p className="mt-4 text-gray-300 text-xs">By submitting this form you agree to our <a href="http://localhost:3000/terms" className="text-purple-700 underline">terms and conditions</a> and our <a href="http://localhost:3000/privacy" className="text-purple-700 underline">privacy policy</a> which explains how we may collect, use and disclose your personal information including to third parties.</p>
        
        <button className="mt-4 bg-purple-700 hover:bg-purple-600 rounded text-white py-2 px-6">Send message</button>
      </div>
    
      <div className="flex justify-between items-center w-full max-w-2xl mt-8">
        <div className="flex items-center">
          <span className="icon-email mr-2"></span>
          <div>
            <p className="text-sm">Email us:</p>
            <p className="text-gray-300">hello@flowbite.com</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <span className="icon-phone mr-2"></span>
          <div>
            <p className="text-sm">Call us:</p>
            <p className="text-gray-300">+1 (419)481-3567</p>
          </div>
        </div>
      </div>
      <MainFooter />
    </div>
    </div>
    
  );
}

export default Contact;