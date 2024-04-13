import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  // faCartPlus,
  // faUser,
  faAddressCard,
  // faImage,
  faAddressBook,
  faHouse
} from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as SBLEDSLogo } from '../assets/Logos/SBLEDSLogo.svg';

const Header = () => {
  return (
    <header className="flex bg-slate-800 items-center justify-between px-4 fixed top-0 left-0 right-0 lg:px-6 h-14 ">
      <Link to="/" className="flex items-center">
        <SBLEDSLogo className="h-10 w-10" />
        <span className="ml-2 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
          Scotty B's LED's
        </span>
      </Link>
      <nav className="flex gap-4 sm:gap-8">
      <Link to="/" >
        <FontAwesomeIcon icon={faHouse} size="xl" className='fill-current text-purple-600 hover:text-purple-700' />
          <span className="sr-only">Home</span>
        </Link>
        {/* <Link to="/express-yourself" className="hover:underline underline-offset-4">
          <FontAwesomeIcon icon={faImage} size="xl" className='fill-current text-purple-600 hover:text-purple-700' />
          <span className="sr-only">Express Yourself</span>
        </Link> */}
        <Link to="/aboutus" className="hover:underline underline-offset-4">
          <FontAwesomeIcon icon={faAddressCard} size="xl" className='fill-current text-purple-600 hover:text-purple-700'/>
          <span className="sr-only">About Us</span>
        </Link>
        {/* <Link to="/profile" className="hover:underline underline-offset-4">
          <FontAwesomeIcon icon={faUser} size="xl" className='fill-current text-purple-600 hover:text-purple-700'/>
          <span className="sr-only">Profile</span>
        </Link> */}
        <Link to="/contact" className="hover:underline underline-offset-4">
          <FontAwesomeIcon icon={faAddressBook} size="xl" className='fill-current text-purple-600 hover:text-purple-700'/>
          <span className="sr-only">Contact</span>
        </Link>
        {/* <Link to="/cart" className="hover:underline underline-offset-4">
          <FontAwesomeIcon icon={faCartPlus} size="xl" className='fill-current text-purple-600 hover:text-purple-700'/>
          <span className="sr-only">Cart</span>
        </Link> */}
      </nav>
    </header>
  );
};

export default Header;


