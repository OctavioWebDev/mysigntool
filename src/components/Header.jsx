import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartPlus,
  faUser,
  faAddressCard,
  faImage,
  faAddressBook,
  faHouse
} from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as SBLEDSLogo } from '../assets/Logos/SBLEDSLogo.svg';

const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link to="/" className="flex items-center justify-center">
        <SBLEDSLogo className="h-10 w-10" />
        <span className="sr-only">Scotty B's LED's</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-8">
      <Link to="/" className="hover:underline underline-offset-4">
        <FontAwesomeIcon icon={faHouse} size="xl"/>
          <span className="sr-only">Home</span>
        </Link>
        <Link to="/express-yourself" className="hover:underline underline-offset-4">
          <FontAwesomeIcon icon={faImage} size="xl" />
          <span className="sr-only">Express Yourself</span>
        </Link>
        <Link to="/aboutus" className="hover:underline underline-offset-4">
          <FontAwesomeIcon icon={faAddressCard} size="xl"/>
          <span className="sr-only">About Us</span>
        </Link>
        <Link to="/profile" className="hover:underline underline-offset-4">
          <FontAwesomeIcon icon={faUser} size="xl"/>
          <span className="sr-only">Profile</span>
        </Link>
        <Link to="/contact" className="hover:underline underline-offset-4">
          <FontAwesomeIcon icon={faAddressBook} size="xl"/>
          <span className="sr-only">Contact</span>
        </Link>
        <Link to="/cart" className="hover:underline underline-offset-4">
          <FontAwesomeIcon icon={faCartPlus} size="xl"/>
          <span className="sr-only">Cart</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;


