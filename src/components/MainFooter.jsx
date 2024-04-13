import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  // faPinterest,
  faYoutube,
  // Add other icons from FontAwesome as needed
} from '@fortawesome/free-brands-svg-icons';
import SBLEDSLogo from '../assets/Logos/SBLEDSLogo.svg';

const MainFooter = () => {
  return (
    <footer className="flex flex-col w-full shrink-0 items-center px-4 md:px-6">
      <div className="flex flex-wrap justify-between w-full items-start gap-2 sm:gap-6 py-6 border-b border-gray-400">
        <div>
          <img className="h-10 w-10" src={SBLEDSLogo} alt="SB LEDS Logo" />
          <p className="font-bold">Scotty B's LED's</p>
          <p>4455 Secor Road</p>
          <p>Toledo, Ohio</p>
          <p>Open M-F: 9:00 AM – 5:00 PM</p>
          <p>Phone: (419)481-3567</p>
        </div>

        <div className="flex flex-wrap gap-x-12 gap-y-9 mt-6 sm:justify-center">
          <div className="w-full sm:w-1/2 md:w-1/4">
            {/* <h5 className="font-bold mb-3">Account</h5>
            <p>Orders</p>
            <p>Track your order</p> */}
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h5 className="font-bold mb-3">Professional</h5>
            {/* <p>B2B</p> */}
            {/* <p>Whole Sale</p> */}
            <p><a href="http://localhost:3000/custom-logo" class="hover:underline">Custom Business Logo</a></p>
            <p><a href="http://localhost:3000/custom-logo" class="hover:underline">Digital Sign</a></p>
            {/* <h5 className="font-bold mt-5">Gift Card</h5> */}
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h5 className="font-bold mb-3">Help</h5>
            {/* <p><a href="http://localhost:3000/faq" class="hover:underline">FAQ</a></p> */}
            <p><a href="http://localhost:3000/shipping" class="hover:underline">Shipping Policy</a></p>
            <p><a href="http://localhost:3000/returns" class="hover:underline">Return Policy</a></p>
            <p><a href="http://localhost:3000/contact" class="hover:underline">Contact</a></p>
            <p><a href="http://localhost:3000/refund" class="hover:underline">Refund Policy</a></p>
            <p><a href="http://localhost:3000/privacy" class="hover:underline">Privacy Policy</a></p>
            <p><a href="http://localhost:3000/terms" class="hover:underline">Terms & Conditions</a></p>
          </div>
        </div>
        {/* Follow Us */}
        <div className="w-full sm:w-1/2 md:w-1/4">
          <h5 className="font-bold mb-3">Follow us</h5>
          <div className="flex justify-start space-x-4">
            <a href="https://www.facebook.com/scottybleds/" target="_blank" rel="noopener noreferrer" className="text-xl">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://www.instagram.com/scottybsleds/" target="_blank" rel="noopener noreferrer" className="text-xl">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            {/* Uncomment and replace with your Pinterest profile link if needed
              <a href="https://pinterest.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-xl">
              <FontAwesomeIcon icon={faPinterest} />
              </a>
             */}
            <a href="https://www.youtube.com/watch?v=Sh6Zl7Uzm24" target="_blank" rel="noopener noreferrer" className="text-xl">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>

        </div>
      </div>

      <div className="text-center py-4 mt-4">
        <p>© 2024 Scotty B's LED's. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default MainFooter;
