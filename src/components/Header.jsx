import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleInfo,
  faAt,
  faHouse,
  faRectangleList
} from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as SBLEDSLogo } from '../assets/Logos/SBLEDSLogo.svg';

// Tooltip component for icon links
const IconLinkWithTooltip = ({ to, icon, label }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      <Link to={to}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="hover:underline underline-offset-4"
      >
        <FontAwesomeIcon icon={icon} size="xl" className='fill-current text-purple-600 hover:text-purple-700'/>
        {isHovered && (
          <div className="absolute -left-10 ml-2 p-2 text-sm text-white bg-purple-500 opacity-70 rounded">
            {label}
          </div>
        )}
      </Link>
      <span className="sr-only">{label}</span>
    </div>
  );
};

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
      <nav className="flex gap-4 sm:gap-8">
        <IconLinkWithTooltip to="/" icon={faHouse} label="Home" />
        <IconLinkWithTooltip to="/aboutus" icon={faCircleInfo} label="About Us" />
        <IconLinkWithTooltip to="/custom-logo" icon={faRectangleList} label="Custom Order" />
        <IconLinkWithTooltip to="/contact" icon={faAt} label="Contact" />
        {/* Add more IconLinkWithTooltip for other icons as needed */}
      </nav>
    </header>
  );
};

export default Header;



