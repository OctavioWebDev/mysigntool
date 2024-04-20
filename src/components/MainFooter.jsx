import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  // faPinterest,
  faYoutube,
  // Add other icons from FontAwesome as needed
} from '@fortawesome/free-brands-svg-icons';
import { 
  MapContainer, 
  TileLayer, 
  Marker, 
  Popup, 
} from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import SBLEDSLogo from '../assets/Logos/SBLEDSLogo.svg';

const MainFooter = () => {
  return (
    <footer className="flex flex-col w-full shrink-0 items-center px-4 md:px-6">
      <div className="flex flex-wrap justify-between w-full items-start gap-2 sm:gap-6 py-6 border-b border-gray-400">
        <div>
          <img className="h-10 w-10" src={SBLEDSLogo} alt="SB LEDS Logo" />
          <p className="font-bold py-3 text-slate-800">Scotty B's LED's</p>
          <p className=" text-gray-800">4455 Secor Road</p>
          <p className=" text-gray-800">Toledo, Ohio</p>
          <p className=" text-gray-800">Open M-F: 9:00 AM – 5:00 PM</p>
          <p className=" text-gray-800">Phone: (419)481-3567</p>
        </div>

        <div className="map-container">
            <MapContainer center={[41.699360, -83.624310]} zoom={13}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[41.699360, -83.624310]}>
                  <Popup>Scotty B's is currently located here, come over for a cup of coffee</Popup>
                </Marker>
            </MapContainer>
      </div>
        <div className="flex flex-wrap gap-x-12 gap-y-9 mt-6">
          {/* <div className="w-full sm:w-1/2 md:w-1/4">
            <h5 className="font-bold mb-3">Account</h5>
            <p>Orders</p>
            <p>Track your order</p>
          </div> */}
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h5 className=" text-slate-800 py-3 font-bold mb-3">Professional</h5>
            {/* <p>B2B</p> */}
            {/* <p>Whole Sale</p> */}
            <p className=" text-gray-800"><a href="http://localhost:3000/custom-logo" className="hover:underline">Custom Business Logo</a></p>
            <p className=" text-gray-800"><a href="http://localhost:3000/custom-logo" className="hover:underline">Digital Sign</a></p>
            {/* <h5 className="font-bold mt-5">Gift Card</h5> */}
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h5 className="font-bold py-3 text-slate-800 mb-3">Help</h5>
            {/* <p><a href="http://localhost:3000/faq" class="hover:underline">FAQ</a></p> */}
            <p className=" text-gray-800"><a href="http://localhost:3000/shipping" className="hover:underline">Shipping Policy</a></p>
            <p className=" text-gray-800"><a href="http://localhost:3000/returns" className="hover:underline">Return Policy</a></p>
            <p className=" text-gray-800"><a href="http://localhost:3000/contact" className="hover:underline">Contact</a></p>
            <p className=" text-gray-800"><a href="http://localhost:3000/refund" className="hover:underline">Refund Policy</a></p>
            <p className=" text-gray-800"><a href="http://localhost:3000/privacy" className="hover:underline">Privacy Policy</a></p>
            <p className=" text-gray-800"><a href="http://localhost:3000/terms" className="hover:underline">Terms & Conditions</a></p>
          </div>
        </div>
        {/* Follow Us */}
        <div className="md:w-1/4">
          <h5 className="font-bold py-3 text-slate-800 mb-3">Follow us</h5>
          <div className="flex justify-start space-x-4">
            <a href="https://www.facebook.com/scottybleds/" target="_blank" rel="noopener noreferrer" className="text-sm">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://www.instagram.com/scottybsleds/" target="_blank" rel="noopener noreferrer" className="text-sm">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            {/* Uncomment and replace with your Pinterest profile link if needed
              <a href="https://pinterest.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-xl">
              <FontAwesomeIcon icon={faPinterest} />
              </a>
             */}
            <a href="https://www.youtube.com/watch?v=Sh6Zl7Uzm24" target="_blank" rel="noopener noreferrer" className="text-sm">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>

        </div>
      </div>

      <div className="text-center py-4 mt-4">
        <p className=" text-gray-800">© 2024 Scotty B's LED's. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default MainFooter;
