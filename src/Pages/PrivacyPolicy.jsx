import React from 'react';
import Header from '../components/Header';
import MainFooter from '../components/MainFooter';


const PrivacyPolicy = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <div className="flex justify-center items-center mt-16 min-h-screen px-4">
      <div className="space-y-4 text-sm max-w-4xl">
        <h2 className="text-lg font-bold text-center">Privacy Policy</h2>
        <p className="text-center">This Privacy Policy is a commitment from 
        Scotty B's LED's (also referred to as "SBLED(s)") to respect the privacy
         of the information of users ("User" or "you") visiting our website (https://sbleds.com). It 
         outlines how we collect, use, and protect your data in relation to your interaction with our 
         website and services.</p>

        <h3 className="font-semibold text-center">Definitions</h3>
        <p className="text-center"><strong>Data:</strong> Any information submitted by you to SBLED(s) 
        through the website, including personal details and browsing information.</p>
        <p className="text-center"><strong>Cookies:</strong> Small data files stored on your device by our 
        website, used to enhance your experience and gather usage information.</p>
        <p className="text-center"><strong>Data Protection Laws:</strong> All applicable legislation relating 
        to data protection and privacy including but not limited to GDPR and any national laws implementing or supplementing these.</p>

        <h3 className="font-semibold text-center">Data Collection</h3>
        <p className="text-center">Data you provide to us directly, and data collected automatically, are used 
        to enhance our services and your user experience. This includes, but is not limited to, data provided during account setup, purchase 
        transactions, and automatically collected data such as browser type and visitation patterns.</p>

        <h3 className="font-semibold text-center">Use of Data</h3>
        <p className="text-center">We use collected data for internal record keeping, service improvement, and targeted communications, 
        in compliance with applicable laws and with your consent where required.</p>

        <h3 className="font-semibold text-center">Sharing of Data</h3>
        <p className="text-center">Your data may be shared with our employees and trusted partners for the purposes outlined in this 
        policy, always under strict confidentiality agreements.</p>

        <h3 className="font-semibold text-center">Data Security</h3>
        <p className="text-center">We implement robust security measures to protect your data, including secure server storage 
        and controlled access to your information.</p>

        <h3 className="font-semibold text-center">Your Rights</h3>
        <p className="text-center">You have the right to access, correct, or delete your personal data held by us, among other 
        rights, under applicable data protection laws.</p>

        <h3 className="font-semibold text-center">Cookies Policy</h3>
        <p className="text-center">Our website uses cookies to enhance functionality and user experience. You have control over 
        cookie settings via your browser preferences.</p>

        <h3 className="font-semibold text-center">Changes to Our Privacy Policy</h3>
        <p className="text-center">SBLED(s) reserves the right to modify this Privacy Policy. Any changes will be communicated through 
        our website.</p>

        <p className="font-semibold text-center">Contact us at support@sbleds.com for any questions or requests regarding your data.</p>
      </div>
    </div>
    <MainFooter />
  </div>
);

export default PrivacyPolicy;
