import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as SBLEDSLogo } from '../assets/Logos/SBLEDSLogo.svg';
const Header = ({ logo }) => {
    return (
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link to="/" className="flex items-center justify-center" href="#">
          <SBLEDSLogo to="/" className="h-10 w-10" />
          <span className="sr-only">Scotty B's LED's</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link to="/express-yourself" className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Express YourSelf
          </Link>
          <Link to="" className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link to="/profile" className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Profile
          </Link>
          <Link to="" className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
          <Link to="/cart" className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Cart
          </Link>
        </nav>
      </header>
    );
};

export default Header;

