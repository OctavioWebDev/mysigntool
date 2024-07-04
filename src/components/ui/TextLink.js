import React from 'react';
import { Link } from 'react-router-dom';

const TextLink = ({ to, label }) => {
  return (
    <Link to={to} className="hover:underline underline-offset-4 text-purple-600 hover:text-purple-700">
      {label}
    </Link>
  );
};

export default TextLink;
