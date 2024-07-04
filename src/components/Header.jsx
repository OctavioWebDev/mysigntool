import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faCartShopping,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as SBLEDSLogo } from '../assets/Logos/SBLEDSLogo.svg';
import HamburgerMenu from './ui/HamburgerMenu';
import TextLink from './ui/TextLink';

// Tooltip component for icon links
const IconLink = ({ to, icon, label }) => (
  <Link to={to} className="hover:underline underline-offset-4 text-purple-600 hover:text-purple-700">
    <FontAwesomeIcon icon={icon} size="sm" className="fill-current" />
    <span className="ml-2">{label}</span>
  </Link>
);

// Main Header component
const Header = () => {
  return (
    <header className="flex bg-slate-800 items-center justify-between px-4 fixed top-0 left-0 right-0 lg:px-6 h-14 ">
      <Link to="/" className="flex items-center">
        <SBLEDSLogo className="h-10 w-10" />
        <span className="ml-2 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
          Scotty B's LED's
        </span>
      </Link>
      <nav className="hidden md:flex gap-4 sm:gap-8">
        <IconLink to="/" icon={faHouse}  />
        <TextLink to="/aboutus" label="About Us" />
        <TextLink to="/custom-logo" label="Custom Logo" />
        <TextLink to="/express-yourself" label="Express-YourSelf" />
        <TextLink to="/contact" label="Contact" />
        <IconLink to="/profile" icon={faUser} />
        <IconLink to="/cart" icon={faCartShopping} />
      </nav>
      <div className="md:hidden">
        <HamburgerMenu />
      </div>
    </header>
  );
};

export default Header;